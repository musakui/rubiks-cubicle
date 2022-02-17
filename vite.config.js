import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/rubiks-cubicle/',
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "Rubik's Cubicle",
        theme_color: '#121213',
        description: "Rubik's Cube x Wordle",
      },
    }),
  ],
  build: {
    assetsDir: '.',
    sourcemap: true,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      plugins: [
        visualizer({
          json: true,
          brotliSize: true,
          filename: 'stats/stats.json',
        })
      ],
    },
  },
})