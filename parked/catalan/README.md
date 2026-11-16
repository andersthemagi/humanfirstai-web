# Catalan, off the site for now

On 2026-11-16 the site went to English and Spanish only. The Catalan version was finished, so
its text is kept here instead of deleted. Nothing in this folder is read by the build or shown in
`/admin`.

## What is here

| File | Was at |
|---|---|
| `ui-ca.ts` | The `ca` block and the `languages.ca` entry in `src/i18n/ui.ts` |
| `home-ca.json` | `src/content/pages/home-ca.json` |
| `about-ca.md` | `src/content/prose/about-ca.md` |
| `privacy-ca.md` | `src/content/prose/privacy-ca.md` |

The text matches the English and Spanish as of the plain-copy changes (`copy/plain-voice`). Any
copy change made after 2026-11-16 was made in English and Spanish only, so compare before it goes
back up, and have a native speaker read it.

## To bring Catalan back

1. Move the three content files back to where they were (table above).
2. In `src/i18n/ui.ts`: add `caLanguage` from `ui-ca.ts` to `languages` as `ca`, paste the `ca`
   block back in as `const ca: Words = {`, and change the last map to `{ en, es, ca }`.
3. `astro.config.mjs`: add `ca: 'ca'` to the sitemap `locales`.
4. `netlify.toml`: add the redirect back, after the Spanish one:

   ```toml
   [[redirects]]
     from = "/ca/*"
     to = "/ca/404/index.html"
     status = 404
   ```

5. `src/content.config.ts`: add `titleCa`, `subtitleCa`, `urlCa` (all optional, `urlCa` a URL) to
   posts, and `titleCa`, `summaryCa` (optional) to events.
6. `src/pages/[...lang]/events.astro`: `const suffix = lang === 'es' ? 'Es' : lang === 'ca' ? 'Ca' : '';`
7. `src/pages/[...lang]/blog/index.astro`: add
   `: lang === 'ca' ? { title: d.titleCa, subtitle: d.subtitleCa, url: d.urlCa }` before the final `: {}`.
8. `src/content/events/first-event.md`: add back
   ```yaml
   titleCa: El nostre primer esdeveniment
   summaryCa: L'estem preparant. Publicarem aquí la data i el lloc, i qui s'hagi subscrit rebrà un correu abans.
   ```
9. `public/admin/config.yml`: add a `· Català` entry after each `· Español` page:
   ```yaml
   - name: home-ca
     label: Home page · Català
     file: src/content/pages/home-ca.json
     fields: *home_fields
   - name: about-ca
     label: About page · Català
     file: src/content/prose/about-ca.md
     fields: *prose_fields
   - name: privacy-ca
     label: Privacy page · Català
     file: src/content/prose/privacy-ca.md
     fields: *privacy_fields
   ```
   and the Catalan fields after each Spanish one. The events fields were:
   ```yaml
   - { name: titleCa, label: Title in Catalan, widget: string, required: false, hint: 'Leave empty and the Catalan page shows the English title.' }
   - { name: summaryCa, label: 'What happens, in Catalan', widget: text, required: false, hint: 'Plain text. Leave empty and the Catalan page shows the English text.' }
   ```
   and the posts fields:
   ```yaml
   - { name: titleCa, label: Title in Catalan, widget: string, required: false, hint: 'Only if a Catalan version of the piece exists. Needs the link below too.' }
   - { name: subtitleCa, label: Subtitle in Catalan, widget: string, required: false }
   - { name: urlCa, label: Link to the Catalan version, widget: string, required: false }
   ```
10. Put the three-language wording back in `README.md`, `AGENTS.md` and `VOICE.md`, and in the
    comments that mention languages in `netlify.toml`, `public/admin/config.yml`,
    `src/components/NotFound.astro`, `src/content.config.ts`, `src/i18n/ui.ts`,
    `src/layouts/Base.astro` and `src/pages/[lang]/404.astro`.
11. `npm run build`, then check `/ca/`, `/ca/events/`, `/ca/blog/` and a wrong `/ca/` address.

The git commit that parked Catalan has every one of these changes in one diff; reverting it is the
quickest route.
