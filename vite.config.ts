import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En Vercel o local usa '/', en GitHub Pages usa '/Mi-portafolio/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Mi-portafolio/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
