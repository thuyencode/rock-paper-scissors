import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: '/rock-paper-scissors/',
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
})
