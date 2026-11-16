import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Netlify once the domain is decided.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://human-first-ai.netlify.app',
  integrations: [sitemap({
      filter: (page) => !page.includes('/thanks/') && !page.includes('/404/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
    })],
  // The team lives on the About page.
  redirects: {
    '/team': '/about/#team',
  },
});
