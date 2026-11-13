# humanfirstai-web

The public site for Human First AI: home, about, team, events, writing, contact.

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
| **Events** | The Events page. Tick "Hide from the site" to keep a draft. Past events move to "Already happened" on their own. There is a hidden example to copy. |
| **Writing** | The Writing page and "Recent writing" on the home page. Paste a link in "Published elsewhere?" to point at a piece on another site, or write the text here. |
| **Team** | The Team page. Only upload a photo the person has agreed to. |
| **Pages** | Home page wording (headline, the three doors, the promises, the closing line) and the About page. |
| **Settings** | The Substack address the newsletter forms use. |

**The newsletter.** The "Send me the letters" forms subscribe people to Substack once the
address is set in the editor under **Settings → Newsletter**. They post straight to Substack's
sign-up endpoint, styled as our own form, with no embed. Until that address is set, sign-ups are
kept in Netlify under **Forms → newsletter**. Export them as CSV and import them into Substack
(Subscribers → Import) when it exists.

Contact messages arrive in Netlify under **Forms → contact**. Turn on email notifications there
so they reach a person.

## One-time setup

1. Create the GitHub repo and push. Then set `repo:` in `public/admin/config.yml` to `owner/name`.
2. In Netlify, import the repo. The build settings come from `netlify.toml`.
3. Netlify → Site configuration → **Forms**: enable form detection, then add an email notification for each form.
4. GitHub → Settings → Developer settings → **OAuth Apps** → New. Homepage: the site URL. Callback:
   `https://api.netlify.com/auth/done`. Then in Netlify → Site configuration → Access & security →
   **OAuth**, install the GitHub provider with that client ID and secret.
5. Add each editor as a collaborator on the GitHub repo (they need a free GitHub account).
6. When there is a domain, set `SITE_URL` in Netlify's environment variables, and `site_url` in the CMS config.

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
you through it: the doorway grows until its light fills the screen, and the page beyond comes up.
Below that, on screens at least 900 × 760, one scroll timeline opens the three doors in turn. On smaller screens each door opens as it comes into
view. With "reduce motion" switched on in the operating system, every door is drawn open and
nothing moves. The finished state is always in the HTML, so the site works with JavaScript off.
