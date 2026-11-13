---
name: Human First AI
description: Free, plain-language AI workshops. An open door, not a locked lab.
colors:
  warm-cream: "#FFF6EC"
  deep-ink: "#1F2A44"
  sunrise: "#FF8A3D"
  sunrise-deep: "#C24D00"
  community-teal: "#187F72"
  sky: "#7CC4F2"
  sky-deep: "#1277B7"
  ink-muted: "#68728A"
  clay: "#CE3E22"
  white: "#FFFFFF"
  ink-raised: "#2A3754"
  ink-muted-inverse: "#A8B3C9"
  ink-rule: "#3C4A6B"
typography:
  poster:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(44px, 1.6rem + 4.6vw, 92px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(36px, 2.25rem + 2.344vw, 54px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(27px, 1.688rem + 0.911vw, 34px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(23px, 1.438rem + 0.521vw, 27px)"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  subhead:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.188rem + 0.26vw, 21px)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Atkinson Hyperlegible, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(18px, 1rem + 0.35vw, 20px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Atkinson Hyperlegible, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Atkinson Hyperlegible, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.3
  control:
    fontFamily: "Plus Jakarta Sans Variable, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.005em"
rounded:
  focus: "4px"
  control: "12px"
  threshold: "50% 50% 0 0 / 41.1% 41.1% 0 0"
spacing:
  control-gap: "10px"
  stack: "20px"
  row: "28px"
  block: "40px"
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(72px, 9vw, 136px)"
components:
  button-primary:
    backgroundColor: "{colors.sunrise}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.warm-cream}"
  button-primary-on-ink-hover:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.deep-ink}"
  button-header:
    backgroundColor: "{colors.sunrise}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "46px"
  input-text:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "52px"
  choice-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "56px"
  choice-tile-checked:
    backgroundColor: "{colors.sunrise}"
    textColor: "{colors.deep-ink}"
  nav-link:
    textColor: "{colors.deep-ink}"
    padding: "0 12px"
    height: "44px"
  menu-toggle:
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  menu-toggle-open:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.warm-cream}"
  portrait-arch:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.threshold}"
  ink-field:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.warm-cream}"
---

# Design System: Human First AI

## Overview

**Creative North Star: "The Open Threshold"**

The whole system is one picture repeated: a warm room seen from outside, with its door swinging open. Warm Cream is the daylight ground, Deep Ink is the masonry, and Sunrise is the light that spills out once a door opens. The arch from the logo is the only graphic device, drawn at the mark's own proportions (width 30 : springline 21.5 : radius 15) with a 5-unit ink jamb and a ground rule underfoot. It appears as the hero colonnade, as the three ways in, as the frame around every portrait, and as the closed door on empty and 404 states.

The palette, the two typefaces and the arch are binding brand commitments from the hkcarre/humanfirstai brand book. They are recorded here as fixed inputs, not as choices this site is free to revisit. What this file adds is how the build composes them.

Density is low and type is large. Headlines are heavy Jakarta set tight; anything read for more than a sentence is Atkinson Hyperlegible at 17px or larger. Surfaces are flat colour fields separated by 2px ink rules, never floated on shadows. Motion is rare and literal: a door opens, and that is the whole vocabulary. Every page renders complete, with every door drawn in its finished state, before any script runs.

**Key Characteristics:**
- Flat cream ground, ink structure, Sunrise as light and as the one action colour.
- One graphic device: the Open Threshold arch, always at the mark's geometry.
- Heavy, tight, sentence-case Jakarta headlines over a calm Atkinson reading face.
- Ruled lists (2px ink) instead of cards; one full ink field per page at most, plus the ink footer.
- Motion means a door opening. Nothing else animates beyond small hover feedback.
- Static-first: no content or picture depends on JavaScript or on motion being allowed.

## Colors

A warm daylight palette: cream paper, navy ink, one orange for light and action, with blue and teal held in reserve.

### Primary
- **Sunrise** (`{colors.sunrise}`): the light inside an opened door, the door knobs, the primary button, a checked choice tile, and text selection. Fill only, always with Deep Ink on top (6.1:1). Never used as text on cream.
- **Sunrise Deep** (`{colors.sunrise-deep}`): the accent text colour. Team roles, event months, list markers, the current-page underline, hovered list titles, and the focus ring on cream. Sits at 4.5:1 on Warm Cream, so it stays on cream or white and never shrinks below 15px.

