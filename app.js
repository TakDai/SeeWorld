/**
 * SEEWORLD — Regarder le monde
 * Moteur du catalogue et interactions selon la charte des Tourangeaux / SEEWORLD
 */

const PROJECTS = [
  {
    num: "01",
    id: "superviseur",
    title: "Superviseur",
    category: "system",
    categoryLabel: "SYSTÈMES & RÉSEAU",
    status: "EN PRODUCTION",
    statusType: "production",
    year: "2026",
    summary: "Application desktop (C# / .NET 8 / Avalonia) pour superviser le parc : OpenBots, Komeon, serveurs dédiés.",
    description: "Superviseur est le centre de commande de tout le parc seeworld. L'application tourne en local sur la machine et communique avec les serveurs distants exclusivement par tunnels SSH : aucun port ouvert en production, aucun agent tiers installé. Les identifiants, comptes, chemins de clés et phrases de passe sont chiffrés en AES-256-GCM avec une clé dérivée du mot de passe maître par Argon2id.",
    technologies: ["C#", ".NET 8", "Avalonia UI", "SSH.NET", "AES-256-GCM", "Argon2id", "YAML"],
    specs: [
      { label: "Réseau & Sécurité", val: "Tunnels 100% SSH, zéro port exposé publiquement" },
      { label: "Chiffrement du coffre", val: "AES-256-GCM avec dérivation Argon2id" },
      { label: "Interface native", val: "Bureau multiplateforme avec Avalonia UI" },
      { label: "Cibles managées", val: "OpenBots, Komeon, machines Linux dédiées" }
    ],
    links: [
      { label: "DOCUMENTATION", url: "https://tom-bigot.fr", icon: "book-open" }
    ]
  },
  {
    num: "02",
    id: "inskin",
    title: "Inskin",
    category: "mobile-hardware",
    categoryLabel: "CYBERNÉTIQUE & MOBILE",
    status: "V1 PRÊTE",
    statusType: "production",
    year: "2026",
    summary: "Application Android Kotlin / Jetpack Compose pour lecture, écriture, émulation et organisation de tags NFC/RFID et implants.",
    description: "Inskin est conçue pour les passionnés de biohacking, d'électronique et de sécurité physique. Elle offre une gestion complète des puces sous-cutanées et badges (NTAG, Mifare, DESFire), un mode d'émulation Host Card Emulation (HCE), un système d'automatisations par flux visuels, la communication avec des modules de terrain (Proxmark3) et un serveur de déverrouillage PC piloté par puce.",
    technologies: ["Android", "Kotlin", "Jetpack Compose", "Coroutines / Flows", "NFC / RFID", "Proxmark3", "Python Server"],
    specs: [
      { label: "Types de puces", val: "Implants biologiques, NTAG, Mifare Classic, DESFire" },
      { label: "Déverrouillage PC", val: "Serveur sécurisé d'ouverture de session à l'approche" },
      { label: "Architecture", val: "Clean Architecture réactive avec Jetpack Compose" },
      { label: "Support Hardware", val: "Passerelle vers périphériques de test & Proxmark" }
    ],
    links: [
      { label: "DÉPÔT GITHUB", url: "https://github.com/TakDai/Inskin", icon: "github" }
    ]
  },
  {
    num: "03",
    id: "openbots",
    title: "OpenBots",
    category: "system",
    categoryLabel: "SYSTÈMES & RÉSEAU",
    status: "EN PRODUCTION",
    statusType: "production",
    year: "2026",
    summary: "Plateforme d'hébergement managée de bots Discord : panel d'administration web Flask + process bot isolé par client.",
    description: "OpenBots répond au besoin d'un hébergement fiable et administrable pour les robots communautaires Discord. Chaque client dispose de son propre environnement d'exécution (discord.py) totalement étanche pour prévenir toute fuite de configuration entre serveurs. L'interface web permet de surveiller la santé des bots, consulter les logs en temps réel et relancer les services à chaud.",
    technologies: ["Python", "discord.py", "Flask", "Docker", "PostgreSQL", "WebSockets"],
    specs: [
      { label: "Isolation client", val: "1 processus dédié par client, aucun partage de token" },
      { label: "Supervision", val: "Heartbeat continu et relance automatique en cas d'erreur" },
      { label: "Panel Web", val: "Interface web de configuration et consultation des logs" },
      { label: "Intégration", val: "Surveillance directe dans l'application Superviseur" }
    ],
    links: [
      { label: "ACCÉDER À OPENBOTS", url: "https://openbots.fr", icon: "globe" }
    ]
  },
  {
    num: "04",
    id: "komeon",
    title: "Komeon",
    category: "system",
    categoryLabel: "SYSTÈMES & RÉSEAU",
    status: "DÉVELOPPEMENT ACTIF",
    statusType: "active",
    year: "2026",
    summary: "Plateforme de messagerie pour communautés : serveur API Python (FastAPI/WebSockets), voix/vidéo LiveKit, clients natifs C# et Web.",
    description: "Komeon garantit la maîtrise totale des communications communautaires. L'infrastructure backend s'appuie sur FastAPI et des WebSockets haute cadence pour le texte, couplés à une passerelle WebRTC LiveKit pour des canaux vocaux et flux vidéo à latence imperceptible. L'expérience est accessible via une interface Web moderne ou une application bureau native C# / Avalonia.",
    technologies: ["Python", "FastAPI", "LiveKit WebRTC", "WebSockets", "C# Avalonia", "TypeScript", "Redis"],
    specs: [
      { label: "Voix & Vidéo", val: "Flux WebRTC LiveKit sous les 100ms de latence" },
      { label: "Clients supportés", val: "Client bureau C# Avalonia + Web Single Page App" },
      { label: "Écosystème", val: "Interfaçage avec OpenBots et monitoring Superviseur" },
      { label: "Indépendance", val: "Auto-hébergement complet sans intermédiaire" }
    ],
    links: [
      { label: "SPÉCIFICATIONS", url: "https://tom-bigot.fr", icon: "code" }
    ]
  },
  {
    num: "05",
    id: "multi-motors",
    title: "Multi-Motors",
    category: "fpv-robotics",
    categoryLabel: "DRONES & FPV",
    status: "EN LIGNE / QUOTIDIEN",
    statusType: "production",
    year: "2026",
    summary: "Catalogue de référence des moteurs brushless pour drones FPV, mis à jour chaque jour automatiquement.",
    description: "Multi-Motors centralise, vérifie et classe tous les moteurs brushless du marché FPV mondial. Chaque nuit, un pipeline automatisé sous GitHub Actions analyse les feuilles communautaires, les fabricants et les boutiques de modélisme afin d'enrichir les fiches techniques (KV, stator, poids, poussée en grammes, ampérage, compatibilités LiPo).",
    technologies: ["Python", "GitHub Actions (CI/CD)", "Google Sheets API", "Web Statistique", "CSV Pipeline"],
    specs: [
      { label: "Fréquence d'actualisation", val: "Scraping et normalisation automatisée chaque nuit" },
      { label: "Données techniques", val: "Stator, KV, poids, poussée, ampérage, hélices recommandées" },
      { label: "Filtres dynamiques", val: "Tension 1S à 6S, formats 0802 à 2807+" },
      { label: "Déploiement", val: "Branche ovh synchronisée automatiquement avec l'hébergement" }
    ],
    links: [
      { label: "MULTI-MOTORS.FR", url: "https://multi-motors.fr", icon: "external-link" },
      { label: "DÉPÔT GITHUB", url: "https://github.com/TakDai/Multi-Motors", icon: "github" }
    ]
  },
  {
    num: "06",
    id: "lestourangeaux",
    title: "Les Tourangeaux",
    category: "community-web",
    categoryLabel: "COMMUNAUTÉS & WEB",
    status: "EN LIGNE",
    statusType: "production",
    year: "2026",
    summary: "Site officiel et vitrine interactive de l'association et communauté Les Tourangeaux, sous la charte SEEWORLD.",
    description: "Les Tourangeaux rassemble les citoyens, étudiants et professionnels de Touraine. Le site web officiel met en pratique la charte SEEWORLD : fond blanc, noir, pointillés 2 px, capitales espacées en Glacial Indifference, lys doré et adaptation chromatique automatique selon les quatre saisons de l'année. Les pages sont compilées avec Vite à partir de partials modulaires.",
    technologies: ["Vite", "HTML5 Sémantique", "CSS Thématique Saisonnier", "JavaScript", "Discord API"],
    specs: [
      { label: "Direction artistique", val: "Charte SEEWORLD, noir sur blanc, pointillés 2px" },
      { label: "Thèmes de saison", val: "Printemps (#93C47D), Été (#7CBBE0), Automne (#E09A6C), Hiver (#8FB0D9)" },
      { label: "Communauté", val: "Passerelle vers le serveur Discord Les Tourangeaux" },
      { label: "Hébergement", val: "Déploiement continu synchronisé sur OVH" }
    ],
    links: [
      { label: "LESTOURANGEAUX.FR", url: "https://lestourangeaux.fr", icon: "external-link" },
      { label: "CHARTE GRAPHIQUE", url: "https://lestourangeaux.fr/charte-graphique.html", icon: "palette" }
    ]
  },
  {
    num: "07",
    id: "tours2tours",
    title: "Tours2Tours",
    category: "community-web",
    categoryLabel: "COMMUNAUTÉS & WEB",
    status: "EN PRODUCTION",
    statusType: "production",
    year: "2026",
    summary: "Bot Discord communautaire (modération, niveaux d'XP, économie, RPG) et panel d'administration web Flask.",
    description: "Tours2Tours anime le serveur communautaire au quotidien. Il intègre un système d'expérience basé sur les messages et salons vocaux, une économie virtuelle avec boutique de rôles, un système RPG, et un panel web dédié permettant de configurer chaque module sans jamais modifier le code source ou redémarrer le bot.",
    technologies: ["Python", "discord.py", "Flask", "SQLite (levels.db)", "Lavalink", "Docker"],
    specs: [
      { label: "Niveaux & XP", val: "Calcul dynamique en temps réel texte et vocal" },
      { label: "Panel d'administration", val: "Interface web de paramétrage sans coupure" },
      { label: "Diffusion audio", val: "Serveur Lavalink pour streaming vocal sans latence" },
      { label: "Persistance", val: "Base SQLite avec sauvegardes automatisées" }
    ],
    links: [
      { label: "DÉPÔT GITHUB", url: "https://github.com/TakDai/Tours2Tours", icon: "github" }
    ]
  },
  {
    num: "08",
    id: "fix-my-drone",
    title: "Fix-My-Drone",
    category: "fpv-robotics",
    categoryLabel: "DRONES & FPV",
    status: "BASE DE SAVOIR",
    statusType: "active",
    year: "2026",
    summary: "Base de connaissances et outil interactif d'aide au diagnostic de pannes pour drones FPV et électronique de vol.",
    description: "Fix-My-Drone rassemble les retours d'expérience et schémas techniques de réparation pour télépilotes FPV : diagnostic des désynchronisations ESC, analyse des interférences vidéo, configuration des récepteurs radio ExpressLRS et sécurisation des circuits d'alimentation LiPo.",
    technologies: ["Markdown", "Betaflight Configurator", "ExpressLRS", "Wiring Guides"],
    specs: [
      { label: "Protocoles", val: "ExpressLRS, Crossfire, Betaflight, DShot" },
      { label: "Format", val: "Arbres logiques de diagnostic interactifs pas à pas" },
      { label: "Public", val: "Pilotes FPV débutants et constructeurs avancés" }
    ],
    links: [
      { label: "BASE TECHNIQUE", url: "https://tom-bigot.fr", icon: "file-text" }
    ]
  },
  {
    num: "09",
    id: "mazda-3",
    title: "Mazda-3 3D Studio",
    category: "creation-3d",
    categoryLabel: "3D & MÉDIAS",
    status: "EN COURS",
    statusType: "active",
    year: "2026",
    summary: "Étude géométrique et modélisation 3D surfacique haute fidélité de la Mazda 3 sous Blender (shading PBR).",
    description: "Projet de modélisation 3D rigoureuse explorant la philosophie de design japonaise KODO. Réalisé sous Blender avec une topologie de maillage optimisée (subdivision surface sans étirement), le modèle sert de banc d'essai pour le rendu photoréaliste de la peinture Soul Red Crystal et des tests d'intégration temps réel.",
    technologies: ["Blender", "Subdivision Surface", "Cycles Engine", "PBR Shading", "Automotive CAD"],
    specs: [
      { label: "Topologie", val: "Modélisation surfacique quad pure sans pincement" },
      { label: "Shading", val: "Matériaux PBR multicouches fidèles au vernis automobile" },
      { label: "Moteur", val: "Rendus cinématiques Cycles et temps réel Eevee" }
    ],
    links: [
      { label: "DÉPÔT GITHUB", url: "https://github.com/TakDai/Mazda-3", icon: "github" }
    ]
  },
  {
    num: "10",
    id: "127il",
    title: "127IL & Pensées Nocturnes",
    category: "creation-3d",
    categoryLabel: "3D & MÉDIAS",
    status: "DIFFUSION EN DIRECT",
    statusType: "production",
    year: "2026",
    summary: "Diffusions live sur Twitch, live coding, podcasts et publications sur pensées-nocturnes.fr.",
    description: "127IL rassemble la dimension streaming et partage en direct du groupe : sessions de développement interactif, conception d'architectures réseau, vulgarisation du hardware et échanges communautaires sans filtre sur Twitch et pensées-nocturnes.fr.",
    technologies: ["Twitch API", "OBS Studio", "Audio Production", "Live Coding", "Édition Numérique"],
    specs: [
      { label: "Canal Twitch", val: "Émissions en direct de développement et FPV" },
      { label: "Portail éditorial", val: "pensées-nocturnes.fr" },
      { label: "Approche", val: "Open knowledge, transparence technique totale" }
    ],
    links: [
      { label: "PENSÉES-NOCTURNES.FR", url: "https://pensées-nocturnes.fr", icon: "external-link" }
    ]
  }
];

