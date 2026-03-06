import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use relative asset paths in production so GitHub Pages subpath works.
  base: command === "build" ? "./" : "/",
}))
