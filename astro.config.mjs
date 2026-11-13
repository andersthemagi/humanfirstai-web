import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Netlify once the domain is decided.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://human-first-ai.netlify.app',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
  // The team lives on the About page.
  redirects: {
    '/team': '/about/#team',
  },
});
