import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mvcsoftware.com.co',
  integrations: [sitemap()],
  image: {
    domains: [],
  },
  compressHTML: true,
});
