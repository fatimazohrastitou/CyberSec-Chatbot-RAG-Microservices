📂 Membres du Groupe :

Haddad Alae
Stitou Fatima
1. CyberSec Chatbot RAG Microservices
Description
Ce projet est un chatbot de cybersécurité développé avec React.js et utilisant l'option RAG (Retrieval-Augmented Generation) pour répondre exclusivement aux questions liées à la cybersécurité.
Le backend repose sur MongoDB pour la gestion des utilisateurs (inscription, connexion, déconnexion) et intègre Pincone pour la recherche et la gestion des données. Le chatbot utilise également Gemini AI pour fournir des réponses intelligentes, tout en filtrant les requêtes grâce à l’option RAG.

Fonctionnalités
Inscription (Register) : Création d'un compte utilisateur.
Connexion (Login) : Authentification via nom d'utilisateur et mot de passe.
Déconnexion (Logout) : Fermeture de session sécurisée.
Chatbot Cybersécurité : Réponses générées par Gemini AI, limitées aux sujets de cybersécurité grâce à RAG.
Gestion des données : Recherche et indexation via Pincone.
Technologies utilisées
Frontend : React.js
Backend : Node.js, Express.js
Base de données : MongoDB
Technologie de recherche : Pincone
IA : Gemini AI
Authentification : JSON Web Tokens (JWT)
2. Modèle de Diffusion
Description
Un modèle de diffusion est implémenté pour simuler la propagation des menaces au sein d’un réseau.
L’application intègre une classification des nœuds infectés via un RandomForestClassifier, avec des visualisations graphiques pour représenter les menaces.

Fonctionnalités
Simulation de la propagation des menaces dans le réseau.
Classification des nœuds en deux catégories : "menace" (rouge) ou "normal".
Visualisation graphique des connexions entre les nœuds et leur état.
Structure du Projet
diff.ipynb : Simulation et modélisation de diffusion (Notebook Jupyter).
app.py : Interface utilisateur via Flask.
fichiers CSV : Données réseau utilisées pour la classification.
Résultats
Les résultats sont visualisés avec des nœuds infectés en rouge et des connexions illustrant la propagation dans le réseau.

3. CI/CD
Un pipeline CI/CD est mis en place pour automatiser les tests et le déploiement.

Étapes clés
Configuration de l'environnement (Python 3.10).
Installation des dépendances avec pip.
Lancement des tests avec pytest.




Conclusion
Ce projet représente une convergence ambitieuse entre intelligence artificielle, cybersécurité et automatisation. Le CyberSec Chatbot RAG Microservices incarne une solution innovante et spécialisée, offrant une assistance précise aux utilisateurs grâce à l’implémentation de Gemini AI et de l’option RAG, garantissant des réponses ciblées et pertinentes dans le domaine de la cybersécurité.

Parallèlement, le Modèle de Diffusion apporte une approche analytique puissante pour comprendre et simuler la propagation des menaces dans un réseau, tout en proposant des visualisations interactives et une classification précise des risques. Ce double focus rend le projet pertinent non seulement pour les professionnels de la cybersécurité, mais aussi pour les chercheurs explorant la gestion des menaces et la sécurité réseau.

Enfin, l'intégration d’un pipeline CI/CD assure la robustesse, l'automatisation et la fiabilité des livraisons de ce projet, offrant une base solide pour un déploiement en environnement réel. Ce projet s'inscrit comme un outil essentiel pour renforcer la posture de sécurité informatique et anticiper les défis futurs.

💡 En alliant expertise technique et innovation, ce travail illustre parfaitement l’impact que des solutions modernes et adaptées peuvent avoir dans la lutte contre les cybermenaces, ouvrant la voie à de futures améliorations dans le domaine.