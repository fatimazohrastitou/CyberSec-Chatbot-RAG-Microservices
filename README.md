# 📂 Membres du Groupe : 
- **Haddad Alae**
- **Stitou Fatima**

#1. CyberSec Chatbot RAG Microservices
Description
Ce projet est un chatbot de cybersécurité développé avec React.js qui utilise l'option RAG (Retrieval-Augmented Generation) pour répondre uniquement aux questions liées à la cybersécurité. Le chatbot est intégré à un backend MongoDB pour gérer les utilisateurs (inscription, connexion, déconnexion). Il exploite la technologie Pincone pour la gestion des données et les requêtes de recherche. En outre, il intègre Gemini AI pour générer des réponses intelligentes aux questions des utilisateurs, se concentrant spécifiquement sur les sujets de cybersécurité.

Fonctionnalités
Inscription (Register) : Créez un compte avec un nom d'utilisateur et un mot de passe.
Connexion (Login) : Connectez-vous avec votre nom d'utilisateur et mot de passe.
Déconnexion (Logout) : Déconnectez-vous de votre session active.
Chatbot Cybersécurité avec Gemini AI : Utilisez Gemini AI pour des réponses intelligentes aux questions sur la cybersécurité.
RAG (Retrieval-Augmented Generation) : Le chatbot répond uniquement aux questions liées à la cybersécurité en filtrant les requêtes pertinentes avant de générer une réponse.
Gestion des données avec Pincone : Recherche et indexation des informations de cybersécurité via Pincone.
Technologies utilisées
Frontend : React.js
Backend : Node.js, Express.js
Base de données : MongoDB
Technologie de recherche : Pincone
IA pour les réponses : Gemini AI
Authentification : JSON Web Tokens (JWT)
Installation
Prérequis
Node.js et npm installés sur votre machine.
MongoDB en cours d'exécution.
Un compte Gemini AI pour l'intégration de l'IA.
Un compte Pincone pour la gestion des données.
Étapes d'installation
Clonez le dépôt :
git clone https://github.com/fatimazohrastitou/CyberSec-Chatbot-RAG-Microservices.git
Installez les dépendances pour le frontend :
cd chatbot_cybersecurity_2024
cd frontend
npm install
Installez les dépendances pour le backend :
cd ../backend
npm install
Configurez les variables d'environnement pour le backend (.env) :
MONGODB_URI : URL de votre base de données MongoDB.
JWT_SECRET : Secret pour gérer les tokens JWT.
PINCONE_API_KEY : Clé API Pincone.
GEMINI_API_KEY : Clé API pour Gemini AI.
Démarrez le backend :
npm start
Démarrez le frontend :
cd ../frontend
npm start
Accédez au chatbot : Ouvrez votre navigateur et allez à http://localhost:3000.
Utilisation
Connexion/Inscription : Se connecter avec un compte existant ou en créer un nouveau.
Chatbot Cybersécurité avec Gemini AI : Après connexion, vous pouvez poser des questions sur la cybersécurité. Le chatbot répondra intelligemment grâce à l'intégration de Gemini AI et à l'option RAG.
Structure du projet
Contribuer
Si vous souhaitez contribuer au projet, suivez ces étapes :

Forkez le dépôt.
Créez une nouvelle branche : git checkout -b feature/ma-nouvelle-fonctionnalité.
Commitez vos modifications : git commit -am 'Ajout d'une nouvelle fonctionnalité'.
Poussez la branche : git push origin feature/ma-nouvelle-fonctionnalité.
Créez une Pull Request.
Auteurs
Fatima Stitou - Développement du projet.
2. Modèle de Diffusion
Fonctionnalités
Simulation de diffusion : Modélisation de la propagation des menaces dans un réseau.
Classification des nœuds infectés : Utilisation de RandomForestClassifier pour identifier les nœuds comme "menace" ou "normal".
Visualisation graphique :
Les nœuds infectés sont en rouge.
Les nœuds normaux en bleu ou vert.
Les connexions entre les nœuds sont représentées par des arêtes.
Structure du Projet
Fichiers Principaux
diff.ipynb : Notebook Jupyter pour l'analyse des données et la modélisation de diffusion.
app.py : Application Flask permettant l'interaction avec la simulation et la génération de visualisations.
friday.csv : Fichier de données réseau utilisé pour la simulation.
Remplace les valeurs manquantes par 0 et transforme les labels (0 en "Normal", autres en "Threat").
network_data_infected.csv : Fichier contenant des données sur les nœuds infectés.
Comprend des informations sur les paquets envoyés et reçus, le débit des flux, etc.
templates/index.html : Interface principale pour l'application Flask.
templates/results.html : Affiche les résultats et la visualisation après simulation.
Interface Web interactive
Définissez les nœuds initiaux et visualisez la propagation des menaces avec leurs classifications.
Accédez aux résultats sous forme de fichier sauvegardé.
Auteurs
Haddad Alae - Développement du projet.
3. CI/CD
Le pipeline CI/CD permet d'automatiser les tests et déploiements du projet.

