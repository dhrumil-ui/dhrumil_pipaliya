import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dhrumil_pipaliya/', // GitHub repo name
  plugins: [react()]
})