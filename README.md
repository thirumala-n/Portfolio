# Portfolio

Personal portfolio built with React + Vite.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo is configured with a GitHub Actions workflow:
- [deploy.yml](.github/workflows/deploy.yml)

### One-time GitHub setup

1. Push this repo to GitHub on the `main` branch.
2. In GitHub repo settings:
   - Open `Settings -> Pages`.
   - Set `Build and deployment` source to `GitHub Actions`.

### Deploy process

Every push to `main` will automatically build and deploy to GitHub Pages.

Optional manual deploy script is also available:

```bash
npm run deploy
```