### Secondary
- **Sky** (`{colors.sky}`): fill only. The background of every portrait arch, behind a photograph or a Deep Ink initial (7.5:1).
- **Sky Deep** (`{colors.sky-deep}`): body links on cream (4.5:1).
- **Community Teal** (`{colors.community-teal}`): brand secondary action and success colour. In this build it appears only as the native `accent-color`; it is held in reserve rather than spent.

### Tertiary
- **Clay** (`{colors.clay}`): the one alert colour. Invalid-field borders only.

### Neutral
- **Warm Cream** (`{colors.warm-cream}`): the page ground everywhere, the browser theme colour, and text on ink (13.3:1).
- **Deep Ink** (`{colors.deep-ink}`): all headings and body text, the door leaves, jambs and ground rules, the 2px list rules, the hover state of every button, and the ground of the ink field and footer.
- **Ink Muted** (`{colors.ink-muted}`): secondary text, notes under forms, meta lines, resting field borders, placeholders. At exactly 4.5:1 on cream, so it is never placed on anything darker than cream.
- **White** (`{colors.white}`): the inside of text fields, choice tiles and the mobile menu panel. Never a page ground.
- **Ink Raised / Ink Muted Inverse / Ink Rule** (`{colors.ink-raised}`, `{colors.ink-muted-inverse}`, `{colors.ink-rule}`): the inverse roles inside an ink container: raised surface, muted text (6.8:1), and hairline rule.

### Named Rules
**The Light Rule.** Sunrise is light, not decoration. It fills an open doorway, a knob, the primary button or a chosen option, and nothing else. If an element is not an opening or an action, it is not Sunrise.

**The Swap Rule.** On ink, roles swap through `data-theme="ink"`: surface becomes Deep Ink, text Warm Cream, accent text Sunrise, links Sky, focus ring Sunrise. Components read the role tokens (`--hf-surface`, `--hf-text`, `--hf-text-accent`) so the same markup works on both grounds.

## Typography

**Display Font:** Plus Jakarta Sans (variable; fallback system-ui)
**Body Font:** Atkinson Hyperlegible (400, 700, 400 italic; fallback Plus Jakarta Sans, system-ui)

**Character:** A friendly geometric sans at weight 800 for the voice, a typeface built for low-vision readers for the words. Jakarta speaks; Atkinson explains.

### Hierarchy
- **Poster** (800, 44 to 92px fluid, 1.02, -0.035em): the home statement and the home closing line only. Max width about 8.6 to 9.5em, so it breaks into three to six short lines.
- **Display** (800, 36 to 54px fluid, 1.08, -0.03em): every page `h1` and the home section title. Inner page heads cap at 14em.
- **Headline** (700, 27 to 34px fluid, 1.2, -0.02em): section `h2`s, the blog index titles.
- **Title** (650, 23 to 27px fluid, 1.3, -0.015em): `h3`s, way titles, team names, About sub-heads.
- **Subhead** (700, 19 to 21px fluid, 1.3): form labels above the sign-up field and event months.
- **Lead** (Atkinson 400, 18 to 20px fluid, 1.6): standfirsts under headings, max 31 to 34em.
- **Body** (Atkinson 400, 17px, 1.65): all running text. Long-form prose holds a 66ch measure; blog posts step up to 18px / 1.7.
- **Small** (Atkinson 400, 15px): form notes, meta lines, footer legal.
- **Label** (Jakarta 600, 15px, 1.3): field labels and team roles. Navigation and menu items run the same face at 600 and 16px.
- **Control** (Jakarta 700, 17px, 1.0): button and arrow-link text.

### Named Rules
**The Two Voices Rule.** Jakarta for anything you glance at (headings, labels, buttons, navigation); Atkinson for anything you read for more than a sentence. Bold inside prose switches to Jakarta 700.

**The Floor Rule.** Nothing below 14px; body 17px or larger; headings in sentence case, never all caps; text is never justified. Headings use `text-wrap: balance`, paragraphs `pretty`.

**The Tight Punctuation Rule.** At poster and display sizes, trailing `, . ; : ?` are pulled 0.06em back toward the word so Jakarta's loose punctuation does not open a gap.

## Layout

A single 1280px column with a fluid side gutter (16 to 56px). Sections are separated by generous fluid vertical space (72 to 136px) rather than by boxes or background changes; the home page changes ground exactly once, into the ink field, before the ink footer.

