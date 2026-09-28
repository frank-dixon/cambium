# Cambium

Tree physiology as a small installable PWA: sugar maple **sap run / tap / leaf-out**, plus fruit-tree modes on how apple, peach, sweet orange, and grape **make fruit** (not sap).

Simple ↔ Advanced depth. Complements **Crownwork** (pruning)—this repo does not teach pruning cuts.

## Live demo

**https://frank-dixon.github.io/cambium/**

## Stack

- **Tailwind CSS 3** — utility classes in HTML; `npm run build:css` → committed `css/cambium.css`
- **Plain JS** — commented sources in `src/js/`; esbuild minify → committed `js/`
- **Static PWA** — `manifest.webmanifest` + `sw.js`
- Hub masthead → [frank-dixon.github.io](https://frank-dixon.github.io/)

## Local edit

```bash
git clone https://github.com/frank-dixon/cambium.git
cd cambium
npm i
npm run watch   # or: npm start
```

One watcher:

- Tailwind: `src/input.css` → `css/cambium.css`
- JS minify: `src/js/*.js` → `js/*.js`

Edit source, save, refresh. Ship with committed built artifacts so a static host needs **no Node at runtime**.

```bash
npm run build
```

Static preview: `python3 -m http.server 8765` in the repo root.

## Anti-goals

Not a pruning tool (see Crownwork). Not a commercial sugarbush manual. Fruit modes explain fruiting physiology, not sap collection.

## Deploy

Portfolio micro-projects: commit, push, and keep GitHub Pages on `main` `/` (auto-deploy on push).
