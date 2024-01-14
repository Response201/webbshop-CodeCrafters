import { defineConfig } from 'vite';

export default defineConfig({
  // ... övriga konfigurationsinställningar

  build: {
    // Ange output-mappen för byggresultaten
    base: '/',

    // Ange formatet för JavaScript-moduler
    /* target: 'esnext', */

    outDir: 'dist', // Byggmappen
    assetsDir: '', // Mappen där assets (till exempel bilder) lagras
    sourcemap: false, // Skapa eller inte skapa källkartor
  },
    /*   base: './' */


    

    // Om du har flera sidor i ditt projekt, definiera dem här
    // Mer information: https://vitejs.dev/config/#pages
    // pages: {
    //   index: 'src/index.html',
    //   about: 'src/about.html',
    //   // ...
    // },
  
    // Ange om du vill att Vite ska visa en notifiering om fel
    // Mer information: https://vitejs.dev/config/#server-quiet
    server: {
      quiet: false,
    },
  
    // Konfigurera byggnadsutdata
    
});