import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'
import renderer from 'vite-plugin-electron-renderer'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Add this import

export default defineConfig({
  plugins: [
    tailwindcss(), // <-- 2. Add this BEFORE react()
    react(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
    }),
    renderer(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})