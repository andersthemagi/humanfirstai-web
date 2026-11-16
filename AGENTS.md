# Agent notes

The public site for Human First AI. Read these before changing anything visible:

- `PRODUCT.md`: who the site is for, and what it may and may not claim. Its limits come first.
- `VOICE.md`: how the copy is written, why, and the exact labels to use in each language.
- `DESIGN.md`: the visual system.

Build with `npm run build`. Visible text lives in `src/i18n/ui.ts` and `src/content/`. Change
English and Spanish together. Catalan is off the site for now: its files are in `parked/catalan/`,
which the build does not read.
