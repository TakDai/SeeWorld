/**
 * SEEWORLD — Regarder le monde
 * Page d'accueil minimaliste inspirée de Multi-Motors
 * Vitrine de projets par logos cliquables
 */

const PROJECTS = [
  {
    id: "multi-motors",
    title: "Multi-Motors",
    tag: "Drones & FPV",
    logo: "assets/logos/multi-motors.png",
    url: "https://multi-motors.fr",
    directLink: true,
    summary: "Catalogue de référence des moteurs brushless pour drones FPV, mis à jour chaque jour automatiquement."
  },
  {
    id: "lestourangeaux",
    title: "Les Tourangeaux",
    tag: "Communautés & Web",
    logo: "assets/logos/lestourangeaux.svg",
    url: "https://lestourangeaux.fr",
    directLink: true,
    summary: "Site officiel et vitrine interactive de l'association et communauté Les Tourangeaux."
  },
  {
    id: "openbots",
    title: "OpenBots",
    tag: "Plateforme & Cloud",
    logo: "assets/logos/openbots.png",
    url: "https://openbots.fr",
    directLink: true,
    summary: "Plateforme d'hébergement managé de bots Discord avec panel d'administration web."
  },
  {
    id: "komeon",
    title: "Komeon",
    tag: "Messagerie & WebRTC",
    logo: "assets/logos/komeon.png",
    url: "https://github.com/TakDai/Komeon",
    directLink: false,
    summary: "Plateforme de messagerie temps réel pour communautés : serveur FastAPI, passerelle LiveKit et client bureau Avalonia."
  },
  {
    id: "inskin",
    title: "Inskin",
    tag: "Cybernétique & Mobile",
    logo: "assets/logos/inskin.png",
    url: "https://github.com/TakDai/Inskin",
    directLink: true,
    summary: "Application Android (Kotlin Compose) pour lecture, écriture et émulation NFC/RFID, implants et déverrouillage PC."
  },
  {
    id: "superviseur",
    title: "Superviseur",
    tag: "Systèmes & Sécurité",
    logo: "assets/logos/superviseur.svg",
    url: "https://github.com/TakDai/Superviseur",
    directLink: false,
    summary: "Application de bureau C# / .NET 8 / Avalonia pour superviser le parc distant exclusivement par tunnels SSH chiffrés AES-256-GCM."
  },
  {
    id: "tours2tours",
    title: "Tours2Tours",
    tag: "Bot Communautaire",
    logo: "assets/logos/tours2tours.png",
    url: "https://github.com/TakDai/Tours2Tours",
    directLink: true,
    summary: "Bot Discord communautaire multifonction (XP, RPG, économie) couplé à son panel d'administration web Flask."
  },
  {
    id: "fix-my-drone",
    title: "Fix-My-Drone",
    tag: "Diagnostic FPV",
    logo: "assets/logos/fix-my-drone.svg",
    url: "https://tom-bigot.fr",
    directLink: false,
    summary: "Base de connaissances et outil interactif d'aide au diagnostic de pannes pour l'électronique de vol et drones FPV."
  },
  {
    id: "mazda-3",
    title: "Mazda-3 Studio",
    tag: "Modélisation 3D",
    logo: "assets/logos/mazda-3.svg",
    url: "https://github.com/TakDai/Mazda-3",
    directLink: true,
    summary: "Étude géométrique et modélisation 3D haute fidélité des courbes KODO sous Blender (shading réaliste PBR)."
  },
  {
    id: "127il",
    title: "127IL / Pensées",
    tag: "Médias & Live",
    logo: "assets/logos/127il.svg",
    url: "https://pensées-nocturnes.fr",
    directLink: true,
    summary: "Diffusions live sur Twitch, live coding, podcasts et réflexions techniques sur pensées-nocturnes.fr."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderGrid(PROJECTS);
  initSearch();
  initModal();
});

function renderGrid(list) {
  const container = document.getElementById("projects-grid");
  const noRes = document.getElementById("no-results");

  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = "";
    if (noRes) noRes.style.display = "block";
    return;
  }
  if (noRes) noRes.style.display = "none";

  container.innerHTML = list.map(p => `
    <div class="project-tile" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.title}">
      <span class="tile-ext" title="${p.directLink ? 'Ouvrir le site' : 'Détails'}">↗</span>
      <div class="tile-icon-box">
        <img src="${p.logo}" alt="${p.title}" loading="lazy">
      </div>
      <h2 class="tile-title">${p.title}</h2>
      <span class="tile-tag">${p.tag}</span>
    </div>
  `).join("");

  // Gestion des clics
  document.querySelectorAll(".project-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      const pid = tile.dataset.id;
      const proj = PROJECTS.find(item => item.id === pid);
      if (!proj) return;

      if (proj.directLink && proj.url) {
        window.open(proj.url, "_blank", "noopener,noreferrer");
      } else {
        openModal(proj);
      }
    });

    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tile.click();
      }
    });
  });
}

function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderGrid(PROJECTS);
      return;
    }
    const filtered = PROJECTS.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q)
    );
    renderGrid(filtered);
  });
}

function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display !== "none") {
      modal.style.display = "none";
    }
  });
}

function openModal(p) {
  const modal = document.getElementById("project-modal");
  document.getElementById("modal-logo").src = p.logo;
  document.getElementById("modal-title").textContent = p.title.toUpperCase();
  document.getElementById("modal-tag").textContent = p.tag.toUpperCase();
  document.getElementById("modal-desc").textContent = p.summary;
  
  const linkBtn = document.getElementById("modal-link");
  if (p.url) {
    linkBtn.href = p.url;
    linkBtn.style.display = "inline-flex";
  } else {
    linkBtn.style.display = "none";
  }

  modal.style.display = "flex";
}
