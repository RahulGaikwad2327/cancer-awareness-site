# Immersive 3D Portfolio World

A production-style React + Three.js portfolio built as a mini playable 3D universe.

## Stack
- React + Vite
- Three.js + React Three Fiber + Drei
- @react-three/rapier (physics rover)
- Framer Motion (UI transitions)
- GSAP (intro animation)
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Editable content
Update all portfolio data in:
- `src/data/portfolioData.js`

Key fields to edit:
- name / role / intro
- projects (title, description, links)
- skills groups
- experience timeline
- social links
- resume path

## Controls
- Move rover: `W/A/S/D` or Arrow keys
- Click zone cubes in world to switch section focus
- Projects zone opens project list and project modal

## 3D model replacement
Current player is a procedural sphere rover.
To replace with custom model:
1. Add your GLB in `public/models/`.
2. Load it in `RoverController` using `useGLTF` from `@react-three/drei`.
3. Keep the same `RigidBody` wrapper for physics.

## Deploy
Deploy easily to Vercel/Netlify:
1. Push repo to GitHub
2. Import project
3. Build command: `npm run build`
4. Output directory: `dist`

## Future upgrades
- Add joystick mobile controls
- Add postprocessing bloom/DOF
- Add real backend for contact form
- Add multi-scene portal transitions
