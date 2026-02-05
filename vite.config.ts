import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/ARC-team/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})

