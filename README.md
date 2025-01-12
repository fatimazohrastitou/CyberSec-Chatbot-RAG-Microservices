# CyberSec Chatbot RAG Microservices

## Description

Ce projet est un **chatbot de cybersécurité** développé avec **React.js** qui utilise l'option **RAG (retrieval-augmented generation)** pour répondre uniquement aux questions liées à la cybersécurité. Le chatbot est intégré à un backend **MongoDB** pour gérer les utilisateurs (inscription, connexion, déconnexion). Il utilise la technologie **Pincone** pour la gestion des données et les requêtes de recherche. De plus, il intègre **Gemini AI** pour générer des réponses intelligentes aux questions des utilisateurs, en se concentrant sur les sujets de cybersécurité.

## Fonctionnalités

- **Inscription (Register)** : Les utilisateurs peuvent s'inscrire en créant un compte avec un nom d'utilisateur et un mot de passe.
- **Connexion (Login)** : Les utilisateurs peuvent se connecter avec leur nom d'utilisateur et mot de passe enregistrés.
- **Déconnexion (Logout)** : Les utilisateurs peuvent se déconnecter de leur session.
- **Chatbot Cybersécurité avec Gemini AI** : Le chatbot utilise Gemini AI pour répondre de manière intelligente aux questions des utilisateurs.
- **RAG (Retrieval-Augmented Generation)** : L'option RAG permet au chatbot de répondre uniquement aux questions liées à la cybersécurité en filtrant les requêtes pertinentes avant de générer une réponse.
- **Gestion des données avec Pincone** : Utilisation de Pincone pour la recherche et l'indexation des informations liées à la cybersécurité.

## Technologies utilisées

- **Frontend** : React.js
- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB
- **Technologie de recherche** : Pincone
- **IA pour les réponses** : Gemini AI
- **Authentification** : JSON Web Tokens (JWT)

## Installation

### Prérequis

- Node.js et npm installés sur votre machine.
- MongoDB en cours d'exécution.
- Un compte **Gemini AI** pour l'intégration de l'IA.
- Un compte **Pincone** pour la gestion des données.

### Étapes d'installation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/fatimazohrastitou/CyberSec-Chatbot-RAG-Microservices.git
    ```

2. Installez les dépendances pour le frontend :
    ```bash
    cd chatbot_cybersecurity_2024
    cd frontend
    npm install
    ```

3. Installez les dépendances pour le backend :
    ```bash
    cd ../backend
    npm install
    ```

4. Configurez les variables d'environnement pour le backend (`.env`) :
    - `MONGODB_URI` : L'URL de votre base de données MongoDB.
    - `JWT_SECRET` : Le secret utilisé pour la gestion des tokens JWT.
    - `PINCONE_API_KEY` : Votre clé API Pincone.
    - `GEMINI_API_KEY` : Votre clé API pour Gemini AI.

5. Démarrez le backend :
    ```bash
    npm start
    ```

6. Démarrez le frontend :
    ```bash
    cd ../frontend
    npm start
    ```

7. Ouvrez votre navigateur et allez à `http://localhost:3000` pour utiliser le chatbot.

## Utilisation

- **Connexion/Inscription** : L'utilisateur peut se connecter avec un compte existant ou en créer un nouveau pour accéder au chatbot.
- **Chatbot avec Gemini AI** : Une fois connecté, l'utilisateur peut poser des questions sur la cybersécurité. Le chatbot utilise Gemini AI pour répondre intelligemment à ces questions, mais uniquement celles qui sont liées à la cybersécurité grâce à l'option RAG.

## Structure du projet



## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Forkez ce dépôt.
2. Créez une nouvelle branche (`git checkout -b feature/ma-nouvelle-fonctionnalité`).
3. Commitez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-nouvelle-fonctionnalité`).
5. Créez une Pull Request.

## Auteurs

- **Fatima Stitou** - Développement du projet.