Composition is asymmetric and left-aligned. Headlines and forms sit top-left; arches stand at the bottom of their section on a full-width ground rule and are allowed to run off the right edge. On the home hero above 1100px the copy holds the left 44% and the colonnade starts at 48% of the width; below that the colonnade moves under the copy, starting at the gutter.

Two-column grids are ratios, not twelve-column math: 1.5fr / 1fr for statement and body, 1.2fr / 1fr for the closing line and form, 1.4fr / 1fr in the footer, a narrow fixed door column beside the text on About, empty Events, 404 and Thanks. Lists (writing, blog, agenda) are grids of meta plus title separated by 2px ink rules with 28 to 36px of row padding.

Rhythm inside blocks steps through 10px (control gaps), 20px (heading to lead, field pairs), 28px (form groups, list rows) and 40px (grid gaps, rule padding).

Responsive behaviour collapses grids to one column between 560 and 820px, replaces the inline navigation with a disclosure menu at 940px, and stacks the email field above its button below 420px. Every interactive target is at least 44px tall.

## Elevation & Depth

The system is flat. Depth comes from the drawing itself (the door leaf standing proud of its jamb, light inside the opening) and from tonal swaps between cream and ink, never from shadows on content.

### Shadow Vocabulary
- **Overlay** (`box-shadow: 0 18px 40px -12px rgb(31 42 68 / 0.35)`): the mobile menu panel only, because it genuinely floats over the page.
- **Ring** (`box-shadow: inset 0 0 0 2px currentColor`): not a shadow but a drawn 2px outline, used by the menu toggle and the quiet button variant.

### Named Rules
**The Flat Ground Rule.** Content never floats. Separation is a 2px Deep Ink rule, a change to the ink field, or space. A shadow is permitted only on something that actually overlays the page.

## Shapes

Two shape families and nothing else. Rectangles with gently rounded 12px corners for every control (buttons, fields, choice tiles, menu toggle, skip link). And the threshold arch: a semicircular head on straight jambs, square at the base, standing on a ground rule. Portraits use the arch as a clip (aspect 30 : 36.5, a 6px Deep Ink ground bar across the bottom); the Door component draws it in full. Focus outlines take a 4px radius. There are no pills, no circles except door knobs, and no rounded content boxes.

## Components

### Buttons
Warm and solid; the only filled orange on the page besides the light in a door.
- **Shape:** gently rounded rectangle (12px), 52px tall, 24px side padding; the header version is 46px tall with 18px padding.
- **Primary:** Sunrise fill with Deep Ink Jakarta 700 at 17px.
- **Hover / Focus:** fills to Deep Ink with Warm Cream text over 160ms (on an ink ground it fills to Warm Cream with ink text instead); presses down 1px on active; focus is a 3px ring offset 3px.
- **Quiet:** transparent with a 2px drawn ring in the current text colour, filling solid on hover. Defined, currently unused.

### Arrow links
The secondary action. Jakarta 700 at 17px in the text colour, underlined in Sunrise Deep (Sunrise on ink), followed by a drawn 16px arrow. Underline thickens from 1.5px to 3px on hover and the arrow nudges 3px forward. External links use an arrow tilted up and to the right.

### Inputs / Fields
- **Style:** white field, 2px Ink Muted border, 12px corners, 52px tall, Atkinson at body size. Textareas start at 160px.
- **Hover / Focus:** border darkens to Deep Ink; focus adds the 3px Sunrise Deep ring.
- **Error:** border turns Clay, only after the user has interacted (`:user-invalid`).
- **Sign-up form:** a Subhead label, the email field and a "Tell me" button on one row (stacking under 420px), and a Small Ink Muted note underneath saying exactly what will be sent.

### Choice tiles
Radio options on Contact laid out as a grid of 56px white tiles with 2px Ink Muted borders. Hover darkens the border to ink; the checked tile fills Sunrise with an ink border, so the choice reads without relying on the radio dot.

### Navigation
Jakarta 600 at 16px in Deep Ink, 44px targets, no background. Hover underlines at 2px; the current page carries a 3px Sunrise Deep underline. The header CTA is a compact primary button. Below 940px the links fold into a "Menu" disclosure: a ring-outlined toggle that fills ink when open, revealing a white panel with the overlay shadow. The footer is an ink field with the reversed logo, a two-column link list and a legal line above a 1px Ink Rule.

