import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'

export default defineConfig({
  base: '/rock-paper-scissors',
  plugins: [simpleHtmlPlugin({ minify: true })]
})
