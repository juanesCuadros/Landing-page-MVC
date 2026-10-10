import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mvcpopayan.cloud',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
  compressHTML: true,
});
