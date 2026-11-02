# seeworld — regarder le monde

Maquette web interactive du portail vitrine et écosystème **seeworld**, présentant l'ensemble des projets logiciels, matériels, mobiles, FPV et communautaires développés par Tom Bigot.

---

## ✦ Caractéristiques de la Maquette

- **Charte officielle seeworld** : 
  - Typographies éditoriales et lisibles : *Fraunces* (titres) & *Inter* (corps de texte) & *JetBrains Mono* (spécifications techniques).
  - Palette sobre et contrastée papier/encre : mode clair (`#f7f6f3` / `#141414`) et mode sombre (`#111110` / `#ecebe7`).
  - Bordures discrètes et minimalistes.
- **Catalogue interactif complet (10 projets réels)** :
  1. **Superviseur** : Application desktop C# / Avalonia de supervision sécurisée via SSH sans port public, coffre AES-256-GCM / Argon2id.
  2. **Inskin** : Application Android Kotlin / Jetpack Compose pour lecture/écriture/émulation NFC, implants sous-cutanés & déverrouillage PC.
  3. **OpenBots** : Plateforme cloud managée d'hébergement de bots Discord (Python, discord.py, Docker, panel d'administration web).
  4. **Komeon** : Messagerie temps réel pour communautés (FastAPI, WebSockets, voix/vidéo LiveKit, client natif C# Avalonia et Web SPA).
  5. **Multi-Motors** : Catalogue de référence mondial des moteurs brushless FPV avec pipeline de synchronisation quotidienne.
  6. **Les Tourangeaux** : Site officiel et plateforme communautaire associative tourangelle, thèmes saisonniers adaptatifs.
  7. **Tours2Tours** : Bot Discord communautaire (RPG, niveaux, économie SQLite) et dashboard web Flask.
  8. **Fix-My-Drone** : Base de connaissances technique et diagnostics guidés pour le matériel et l'électronique FPV.
  9. **Mazda-3 3D Studio** : Modélisation 3D surfacique haute fidélité (Blender, shading réaliste PBR).
  10. **127IL & Pensées Nocturnes** : Émissions live streaming sur Twitch et réflexions d'ingénierie numérique.
- **Fonctionnalités UX riches** :
  - Recherche instantanée par nom, mot-clé, tag ou technologie.
  - Filtre par catégorie (Systèmes & Réseau, Mobile & Cybernétique, Drones & FPV, Communautés & Web, 3D & Médias).
  - Bascule d'affichage : Vue grille immersive ou Vue liste compacte.
  - Volet / Modale d'inspection approfondie avec spécifications techniques, architecture et liens.
  - Horloge temps réel CET et indicateur de surveillance active.
  - Mode sombre / clair mémorisé avec persistance (`localStorage`).

---

## ✦ Comment ouvrir la maquette ?

Aucune installation complexe ni dépendance requise :

1. Double-cliquez directement sur `index.html` pour l'ouvrir dans votre navigateur préféré (Google Chrome, Microsoft Edge, Firefox, Brave).
2. Ou via ligne de commande PowerShell :
   ```powershell
   Start-Process index.html
   ```

---

## ✦ Arborescence

```
Seeworld/
├── index.html       # Structure HTML5 sémantique, Tailwind CDN & Lucide Icons
├── styles.css       # Charte seeworld, tokens CSS, animations et vue liste
├── app.js           # Moteur interactif (filtrage, recherche, modale détaillée)
└── README.md        # Présentation et guide de prise en main
```
