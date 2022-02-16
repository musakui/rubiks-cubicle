import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/rubiks-cubicle',
  build: {
    assetsDir: '.',
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
  ],
})
