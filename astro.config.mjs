// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import node from '@astrojs/node'; // 1. Importamos el adaptador

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server', // 2. Cambiamos a modo servidor para rutas dinámicas
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [vue()]
});