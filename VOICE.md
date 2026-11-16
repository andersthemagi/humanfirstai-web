# Website voice

How the words on this site are written, why, and how to write more of them. Read this before
changing any visible text: buttons, headings, page copy, form notes, event entries, meta
descriptions, in either language.

Where this sits:

- **`PRODUCT.md`** sets what the site may claim: say only what has happened, no workshop
  specifics, no funding, no numbers we cannot source. Those limits come first.
- **This file** sets how the site says it.
- **The brand voice** (brand repo, `docs/02-voice.md`) sets who is speaking: the neighbourhood
  teacher, plain words, no hype, no jargon. That still applies, with two exceptions on this
  site: its suggested headlines ("The future belongs to all of us" and the like) are not used
  here, and its advice to name the person does not apply to the team, who appear only as "our
  team". This file is also stricter about literal language.

## The voice in one paragraph

Plain and literal. Every label names the thing it leads to, using the word a visitor already
expects: Blog, Events, Contact, Sign up. Every sentence states one fact or asks for one
action. We describe what exists today, say what happens when you click, and stop. Warmth comes
from being clear, being honest about being early, and speaking to the reader as "you". It does
not come from wordplay, slogans or big statements.

## Why this voice

### It is the mission, done on our own site

The group exists so that people who feel shut out of AI can walk in. Many of the people we
want to reach are anxious about AI, read English as a second or third language, use a screen
reader, or are reading on a phone on a slow connection. A metaphor makes every one of them do
extra work to find out what a link does. A site that says "Make AI an open door" and then makes
people decode its menu contradicts its own message.

### It is what credibility looks like for a new group

While nothing has run yet, the group cannot earn trust with ambition,
because ambition costs nothing to write. It can earn trust with statements a reader can check:
we are volunteers, we are in Barcelona, nothing is scheduled yet, here is who we are. Polished
slogans read as marketing, and marketing contradicts "not a company, nothing to sell". Plain,
modest copy says we will be straight with you, which is the trait we most need people to
believe.

### It sets us apart from how AI is usually sold

Most writing about AI is grand: transform, unlock, the future of everything. A group that puts
humans first should sound like a person talking. Dropping the grand register is the clearest
way to show we are not another AI pitch.

### It must not sound machine-written

Text written by AI tools has recognisable habits: the "it's not X, it's Y" reveal, the list of
three abstract nouns, the closing line that sounds like a poster. Many readers notice them,
even without a name for them. For most organisations that is a style problem. For an organisation
whose subject is how people and AI live together, it is a trust problem. If our own site reads
as generated, the reader's next question is whether anything here was written by us. See
"Patterns to avoid" below.

### It survives translation

The site runs in English and Spanish, and each version must read as if it were written in that
language. Catalan is off the site for now (`parked/catalan/`); the Catalan labels below are kept
for when it comes back. Literal labels have a natural equivalent in every language: Blog,
Eventos, Contacte. Wordplay does not ("Pick a door" becomes a puzzle in translation). Plain
copy keeps the versions saying the same thing.

## What it does for the next step

The site has one job: turn a visitor's interest into a next step. There are three audiences
and three steps, and nothing else competes with them.

| Visitor | Step | Where it goes |
|---|---|---|
| Might come to something | **Sign up** for email updates | The sign-up form (`#newsletter`) |
| Wants to give time | **Volunteer** | `/contact/?reason=help` |
| Has a space | **Offer a venue** | `/contact/?reason=host` |

Plain copy helps each step in five ways.

1. **Labels are recognised at a glance.** People scan a page for the word they have in mind. If they
   want articles, they look for "Blog". A familiar label is found at a glance. A clever one has
   to be read, interpreted and trusted first, and people who are already unsure leave at that
   point.
2. **The button says what happens.** "Sign up" next to "We will email you when something has a
   date and a place. You can stop any time." tells the reader exactly what they get and what it
   costs. A promise that small and specific is easy to say yes to. "Tell me when" makes the
   reader work out what "when" means.
3. **One name per action, everywhere.** The same step has the same label on every page, in
   the header, in the body and in the footer. A visitor learns it once. Two names for one
   thing ("Offer to help" here, "Volunteer" there) make people wonder whether they are two
   different things.
4. **Being honest about being early gives people something to do.** "Nothing is scheduled
   yet" followed by "Sign up and we will email you when an event is scheduled" makes the email
   form the obvious answer. A vague promise of what is coming makes people wonder what we are
   hiding, and gives them nothing to do now.
5. **Lowering the cost of writing to us.** Lines like "A person on our team reads every
   message" and "We are volunteers, so it may take a few days to reply" set expectations
   before someone writes. That makes a cold message to strangers feel safe to send.

Every page ends on one of the three steps. Each block of copy leads to one step: a card has
one link, a form has one button. The "Get involved" section has three cards because it serves
all three visitors, one card each. If a
sentence does not help one of the three visitors decide to take their step, it does not go on
the site.

## Rules

### Labels (navigation, headings, buttons, links)

- Use the conventional name. Blog, Events, About, Contact, Sign up, Page not found, Thank you.
- Headings say what the section contains ("Get involved", "How we work", "Our mission"), not a
  mood or a slogan.
