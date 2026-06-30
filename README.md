# Portfolio Hub — Jason Vega

One home for every project I've built and will build. A static, data-driven site:
the page renders itself from a single list, so **adding a project takes one minute,
not a rebuild**.

> Built from `read-me.md` (the development plan), which remains in this repo for reference.

## Stack

Static HTML / CSS / vanilla JS. No framework, no build step. Host on GitHub Pages.

## Structure

```
.
├── index.html              markup shell (header, hero, grid, about, footer)
├── assets/
│   ├── css/styles.css       all styling
│   ├── js/projects.js       THE DATA — the project list
│   ├── js/app.js            renders cards + filtering
│   └── img/                 thumbnails (see assets/img/README.md)
├── .nojekyll               serve files as-is on GitHub Pages
├── CNAME                   custom domain (added in Phase 5)
└── README.md
```

## Add a project (the payoff)

1. Add one object to `PROJECTS` in `assets/js/projects.js`.
2. Drop a thumbnail in `assets/img/` matching its `thumb` field (optional — an
   initials tile shows if missing).
3. Commit + push. The grid, filters, and project count update themselves.

Field guide: `category` drives the filter tabs (`Faith & Family` · `Commercial` ·
`Tools & Experiments`); `status` is `Live` / `In progress` / `Demo` (renders a
badge); `featured: true` shows the card bigger and first.

## Run locally

Just open `index.html`, or serve the folder:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to GitHub.
2. Settings → Pages → Build from branch → `main` / root.
3. Confirm it's live at the `*.github.io` URL.
4. Phase 5: add a `CNAME` file with your domain and point DNS at GitHub Pages.

## Status vs. the plan

- ✅ Phase 1 — data-driven grid (MVP)
- ✅ Phase 2 — design pass (hero, about, footer, responsive)
- ✅ Phase 3 — filtering, status badges, tag chips (all data-driven)
- ⬜ Phase 0/5 — deploy + custom domain (needs your GitHub/DNS)
- ⬜ Phase 4 — real screenshots + final OG image