// État de l'interface
const State = {
  category: "all",
  search: "",
  view: "grid", // "grid" | "list"
};

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initSeasonPicker();
  initSearchAndFilters();
  initViewSwitcher();
  initModal();
  render();
  lucide.createIcons();
});

// Horloge temps réel CET
function initClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;
  function tick() {
    const d = new Date();
    clockEl.textContent = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " CET";
  }
  tick();
  setInterval(tick, 1000);
}

// Sélecteur de saisons / touches de couleur (Charte Les Tourangeaux)
function initSeasonPicker() {
  const savedSeason = localStorage.getItem("seeworld-season") || "seeworld";
  setSeason(savedSeason);

  const btns = document.querySelectorAll(".season-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const season = btn.dataset.season;
      setSeason(season);
      localStorage.setItem("seeworld-season", season);
    });
  });
}

function setSeason(seasonName) {
  document.documentElement.setAttribute("data-season", seasonName);
  document.querySelectorAll(".season-btn").forEach(btn => {
    if (btn.dataset.season === seasonName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Recherche et Filtres
function initSearchAndFilters() {
  const searchInput = document.getElementById("search-input");
  const filterTabs = document.querySelectorAll(".filter-tab");

  searchInput.addEventListener("input", (e) => {
    State.search = e.target.value.toLowerCase().trim();
    render();
  });

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      State.category = tab.dataset.category;
      render();
    });
  });
}

