import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para GitHub Pages - CAMBIAR POR EL NOMBRE REAL DEL REPO
  base: process.env.NODE_ENV === 'production' ? '/nexus-vending-management/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
