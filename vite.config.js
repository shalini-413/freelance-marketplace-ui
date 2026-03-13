// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ADD THIS IMPORT
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    // ADD THIS LINE
    tailwindcss(),
  ],
})