// Switcher Grille / Liste
function initViewSwitcher() {
  const gridBtn = document.getElementById("view-grid-btn");
  const listBtn = document.getElementById("view-list-btn");
  const container = document.getElementById("projects-container");

  gridBtn.addEventListener("click", () => {
    State.view = "grid";
    gridBtn.style.background = "var(--ink)";
    gridBtn.style.color = "var(--paper)";
    gridBtn.classList.remove("ghost");
    listBtn.style.background = "var(--paper)";
    listBtn.style.color = "var(--ink)";
    listBtn.classList.add("ghost");

    container.className = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fill, minmax(320px, 1fr))";
    container.style.gap = "20px";
    render();
  });

  listBtn.addEventListener("click", () => {
    State.view = "list";
    listBtn.style.background = "var(--ink)";
    listBtn.style.color = "var(--paper)";
    listBtn.classList.remove("ghost");
    gridBtn.style.background = "var(--paper)";
    gridBtn.style.color = "var(--ink)";
    gridBtn.classList.add("ghost");

    container.className = "view-list";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "12px";
    render();
  });
}

// Rendu des projets
function render() {
  const container = document.getElementById("projects-container");
  const noResults = document.getElementById("no-results");

  const filtered = PROJECTS.filter(p => {
    const matchCat = State.category === "all" || p.category === State.category;
    const q = State.search;
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q));

    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  if (State.view === "grid") {
    container.innerHTML = filtered.map(p => createGridCard(p)).join("");
  } else {
    container.innerHTML = filtered.map(p => createListCard(p)).join("");
  }

  lucide.createIcons();

  document.querySelectorAll(".open-project-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pid = btn.dataset.id;
      openModal(pid);
    });
  });
}

