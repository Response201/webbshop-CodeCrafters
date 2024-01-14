// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Bas URL för produktion eller utveckling
  base: '/',

  // Om du har flera sidor i ditt projekt, definiera dem här
  // Mer information: https://vitejs.dev/config/#pages
  // pages: {
  //   index: 'src/index.html',
  //   about: 'src/about.html',
  //   // ...
  // },


  pages: {
    index: './index.html',
    about: './about.html',
    // Lägg till andra sidor här efter behov
  },

  // Ange om du vill att Vite ska visa en notifiering om fel
  // Mer information: https://vitejs.dev/config/#server-quiet
  server: {
    quiet: false,
  },

  // Konfigurera byggnadsutdata
  build: {
    outDir: 'dist', // Byggmappen
    assetsDir: '', // Mappen där assets (till exempel bilder) lagras
    sourcemap: false, // Skapa eller inte skapa källkartor
  },

  // Plugins och andra konfigurationer kan läggas till här
});
