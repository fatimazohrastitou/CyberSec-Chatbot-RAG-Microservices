const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config();
const { Pinecone } = require('@pinecone-database/pinecone');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For JWT token generation
const User = require('./models/User'); // Assuming you have a User model

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY; // Your API Key for Google Generative AI
const PINECONE_API_KEY = process.env.PINECONE_API_KEY; // Pinecone API Key

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Initialize Pinecone
const pc = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

// Middleware to authenticate requests
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// User registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Server error during registration' });
  }
});

// User login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  console.log('Received username:', username);
  console.log('Received password:', password);

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token in response
    return res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Server error during login' });
  }
});
app.post('/logout', (req, res) => {
  // JWT tokens are stateless, so we don't need to do anything on the server side.
  // The client is responsible for removing the JWT token from localStorage or sessionStorage.
  res.json({ message: 'Logged out successfully' });
});
// Function to retrieve context from Pinecone database (with manual keyword search)
async function retrieveContext(userInput) {
  const index = pc.Index("chatbotcyber2025");

  // Assuming you have a way to store or match data using keywords, you can match based on keywords
  // You would manually map the userInput to a set of keywords here (basic simulation)
  const keywords = userInput.toLowerCase().split(' '); // Simple space-based keyword extraction

  // Query Pinecone using a rough match of keywords, here using the metadata text
  const queryResponse = await index.query({
    topK: 3,
    includeMetadata: true,
    // Ideally, you would use a vector here, but we're simulating with keywords
    filter: { "metadata.text": { "$in": keywords } }
  });

  // Extract relevant context from the response
  const contexts = queryResponse.matches.map(match => match.metadata.text);
  return contexts.join("\n");
}

// Function to check if the user input is relevant to cybersecurity
function isCybersecurityRelated(userInput) {
  const keywords = [
    "cybersecurity", "vulnerabilities", "threats", "data protection", "Cyberterrorism", "Cybercrime", "Espionage",
    "firewalls", "network security", "phishing", "ransomware", "malware",
    "penetration testing", "cyberattacks", "encryption", 
    "firewall configuration", "network monitoring", "security patches", "authentication",
    "cybersécurité", "vulnérabilités", "menaces", "protection des données", 
    "pare-feu", "sécurité réseau", "hameçonnage", "rançongiciel", "logiciel malveillant"
  ];
  return keywords.some(keyword => userInput.toLowerCase().includes(keyword));
}

// Function to check if the user input is a greeting
function isGreeting(userInput) {
  const greetings = ["hi", "hello", "how are you", "hey", "good morning", "good afternoon", "good evening"];
  return greetings.some(greeting => userInput.toLowerCase().includes(greeting));
}

// Function to run chat with Google Generative AI API
async function runChat(userInput) {
  if (isGreeting(userInput)) {
    return "Hello! I am your cybersecurity assistant. How can I assist you today?";
  }

  if (!isCybersecurityRelated(userInput)) {
    return "Sorry, I can only assist with cybersecurity-related topics.";
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // Step 1: Retrieve context from Pinecone
  const context = await retrieveContext(userInput);

  // Step 2: Start chat with context and user input
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "You are a helpful cybersecurity assistant. Your job is to answer questions related to cybersecurity best practices, vulnerabilities, and protection methods." }],
      },
      {
        role: "model",
        parts: [{ text: "Hello! I am your cybersecurity assistant. How can I assist you today?" }],
      },
      {
        role: "user",
        parts: [{ text: `Use the following context to answer questions:\n${context}` }],
      },
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ],
  });

  try {
    const result = await chat.sendMessage(userInput);
    if (!result || !result.response) {
      return "Sorry, I couldn't find information on that topic. Can you please rephrase or ask about another cybersecurity subject?";
    }

    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error in generating response:', error);
    return "Sorry, something went wrong. Please try again later.";
  }
}

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});

// Chat endpoint
app.post('/chat', authenticate, async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