- Buttons, navigation items and standalone action links (the ones with an arrow) are three
  words or fewer, start with or consist of the action, and use the canonical label from the
  table below. Links inside a sentence can be a natural phrase ("tell us what you were looking
  for").
- One metaphor is allowed, and it is the tagline: *Make AI an open door, not a locked lab.* It
  stays as the home page `<title>` and as the large statement in the home page's "why" section,
  above the "Our mission" link. The door is
  also the site's visual device. Do not echo it in words anywhere else: no "pick a door", "this
  door does not go anywhere", "we open doors". The share image `public/og.png` repeats the
  home headline. If the headline changes, redraw the image and change its description
  (`shareAlt` in `ui.ts`) at the same time.

### Sentences

- One idea per sentence. Short sentences, common words, reading age about twelve. The brand
  repo's checker counts sentence length and banned terms:
  `node skill/human-first-ai-brand/scripts/voice-check.mjs <file>` (run from the brand repo).
- Write to "you", speak as "we". The team is "our team", never named individuals with titles.
- Present tense for what is true now. "We will" is allowed only for promises the team can
  keep on its own: replying to messages, emailing subscribers, saying when a tool is wrong.
  Plans appear only in the approved general form: "panels, workshops, events and more are in
  the works".
- No contractions in English ("we will", "do not"). This is a house choice for consistency
  with the existing copy, and it keeps each word whole for readers working in a second
  language.
- British spelling (organise, neighbourhood), matching the rest of the site.
- No exclamation marks. No emoji.
- Body text may state beliefs ("Nobody should be left behind by AI…") but says each one once,
  in plain words, without stacking "should" upon "must".

### Patterns to avoid

These make copy roundabout, preachy or machine-sounding. Rewrite any you find.

| Pattern | Example | Instead |
|---|---|---|
| Label that hints instead of names | "Writing", "Pick a door" | "Blog", "Get involved" |
| "Not X, but Y" reveal | "Not cheerleaders. We would rather be useful." | State the fact: "We will not try to make you like AI." |
| Poster line as a closer | "The future belongs to all of us." | The next step: "Join the mailing list." |
| Three abstract nouns | "accessible, understandable and useful" | One concrete claim |
| Inflated verbs | empower, unlock, transform, journey, reimagine | Say what actually happens |
| Intensifiers | plainly, truly, genuinely, deeply | Delete them |
| Rhetorical questions in headings | "Ready to join the future?" | A heading that names the content |
| Timing with no event attached | "when something does", "when something is on" | "when an event is scheduled", "when something has a date and a place" |
| Claims about habits that do not exist yet | "We say so plainly" | "We will say so" |

Brand book slogans ("AI for everyone. Opportunity for all.", "The future belongs to all of
us.") describe the brand. They are not website copy. The tagline is the one exception.

### Plain is not cold

Plain copy still sounds like a person. It is allowed to be kind ("You can stop any time"),
honest about limits ("it may take a few days"), and specific ("a library, a community hall, an
office after hours"). What it gives up is decoration.

## Canonical labels

Use these exact strings. They live in `src/i18n/ui.ts` and the `src/content/pages/home*.json`
files.

| Meaning | English | Spanish | Catalan |
|---|---|---|---|
| Articles page | Blog | Blog | Blog |
| Email sign-up button | Sign up | Suscribirme | Subscriu-me |
| Header/footer sign-up link | Get updates | Recibir avisos | Rebre avisos |
| Sign-up field label | Get email updates | Recibe avisos por correo | Rep avisos per correu |
| Section with the three steps | Get involved | Participa | Participa |
| Volunteer (title / link) | Volunteer | Ayuda / Quiero ayudar | Ajuda / Vull ajudar |
| Offer a space (title / link) | Offer a venue | Ofrece un espacio / Ofrecer un espacio | Ofereix un espai / Oferir un espai |
| About page in the nav and browser tab | About | Quiénes somos | Qui som |
| About page heading, and the home link to it | Our mission | Nuestra misión | La nostra missió |
| Contact heading | Contact us | Escríbenos | Escriu-nos |
| Register for a dated event | Register | Inscribirme | Inscriu-m'hi |
| No events yet | No events scheduled yet | Todavía no hay eventos programados | Encara no hi ha esdeveniments programats |

## Before and after

From the November 2026 rewrite. The reason is the part to copy.

| Before | After | Why |
|---|---|---|
| Writing | Blog | The word visitors look for. |
| We open doors / to AI for all. | We want everyone / to understand AI. | Says the aim in words rather than an image. |
| Pick a door | Get involved | Names the section. The doors are already drawn above it. |
| Come along / Help make it happen / Lend us a space | Come to an event / Volunteer / Offer a venue | Each title is the step itself. |
| Tell me when | Sign up | Names the action directly. |
| What we are not: Not cheerleaders. | How we work: Not here to promote AI. | Drops the reveal. A positive heading over facts. |
| The future belongs to all of us. | Join the mailing list. | A closing section ends on its step, not a slogan. |
| This door does not go anywhere | Page not found | Someone who is lost needs to know what happened, at once. |
| Got it. Thank you. | Thank you | Shorter, same meaning. |

## Spanish

- Write it natively. Do not translate word for word.
- Address the reader as *tú*.
- Avoid gendered forms for people: "personas voluntarias", "Quiero ayudar", "alguien del
  equipo". Not "voluntario", "hazte voluntario".
- Use the canonical labels above. When a label changes, change both languages in the same
  commit.
- Keep "colaboración" for press and partners only, so it is never confused with volunteering.

When Catalan comes back, the same rules apply to it (*tu*, "col·laboració").

## Checking a draft

Before you submit copy, check each item.

1. Every link and button uses its canonical label, or a conventional name if it is new.
2. Every sentence is true today. Nothing describes an event, format or habit that does not yet
   exist.
3. You can name which of the three visitors each section serves, and its step.
4. No pattern from "Patterns to avoid" appears. Read the text aloud. If any line sounds like a
   poster, rewrite it.
5. The Spanish says the same thing, reads naturally, uses *tú*, and has no gendered forms.
6. `npm run build` passes. Strings in `ui.ts` with apostrophes are double-quoted or escaped.
