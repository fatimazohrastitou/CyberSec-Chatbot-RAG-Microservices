# CyberSec Chatbot RAG Microservices

## Description

Ce projet est un **chatbot de cybersécurité** développé avec **React.js** qui utilise l'option **RAG (retrieval-augmented generation)** pour répondre aux questions liées à la cybersécurité. Le chatbot est intégré à un backend **MongoDB** pour gérer les utilisateurs (inscription, connexion, déconnexion). Il utilise la technologie **Pincone** pour la gestion des données et les requêtes de recherche.

## Fonctionnalités

- **Inscription (Register)** : Les utilisateurs peuvent s'inscrire en créant un compte avec un nom d'utilisateur et un mot de passe.
- **Connexion (Login)** : Les utilisateurs peuvent se connecter avec leur nom d'utilisateur et mot de passe enregistrés.
- **Déconnexion (Logout)** : Les utilisateurs peuvent se déconnecter de leur session.
- **Chatbot Cybersécurité** : Le chatbot répond aux questions liées à la cybersécurité en utilisant des données récupérées via la technologie Pincone.
- **RAG (Retrieval-Augmented Generation)** : L'option RAG permet au chatbot de répondre de manière plus pertinente aux questions en recherchant dans une base de données avant de générer une réponse.

## Technologies utilisées

- **Frontend** : React.js
- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB
- **Technologie de recherche** : Pincone
- **Authentification** : JSON Web Tokens (JWT)

## Installation

### Prérequis

- Node.js et npm installés sur votre machine.
- MongoDB en cours d'exécution.
- Un compte Pincone pour la gestion des données.

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

5. Démarrez le backend :
    ```bash
    npm start
    ```

6. Démarrez le frontend :
    ```bash
    cd ../frontend
    npm start
    ```

7. Ouvrez votre navigateur et allez à `http://localhost:8000` pour utiliser le chatbot.

## Utilisation

- **Connexion/Inscription** : L'utilisateur peut se connecter avec un compte existant ou en créer un nouveau pour accéder au chatbot.
- **Chatbot** : Une fois connecté, l'utilisateur peut poser des questions sur la cybersécurité. Le chatbot utilise Pincone pour effectuer des recherches et fournir des réponses pertinentes.

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

