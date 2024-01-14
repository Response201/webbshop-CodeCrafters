import { defineConfig } from 'vite';

export default defineConfig({
  // ... övriga konfigurationsinställningar

  build: {
    // Ange output-mappen för byggresultaten
    outDir: 'dist',

    // Ange formatet för JavaScript-moduler
    target: 'esnext',

    
    /*   base: './' */
    

  },
});