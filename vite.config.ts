import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ['intro-js']: ['intro.js'],
          ['use-local-storage-state']: ['use-local-storage-state'],
          ['netlify-identity-widget']: ['netlify-identity-widget'],
        },
      },
    },
  },
});
