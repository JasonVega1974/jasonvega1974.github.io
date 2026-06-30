/* ============================================================
   THE DATA — your project list.
   Add a project = add one object below. The page renders itself.

   Field guide:
     category  → drives the filter tabs.
                 Use: "Faith & Family" | "Commercial" | "Tools & Experiments"
     status    → "Live" | "In progress" | "Demo"  (renders as a badge)
     featured  → true shows it bigger / first
     tags      → array of short chips
     thumb     → path under assets/img/ (optional; a placeholder shows if missing)
     url       → where the card links out to (opens in a new tab)
   ============================================================ */

const PROJECTS = [
  {
    id: "systemsbyvega",
    name: "Systems by Vega",
    tagline: "Operations systems for small businesses",
    description:
      "Process, databases, and dashboards that get a business off spreadsheets. Includes a live, interactive demo console.",
    url: "https://systemsbyvega.com",
    thumb: "assets/img/systemsbyvega.png",
    category: "Commercial",
    tags: ["Dashboards", "Databases", "Process"],
    status: "Demo",
    featured: true,
  },
  {
    id: "kingdom-creatives",
    name: "Kingdom Creatives",
    tagline: "Church digital services studio",
    description:
      "The parent studio — websites, media, and digital services for churches and faith-driven organizations.",
    url: "https://kingdom-creatives.com",
    thumb: "assets/img/kingdom-creatives.png",
    category: "Faith & Family",
    tags: ["Studio", "Web", "Faith"],
    status: "Live",
    featured: true,
  },
  {
    id: "yourlifecc",
    name: "YourLife CC",
    tagline: "Faith & family progressive web app",
    description:
      "A faith & family PWA — installable, offline-capable, built to keep family life and faith in one place.",
    url: "https://yourlifecc.com",
    thumb: "assets/img/yourlifecc.png",
    category: "Faith & Family",
    tags: ["PWA", "Mobile", "Faith"],
    status: "Live",
    featured: false,
  },
  {
    id: "faith-journey",
    name: "YourLife CC — Faith Journey",
    tagline: "A guided faith journey inside YourLife CC",
    description:
      "A guided, daily faith journey experience that lives inside the YourLife CC ecosystem.",
    url: "https://yourlifecc.com/faith",
    thumb: "assets/img/faith-journey.png",
    category: "Faith & Family",
    tags: ["Faith", "Content", "Daily"],
    status: "Live",
    featured: false,
  },
  {
    id: "estatesalebiz",
    name: "Estate Sale Biz",
    tagline: "Estate sale business online",
    description:
      "Web presence and tooling for an estate-sale business — listings, scheduling, and a clean storefront.",
    url: "https://estatesalebiz.com",
    thumb: "assets/img/estatesalebiz.png",
    category: "Commercial",
    tags: ["Web", "Listings", "Small business"],
    status: "Live",
    featured: false,
  },
  {
    id: "domvegz",
    name: "Dom Vegz",
    tagline: "EDM producer & DJ",
    description:
      "Music brand and site for Dom Vegz — EDM producer and DJ out of Nampa, Idaho.",
    url: "https://domvegz.com",
    thumb: "assets/img/domvegz.png",
    category: "Music & Creative",
    tags: ["Music", "Web", "Brand"],
    status: "Live",
    featured: false,
  },

  /* ------------------------------------------------------------
     Netlify experiment — intentionally left OFF the grid until it
     has a real name + one-line purpose (an unlabeled experiment
     reads as unfinished on a credibility page). Give it those two
     things, then uncomment to publish it.
  ------------------------------------------------------------
  {
    id: "netlify-experiment",
    name: "RENAME ME",
    tagline: "One line on what this actually is",
    description: "Describe the experiment in a sentence before publishing.",
    url: "https://darling-cucurucho.netlify.app",
    thumb: "assets/img/netlify-experiment.png",
    category: "Tools & Experiments",
    tags: ["Experiment"],
    status: "In progress",
    featured: false,
  },
  */
];

// Expose for app.js (works with a plain <script> include — no modules needed)
window.PROJECTS = PROJECTS;
