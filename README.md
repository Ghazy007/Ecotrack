# EcoTrack - Application de Suivi de l'Empreinte Carbone

🌍 **À propos**
EcoTrack est une application mobile permettant aux utilisateurs de suivre et analyser leur empreinte carbone quotidienne en fonction de leur mode de vie. L'objectif est de sensibiliser à l'impact environnemental des activités quotidiennes et d'aider à adopter des pratiques plus durables grâce à des recommandations personnalisées.

🛠️ **Technologies utilisées**
- Frontend : React Native (Expo)
- Backend : Node.js, Express
- Base de données : MongoDB (avec Mongoose)

📂 **Structure du projet**
```
EcoTrack/
├── backend/
│   ├── server.js         -> Serveur Express
│   ├── models/userModel.js  -> Modèle utilisateur MongoDB
│   ├── routes/userRoutes.js  -> Routes API
│   ├── package.json      -> Dépendances backend
│
├── frontend/
│   ├── App.js           -> Composant principal React Native
│   ├── services/api.js  -> Gestion des requêtes API
│   ├── package.json     -> Dépendances frontend
│
├── README.md            -> Documentation du projet
```

🚀 **Installation et exécution**

1️⃣ **Cloner le projet**
```bash
git clone https://github.com/Ghazy007/EcoTrack.git
cd EcoTrack
```

2️⃣ **Installation des dépendances**
#### Backend
```bash
cd backend
npm install
npm start
```
#### Frontend
```bash
cd ../frontend
npm install
npx expo start
```

🎯 **Fonctionnalités principales**
- Ajout d'un utilisateur avec ses habitudes de consommation
- Calcul automatique de l'empreinte carbone quotidienne
- Génération de recommandations basées sur les données fournies
- Affichage des statistiques et classement des utilisateurs selon leur impact
- Interface intuitive et facile à utiliser

🔥 **Améliorations futures**
- Intégration d'un graphique interactif pour visualiser l'évolution des émissions
- Ajout d'un système de badges pour encourager la réduction de l'empreinte carbone
- Déploiement sur MongoDB Atlas pour un accès global aux données

📸 **Aperçu**
_(À venir - captures d'écran de l'application en action)_

👨‍💻 **Auteur**
- Ghazy007 ([GitHub](https://github.com/Ghazy007))

🌱 **Vous avez des idées d'amélioration ?** Contribuez en ouvrant une pull request ! 🚀
