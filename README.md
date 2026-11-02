# SEEWORLD — Regarder le monde

Portail vitrine officiel et écosystème **SEEWORLD**, présentant l'ensemble des projets logiciels, matériels, FPV et communautaires développés par **Tom Bigot**.

Accessible sur [**seeworld.fr**](https://seeworld.fr).

---

## ✦ Charte Graphique Officielle

Le site suit scrupuleusement la charte du groupe **SEEWORLD**, partagée avec [**Les Tourangeaux**](https://lestourangeaux.fr/charte-graphique.html) :

1. **Peu d'éléments** : Une page montre ce qu'il faut regarder, rien d'autre. Clarté, vide élégant et suppression des artifices.
2. **Noir sur blanc** : Fond blanc papier (`#FFFFFF`) et gris pierre tuffeau (`#FAF9F7`), texte noir (`#000000` et `#3D3D3D`), sans dégradé ni emoji.
3. **Le pointillé comme signature** : Tous les contours sont des pointillés de **2 px** (`border: 2px dashed #575757`). Ils deviennent pleins et noirs au survol ou à l'état actif.
4. **Des gris chauds et une touche de couleur** : Fond papier, touches d'accent appliquées uniquement sur l'action principale et les statuts :
   - **Bleu royal Seeworld** (`#1F75D1`) par défaut.
   - Touches saisonnières interchangeables via le sélecteur d'en-tête : Printemps (`#93C47D`), Été (`#7CBBE0`), Automne (`#E09A6C`), Hiver (`#8FB0D9`).
5. **Typographie Glacial Indifference** :
   - Titres, boutons, étiquettes (`.chip`, `.pill`, `.val`), onglets et numérotations en **capitales espacées** (`letter-spacing: 0.12em` à `0.15em`).
   - Devise en **capitales italiques** : *« REGARDER LE MONDE »*.
   - Seul le texte de lecture reste en minuscules.

---

## ✦ Les 10 Projets Répertoriés

| # | Projet | Domaine | Statut | Stack Clé |
|---|--------|---------|--------|-----------|
| **01** | **Superviseur** | Systèmes & Réseau | En production | C#, .NET 8, Avalonia UI, SSH, AES-256-GCM / Argon2id |
| **02** | **Inskin** | Cybernétique & Mobile | V1 Prête | Kotlin, Jetpack Compose, NFC/RFID, Proxmark3 |
| **03** | **OpenBots** | Systèmes & Réseau | En production | Python, discord.py, Flask, Docker, WebSockets |
| **04** | **Komeon** | Systèmes & Réseau | Actif | Python, FastAPI, LiveKit WebRTC, Avalonia C# |
| **05** | **Multi-Motors** | Drones & FPV | En ligne (quotidien) | Python, GitHub Actions, Google Sheets, multi-motors.fr |
| **06** | **Les Tourangeaux** | Communautés & Web | En ligne | Vite, Charte SEEWORLD, lestourangeaux.fr |
| **07** | **Tours2Tours** | Communautés & Web | En production | Python, discord.py, Flask, SQLite, Lavalink |
| **08** | **Fix-My-Drone** | Drones & FPV | Base de Savoir | Markdown, Betaflight, ExpressLRS, Diagnostic |
| **09** | **Mazda-3 3D Studio** | 3D & Médias | En cours | Blender, Subdivision Surface, PBR Cycles |
| **10** | **127IL & Pensées Nocturnes**| 3D & Médias | En direct | Twitch API, OBS Studio, pensées-nocturnes.fr |

---

## ✦ Déploiement & Hébergement

- **Dépôt GitHub** : [github.com/TakDai/SeeWorld](https://github.com/TakDai/SeeWorld)
- **Branche principale** : `main`
- **Branche de publication OVH** : `ovh` (mise à jour automatique par GitHub Actions [`.github/workflows/ovh.yml`](.github/workflows/ovh.yml))
- **Domaine** : [seeworld.fr](https://seeworld.fr)

---

## ✦ Arborescence

```
Seeworld/
├── fonts/               # Police officielle Glacial Indifference (400, 400 italic, 700)
├── .github/workflows/   # Workflow de compilation et publication automatique (ovh.yml)
├── index.html           # Structure sémantique du catalogue
├── styles.css           # Charte Seeworld (tokens, pointillés 2px, capitales espacées)
├── app.js               # Moteur interactif (saisons, filtres, recherche, modale)
├── CNAME                # Configuration du domaine seeworld.fr
└── README.md            # Documentation
```
