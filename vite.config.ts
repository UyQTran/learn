import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages',
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notFound: '404.html',
        skulptMin: 'assets/skulpt.min.js',
        skulptStdLib: 'assets/skulpt-stdlib.js',
        data: 'src/data/assignmentData.json',
      }
    }
  }
})
