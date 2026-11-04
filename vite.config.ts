import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Relativ base, så bygget virker under /screen-reader-intro/ på GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
});
