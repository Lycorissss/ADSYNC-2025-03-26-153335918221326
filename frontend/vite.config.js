import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import environment from 'vite-plugin-environment';
import tailwindcssVite from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  base: './',
  plugins: [react(),
  environment('all',
    { prefix: 'CANISTER_' }),
  environment('all',
    { prefix: 'DFX_' }),
  tailwindcssVite(),
  AutoImport({
    imports: [
      'react', // Auto-import React hooks seperti useState, useEffect
      {
        'primereact/button': ['Button'],
        'primereact/inputtext': ['InputText'],
        'primereact/dialog': ['Dialog'],
        'primereact/checkbox': ['Checkbox'],
        'primereact/datatable': ['DataTable'],
        'primereact/column': ['Column'],
      },
    ],
    dts: 'src/auto-imports.d.ts', // Generate file deklarasi TypeScript
  }),
],
  envDir: '../',
  define: {
    'process.env': process.env
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  resolve: {
    alias: [
      {
        find: 'declarations',
        replacement: fileURLToPath(new URL('../src/declarations', import.meta.url))
      }
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4943',
        changeOrigin: true
      }
    },
    host: '127.0.0.1'
  }
});
