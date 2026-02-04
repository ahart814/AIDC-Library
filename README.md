# AI Best Practices Library

## Getting Started

- **Development:** `npm run dev` — Main template at `/`, patterns at `/patterns/OCR/`, `/patterns/AskDela/`
- **Build:** `npm run build` — Output in `dist/`
- **Preview:** `npm run preview` — Serve the built app

## Adding Patterns

Pattern directories live in `patterns/`. To add a new pattern:

1. **Create a pattern directory** — e.g., `patterns/MyPattern/`
2. **Add these files:**
   - `index.html` — Entry HTML (script loads `entry.jsx`)
   - `entry.jsx` — Imports PatternDocument, your patternData, and renders the page.
   - `patternData.js` — All of the content that displays on your pattern documentation page
   You can duplicate or copy-and-paste these from an existing pattern directory.  
3. **Add images** — Place in `public/img/MyPattern/`, reference as `/img/MyPattern/filename.png`
4. **Register in Vite** — Add to `vite.config.ts` build.rollupOptions.input:
   ```js
   myPattern: 'patterns/MyPattern/index.html',
   ```

In `entry.jsx`, import from `../../src/` for shared resources (index.css, PatternDocument).

Use `patterns/OCR/` or `patterns/AskDela/` as reference implementations.