Checkout du code :
- name: Checkout code
uses: actions/checkout@v3

Configuration de Python :
- name: Set up Python
uses: actions/setup-python@v4
with:
python-version: '3.10'

Installation des dépendances :
- name: Install dependencies
run: |
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

Tests :
- name: Run Flask tests
run: |
pytest tests/

Conclusion
Ce projet offre une solution innovante pour la cybersécurité en combinant un chatbot intelligent, alimenté par Gemini AI, et une approche RAG pour garantir que seules les informations pertinentes sont générées. En parallèle, l’utilisation de Pincone pour la gestion des données et de MongoDB pour la gestion des utilisateurs crée une architecture robuste et flexible. Le modèle de diffusion, qui simule la propagation des menaces dans un réseau, est un excellent complément pour évaluer la sécurité d’un système en temps réel. Enfin, avec un pipeline CI/CD optimisé, ce projet garantit une automatisation efficace des tests et des déploiements.

Grâce à cette combinaison de technologies, d'outils modernes et de bonnes pratiques de développement, ce projet est prêt à répondre aux défis de cybersécurité actuels et futurs, tout en offrant une base solide pour l'amélioration continue.


# Modèle de Diffusion

## Fonctionnalités

- **Simulation de diffusion** : Modélisation de la propagation des menaces dans un réseau.
- **Classification des nœuds infectés** : Utilisation de `RandomForestClassifier` pour identifier les nœuds comme "menace" ou "normal".
- **Visualisation graphique** :
  - Les **nœuds infectés** sont représentés en **rouge**.
  - Les **nœuds normaux** sont affichés en **bleu** ou **vert**.
  - Les **connexions entre les nœuds** sont représentées par des **arêtes**.

---

## Structure du Projet

### Fichiers Principaux

- **`diff.ipynb`** : Notebook Jupyter pour l'exploration et l'analyse des données, ainsi que la modélisation de diffusion.  
  Un modèle personnalisé, `DiffusionModel`, a été développé pour simuler la propagation des menaces :
  - Les **nœuds de départ** sont définis comme des points initiaux infectés.
  - Les voisins des nœuds infectés sont progressivement marqués comme infectés sur un nombre défini d’**itérations**.

- **`app.py`** : Application Flask pour permettre l'interaction utilisateur avec la simulation et générer des visualisations.

- **`friday.csv`** : Fichier de données réseau utilisé pour la simulation.  
  Ce fichier contient des informations réseau telles que :  
  - Les **adresses IP source et destination**.  
  - Le **nombre total de paquets envoyés et reçus**.  
  - Les statistiques des flux (ex. : **durée, débit**).  

  Les données sont **prétraitées** pour :  
  - Remplacer les **valeurs manquantes** par 0.  
  - Transformer les **labels** (`0` en `Normal`, autres en `Threat`).

- **`network_data_infected.csv`** : Fichier **généré** contenant les données relatives aux nœuds infectés.  
  Ce fichier contient des informations sur le comportement réseau des nœuds, telles que :
  - Le **nombre de paquets envoyés et reçus**.
  - La **longueur des paquets**.
  - Le **débit des flux**.
  - Un label indiquant si le nœud est considéré comme une **menace** ou non.  

  Ces données sont utilisées pour simuler et classifier les nœuds infectés dans le réseau.

- **`templates/index.html`** : Interface principale pour l'application Flask.  
- **`templates/results.html`** : Résultats et visualisation après simulation.  

  Une interface web interactive permet :  
  - De **définir les nœuds initiaux**.  
  - De **visualiser la diffusion** des menaces et leurs classifications.  
  - D’**accéder aux résultats sauvegardés** sous forme de fichier.  

---

## Résultats

### Visualisation de la diffusion

Une **visualisation graphique** montre :  
- Les **nœuds infectés** en **rouge** et les **nœuds normaux** en **bleu** ou **vert**.  
- Les **connexions entre les nœuds** sous forme d’arêtes.  

![Exemple de Visualisation](https://github.com/user-attachments/assets/c5c1e70d-be9a-4ba2-8657-0dc8be3dfa3a)

---

## Auteurs

- **Haddad Alae** - Développement du projet.
Le pipeline CI/CD est configuré pour automatiser les tests et déploiements.

1. **Checkout du code** :
    ```yaml
    - name: Checkout code
      uses: actions/checkout@v3
    ```

2. **Configuration de Python** :
    ```yaml
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.10'
    ```

3. **Installation des dépendances** :
    ```yaml
    - name: Install dependencies
      run: |
        python -m venv venv
        source venv/bin/activate
        pip install -r requirements.txt
    ```

4. **Tests** (si disponibles) :
    ```yaml
    - name: Run Flask tests
      run: |
        pytest tests/
    ```
