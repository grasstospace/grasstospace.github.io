# team-website

Simple static site for the Rocketry Team.

## Highlights

- Sections for team members, rockets, parts, flight statistics, group photos and a description of ARC.
- Grass‑and‑space aesthetic using `public/landscape.jpg` as the page background.
- Persistent navbar with a 2D/3D mode toggle.
- 3D mode renders a basic house‑style layout of cards; exploreable with WASD and mouse.

## Local development

```bash
npm install --legacy-peer-deps   # installs three.js, react-three/fiber & drei
npm run dev                     # start Vite dev server
```

Open `http://localhost:5173` in your browser. During development Vite serves the `index.html` at the project root, which in turn bootstraps the React app in `src/App.tsx`. The `docs/` directory is only used when you run `npm run build` – it will contain the production-ready bundle including its own copy of `index.html`.

Fill in the placeholder cards and images in `src/App.tsx` as desired.

Enjoy building! 🎯
