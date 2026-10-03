# Apex Distributor — website

A static website (no build step) for Apex Distributor Pvt. Ltd., Kathmandu.

## Structure
- `index.html` — homepage
- `catalog.html` — full searchable/filterable product catalog
- `products.json` — all 127 products (name, spec, price, image, category)
- `images/` — product photos (`.webp`) cropped from the catalog PDF, plus `logo.png` and `favicon.png`
- `style.css`, `app.js` — shared styling and catalog logic

## Deploy on Vercel
1. Push this folder to a GitHub repo (or drag-and-drop the folder into the Vercel dashboard).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset: **Other** (no build command needed — it's plain static HTML).
4. Root directory: this folder (the one containing `index.html`).
5. Deploy. No environment variables are required.

Or via CLI, from inside this folder:
```
npm i -g vercel
vercel
```

## Editing products or prices
Open `products.json`. Each category has an `items` array; each item is
`{"n": name, "s": spec/size text, "p": price in Rs (leave "" for "Ask for price"), "id": ..., "i": image filename (no extension)}`.
Editing this file is enough — both pages read it at runtime, no rebuild needed.
