# humanfirstai-web

The public site for Human First AI: home, about (with the team), events, writing, contact.

Astro (static) · GSAP for motion · Sveltia CMS at `/admin` · Netlify for hosting and forms.
Running cost: $0.

## Working on it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
```

## Editing without a developer

Go to `/admin` on the live site and sign in with GitHub. Each save is a commit to this repo, and
Netlify rebuilds the site in about a minute.

| In the editor | What it changes |
|---|---|
| **Events** | The Events page. Tick "Hide from the site" to keep a draft. Past events move to "Already happened" the next time the site rebuilds. There is a hidden example to copy. |
| **Writing** | The Writing page. Paste a link in "Published elsewhere?" to point at a piece on another site, or write the text here. |
| **Team** | "Our team" on the About page. Everyone gets the same card: a photo (or their initial until there is one), their name and a link. No titles. Only upload a photo the person has agreed to. |
| **Pages** | Home page wording (headline, the three doors, the four "what we are not" statements, the closing line) and the About page. |
| **Settings** | The Substack address the newsletter forms use. |

**The sign-up.** Every "Tell me when" form promises one thing: an email when something has a
date and a place. If it becomes a regular newsletter, change the note in
`src/components/NewsletterForm.astro` so it says so. The forms subscribe people to Substack once the
address is set in the editor under **Settings → Newsletter**. They post straight to Substack's
sign-up endpoint, styled as our own form, with no embed. Until that address is set, sign-ups are
kept in Netlify under **Forms → newsletter**. Export them as CSV and import them into Substack
(Subscribers → Import) when it exists.

Contact messages arrive in Netlify under **Forms → contact**. Turn on email notifications there
so they reach a person.

## One-time setup

1. The repo is `andersthemagi/humanfirstai-web`, and `repo:` in `public/admin/config.yml` says so.
   Change both together if it moves.
2. In Netlify, link the repo to the site (Site configuration → Build & deploy → Link repository).
   The build settings come from `netlify.toml`. Until then, deploys are made by hand (see below).
3. Netlify → Site configuration → **Forms**: enable form detection, then add an email notification for each form.
4. GitHub → Settings → Developer settings → **OAuth Apps** → New. Homepage: the site URL. Callback:
   `https://api.netlify.com/auth/done`. Then in Netlify → Site configuration → Access & security →
   **OAuth**, install the GitHub provider with that client ID and secret.
5. Add each editor as a collaborator on the GitHub repo (they need a free GitHub account).
6. When there is a domain, set `SITE_URL` in Netlify's environment variables, and `site_url` in the CMS config.

The picture shown when a link to the site is shared is `public/og.png` (1200 × 630). It repeats the
home page headline, so redraw it if the headline changes.

The logo in the header and footer, the favicon and the home-screen icons are drawn from the same door
as the pages (`src/lib/door.mjs`). After changing that drawing, run `npm run logo` to redraw them. The
leaf is where they differ from the brand repo's mark: ours is the arched door standing open, not a
flat-topped panel.

## Deploying by hand

Until the repo is linked (step 2), nothing deploys itself. The Netlify project is `human-first-ai`.
Run `npx netlify-cli login` once, then `npx netlify-cli link` in this folder and pick that project.

A draft for people to click through, at `https://draft--human-first-ai.netlify.app`:

```bash
SITE_DRAFT=1 SITE_URL=https://draft--human-first-ai.netlify.app npm run build
npx netlify-cli deploy --dir dist --alias draft --no-build
```

The real site, at `https://human-first-ai.netlify.app`:

```bash
npm run build
npx netlify-cli deploy --dir dist --prod --no-build
```

`SITE_DRAFT=1` adds `noindex` to every page, so a draft stays out of search results. `SITE_URL` is
the address used in share cards, canonical links and the sitemap; it defaults to the Netlify
address in `astro.config.mjs`.

Netlify's spam filter can catch real messages. Look in **Forms → (form) → Spam** now and then.

## What goes on the site

It is a public site for three kinds of visitor: someone who might come along, someone who might
help, and someone with a space. Before adding anything, ask: would this make one of them want to
take their next step? If not, it does not go on. Every page ends on a step (the "Take part" band,
or its own form).

Three rules for the wording, until there is something to announce:

- **Say only what has happened.** What is coming is named once, in general: "panels, workshops,
  events and more are in the works". No formats, no promises about how an event will run.
- **No mention of donations, funding or backing.**
- **Barcelona, for now.** Say "starting in Barcelona", not a list of cities.

## Brand rules this site follows

From [hkcarre/humanfirstai](https://github.com/hkcarre/humanfirstai). `src/styles/tokens.css` is
copied from there. Do not hand-edit it; copy the new file across when the brand changes.

- "Human" leads. No hyphen in the name.
- Sunrise orange is a **fill**, never text. Text on it is always Deep Ink.
- One graphic device: the arch from the logo (`src/components/Door.astro`). No blobs, gradients, robots or glowing brains.
- Nothing below 14px. Body copy is Atkinson Hyperlegible.
- Plain words. No exclamation marks. Say what a tool cannot do in the same breath.
- **No numbers we cannot source.** No chapter counts, attendee counts or impact claims until they are real.
- Do not use the photographs in the brand repo: origin and consent are not on file.

## Motion

The door swings open once on the home page. On screens at least 1100 × 700, scrolling then walks
you through it: the doorway grows until its light fills the screen, and "Pick a door" is already
there behind it. If the three doors fit on screen (at least 900 × 760), they hold still while
scrolling opens them in turn; otherwise each door opens as it comes into view. The holding is done
by CSS (`position: sticky`); the script only maps scroll progress onto the doors. With "reduce motion" switched on in the operating system, every door is drawn open and
nothing moves. The finished state is always in the HTML, so the site works with JavaScript off.