### Ruled lists
Writing, blog and events are contents pages, not card grids: each entry is a row between 2px Deep Ink rules, title in Jakarta, meta in Small Ink Muted. Hovering a title turns it Sunrise Deep and underlines it. Event dates are set as a big Jakarta 800 day over a Sunrise Deep month.

### Portrait arch
Team members stand in thresholds: a Sky arch clipping a photograph, or a Deep Ink initial in Jakarta 800 when no photograph exists, with a 6px ink ground bar. Name in Title, role in Label Sunrise Deep, place in Small Ink Muted.

### The Door (signature component)
An inline SVG drawn from the mark's geometry: a 5-unit Deep Ink jamb around a Sunrise opening, a Deep Ink leaf hinged flush to the jamb on the left with a Sunrise knob and a narrow #3C4A6B edge for its thickness, and a ground rule. The opening shows the depth of the wall: a Sunrise Deep crescent (the inner jamb and the underside of the arch) behind a Sunrise far opening. When open, a flat Sunrise spill lies on the floor in front of the threshold. It is decorative (`aria-hidden`) and may carry a painted word in Jakarta 800.

- **States:** *open* is the default and is what the HTML contains. *Shut* covers the opening with an ink face, its own knob and the painted word in cream. *Animate* starts shut only when motion is allowed and a script will open it.
- **Floor modes:** `mark` draws the logo's own short ground under one door. `long` runs the ground far past both edges so a row of doors shares one floor. `none` omits it, for the other doors in that row, so no seams show.
- **The swing:** the painted word fades out (120ms linear) before anything moves; the shut face folds to its hinge while the spill pours out over the threshold (380ms, an accelerating ease); then the leaf opens toward you (620ms, `cubic-bezier(0.16, 1, 0.3, 1)`, 300ms after the fold begins).
- **On load:** the first hero door swings once, 280ms after fonts are ready, and the headline's second line turns from cream to Sunrise in step with the leaf, catching the light. Without motion it is simply Sunrise. The other hero doors stay shut.
- **The colonnade:** on viewports at least 900 by 760px, the three ways-in doors are driven by one pinned, scroll-scrubbed timeline 1.8 viewport-heights long. Each door's state is a single value from 0 (shut) to 1 (open): the shut face folds over the first half, the leaf opens over the second, the doors follow one another in turn, and each column of text rises from 70% opacity and 14px down as its door opens. Below that size there is no pinning; each door simply opens once as it reaches 78% of the viewport.
- **Reduced motion and no script:** without the `motion` class every animated door is drawn open and every shut door stays shut, the colonnade text is at full strength, view transitions are off, and all transitions collapse to 0.01ms.

### Named Rules
**The One Gesture Rule.** The only animation in the world is a door opening: once on load, and once per door in the colonnade as you scroll. Everything else is hover feedback under 200ms and a 240ms cross-page fade during which the logo stays put.

**The Finished Picture Rule.** The HTML always holds the final picture. Motion may close a door first in order to open it; it may never be the reason something is visible.

## Do's and Don'ts

### Do:
- **Do** draw every arch from the Door component or the portrait clip, at the 30 : 21.5 : 15 geometry with an ink ground rule.
- **Do** keep Sunrise for opened doorways, knobs, the primary button and a chosen option, with Deep Ink on top.
- **Do** separate content with 2px Deep Ink rules and fluid section space (72 to 136px), not with boxes.
- **Do** set headings in Jakarta 700 to 800 sentence case with tight negative tracking, and running text in Atkinson at 17px or more.
- **Do** put `data-theme="ink"` on any container that sits on Deep Ink and let the role tokens swap.
- **Do** render every door in its finished state in HTML and gate motion behind the `motion` class, which is only set when reduced motion is not requested.
- **Do** keep every target at least 44px and keep the 3px focus ring visible on every interactive element.

### Don't:
- **Don't** introduce a second graphic device: no blobs, swooshes, mesh gradients, dot grids, robots, circuits, glowing brains, black glass, cyan or glow.
- **Don't** set Sunrise or Sky as text on cream; they are fills.
- **Don't** put shadows on content, or build card grids; a shadow belongs only to something that overlays the page.
- **Don't** animate anything other than a door opening, or give each element its own independent reveal.
- **Don't** set text below 14px, set headings in all caps, or justify text.
- **Don't** place Ink Muted, Sunrise Deep or Sky Deep text on anything darker than Warm Cream; they sit at the 4.5:1 line there.
- **Don't** use stock photographs; portraits are real team members or an initial in the arch.
