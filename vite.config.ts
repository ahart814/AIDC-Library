import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ocr: 'patterns/OCR/index.html',
        askDela: 'patterns/AskDela/index.html',
      },
    },
  },
})
