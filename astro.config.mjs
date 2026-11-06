import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://carlos8v.dev',
  integrations: [sitemap(), tailwind()],
  build: {
    assets: 'static'
  }
});