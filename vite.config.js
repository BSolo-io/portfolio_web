import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The site is served from https://bsolo-io.github.io/portfolio_web/.
  // Must match the GitHub repo name exactly, with both slashes, or every CSS/JS
  // file 404s and the page loads blank. Use '/' if it moves to bsolo-io.github.io.
  base: '/portfolio_web/',
})
