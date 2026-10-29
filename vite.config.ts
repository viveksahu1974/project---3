import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project---3/', // GitHub Pages project URL
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
