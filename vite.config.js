import { defineConfig } from 'vite';

export default defineConfig({
  // ... övriga konfigurationsinställningar

  build: {
    // Ange output-mappen för byggresultaten
    outDir: 'frontend/dist',

    // Ange formatet för JavaScript-moduler
    target: 'esnext',

    export default {
      base: './',
    }

  },
});