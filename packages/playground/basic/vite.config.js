import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePrerender from 'vite-plugin-prerender-k'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about'],
    }),
  ],
})