// Carte Grille selon la charte
function createGridCard(p) {
  const statusPillClass = p.statusType === "production" ? "pill live" : "pill soft";
  const tagsHtml = p.technologies.slice(0, 3).map(t => `<span class="val">${t}</span>`).join("");
  const extraCount = p.technologies.length > 3 ? `<span class="val">+${p.technologies.length - 3}</span>` : "";

  return `
    <article class="project-card">
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="kicker">${p.num}</span>
            <span class="chip">${p.categoryLabel}</span>
          </div>
          <span class="${statusPillClass}">${p.status}</span>
        </div>

        <h3>${p.title.toUpperCase()}</h3>

        <p>${p.summary}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px; padding-top: 14px; border-top: 2px dashed var(--dash);">
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${tagsHtml}
          ${extraCount}
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 4px;">
          <button class="btn ghost sm open-project-btn" data-id="${p.id}">
            <span>SPÉCIFICATIONS</span>
            <i data-lucide="arrow-right" style="width: 12px; height: 12px;"></i>
          </button>
          <span class="label" style="margin: 0; font-family: var(--font-mono);">${p.year}</span>
        </div>
      </div>
    </article>
  `;
}

// Carte Liste
function createListCard(p) {
  const statusPillClass = p.statusType === "production" ? "pill live" : "pill soft";

  return `
    <article class="project-card">
      <div class="card-header-block" style="display: flex; align-items: center; gap: 12px;">
        <span class="kicker">${p.num}</span>
        <div>
          <h3>${p.title.toUpperCase()}</h3>
          <span class="label" style="margin: 0;">${p.categoryLabel}</span>
        </div>
      </div>

      <p class="card-summary">${p.summary}</p>

      <div style="display: flex; align-items: center; gap: 14px; shrink-0;">
        <span class="${statusPillClass}">${p.status}</span>
        <button class="btn ghost sm open-project-btn" data-id="${p.id}">
          <span>OUVRIR</span>
          <i data-lucide="arrow-right" style="width: 12px; height: 12px;"></i>
        </button>
      </div>
    </article>
  `;
}

