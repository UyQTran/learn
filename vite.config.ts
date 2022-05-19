import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
