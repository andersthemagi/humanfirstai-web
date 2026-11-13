import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Netlify once the domain is decided.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://humanfirstai.netlify.app',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
  // The team now lives on the About page, and Events became Workshops.
  redirects: {
    '/team': '/about/#team',
    '/events': '/workshops/',
  },
});