// Modale d'inspection
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display !== "none") {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}

function openModal(projectId) {
  const p = PROJECTS.find(item => item.id === projectId);
  if (!p) return;

  const modal = document.getElementById("project-modal");
  document.getElementById("modal-title").textContent = p.title.toUpperCase();
  document.getElementById("modal-desc").textContent = p.description;
  document.getElementById("modal-category").textContent = p.categoryLabel;

  const statusEl = document.getElementById("modal-status");
  statusEl.textContent = p.status;
  statusEl.className = p.statusType === "production" ? "pill live" : "pill soft";

  const specsEl = document.getElementById("modal-specs");
  specsEl.innerHTML = p.specs.map(s => `
    <div class="spec-item">
      <span class="spec-label">${s.label}</span>
      <span class="spec-val">${s.val}</span>
    </div>
  `).join("");

  const tagsEl = document.getElementById("modal-tags");
  tagsEl.innerHTML = p.technologies.map(t => `<span class="val">${t}</span>`).join("");

  const actionsEl = document.getElementById("modal-actions");
  actionsEl.innerHTML = p.links.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener" class="btn sm">
      <span>${l.label}</span>
      <i data-lucide="${l.icon || 'external-link'}" style="width: 12px; height: 12px;"></i>
    </a>
  `).join("");

  document.getElementById("modal-ref").textContent = `Projet Seeworld • Année ${p.year} • Dossier ..\\${p.title}`;

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}
