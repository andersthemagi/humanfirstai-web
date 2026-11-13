// Draws the logo files in public/ from the same door the pages draw (src/lib/door.mjs).
// Run it after changing that drawing:  npm run logo
//
// The lockups, sizes and colours follow the brand repo's generator (humanfirstai/tools). The one
// difference is the leaf: the brand's mark opens a flat-topped panel, ours opens the arched door.
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { OPENING, FRAME, LEAF, LEAF_BACK, KNOB } from '../src/lib/door.mjs';

const PUBLIC = new URL('../public/', import.meta.url);
const INK = '#1F2A44', CREAM = '#FFF6EC', SUNRISE = '#FF8A3D';
// The leaf's edge is the site's color-mix(in oklab, text 68%, surface), worked out here because a
// file cannot ask the page what it is standing on.
const WAYS = {
  full: { dark: INK, edge: '#5F6577' },
  reversed: { dark: CREAM, edge: '#B0AFB4' },
};
// What the mark covers on the 64-unit grid: the ground rule's width, the frame's crown to the floor.
const BOX = { x: 3, y: 12.5, w: 58, h: 42.5 };

/** `micro` is for 32px and under: a heavier frame, and nothing that would turn to mush. */
function mark({ dark, edge }, micro = false) {
  const leaf = micro
    ? `<path d="${LEAF}" fill="${dark}" transform="translate(-0.5 0)"/>`
    : `<path d="${LEAF_BACK}" fill="${edge}"/>
    <path d="${LEAF}" fill="${dark}"/>
    <circle cx="${KNOB.cx}" cy="${KNOB.cy}" r="${KNOB.r}" fill="${SUNRISE}"/>`;
  return `<path d="${micro ? 'M27.5,51.5 L27.5,30 A12,12 0 0 1 51.5,30 L51.5,51.5 Z' : OPENING}" fill="${SUNRISE}"/>
    <path d="${FRAME}" fill="none" stroke="${dark}" stroke-width="${micro ? 6 : 5}"/>
    ${leaf}
    <rect x="3" y="51.5" width="58" height="${micro ? 4 : 3.5}" fill="${dark}"/>`;
}
const n = (v, d = 3) => +v.toFixed(d);
const write = (name, data) => writeFileSync(new URL(name, PUBLIC), data);

// The symbol alone, 200 high.
for (const [name, way] of Object.entries(WAYS)) {
  const s = 200 / BOX.h, w = n(BOX.w * s, 2);
  write(
    `brand/hfai-symbol-${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 200" width="${w}" height="200" role="img" aria-label="Human First AI — the Open Door mark">
  <title>Human First AI — the Open Door mark</title>
  <g transform="translate(${n(-BOX.x * s)},${n(-BOX.y * s)}) scale(${n(s, 5)})">
    ${mark(way)}
  </g>
</svg>
`,
  );
}

// Symbol and wordmark side by side. The wordmark is outlined type, so it is kept as it is in the
// file and only the mark beside it is redrawn. The frame stays the size the brand set against the
// letters (the old mark stood 172 high from the tip of its leaf); the arched leaf is no taller than
// the frame, so the picture is trimmed to the frame's crown.
for (const [name, way] of Object.entries(WAYS)) {
  const file = `brand/hfai-horizontal-${name}.svg`;
  const wordmark = readFileSync(new URL(file, PUBLIC), 'utf8').match(/<\/g>\s*(<path d="[^"]+" fill="[^"]+"\/>)\s*<\/svg>/)?.[1];
  if (!wordmark) throw new Error(`${file}: no wordmark path found`);
  const s = 172 / 46, top = n((BOX.y - 9) * s, 2), h = n(172 - top, 2);
  write(
    file,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 ${top} 1154.2 ${h}" width="1154.2" height="${h}" role="img" aria-label="Human First AI">
  <title>Human First AI</title>
  <g transform="translate(${n(-BOX.x * s)},${n(-9 * s)}) scale(${n(s, 5)})">
    ${mark(way)}
  </g>
  ${wordmark}
</svg>
`,
  );
}

// Square icons: the mark centred, with `pad` of the side left clear at each edge.
const square = (body, size, plate, pad) => {
  const s = (size * (1 - pad * 2)) / BOX.w;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">${
    plate ? `<rect width="${size}" height="${size}" fill="${plate}"/>` : ''
  }<g transform="translate(${n(size * pad - BOX.x * s)},${n((size - BOX.h * s) / 2 - BOX.y * s)}) scale(${n(s, 5)})">
    ${body}
  </g></svg>
`;
};
const favicon = (micro) => square(mark(WAYS.full, micro), 64, null, 0.03);
write('favicon.svg', favicon(false));

// favicon.ico holds PNGs (every browser since Vista reads them).
{
  const sizes = [16, 32, 48, 256];
  const pngs = await Promise.all(sizes.map((s) => sharp(Buffer.from(favicon(s <= 32)), { density: 1200 }).resize(s, s).png().toBuffer()));
  const dir = Buffer.alloc(6 + 16 * sizes.length);
  dir.writeUInt16LE(1, 2);
  dir.writeUInt16LE(sizes.length, 4);
  let offset = dir.length;
  sizes.forEach((s, i) => {
    const e = 6 + i * 16;
    dir.writeUInt8(s >= 256 ? 0 : s, e);
    dir.writeUInt8(s >= 256 ? 0 : s, e + 1);
    dir.writeUInt16LE(1, e + 4);
    dir.writeUInt16LE(32, e + 6);
    dir.writeUInt32LE(pngs[i].length, e + 8);
    dir.writeUInt32LE(offset, e + 12);
    offset += pngs[i].length;
  });
  write('favicon.ico', Buffer.concat([dir, ...pngs]));
}

// Home-screen icons: the reversed mark on an ink plate.
for (const [name, size] of [['apple-touch-icon', 180], ['icon-192', 192], ['icon-512', 512]]) {
  const svg = square(mark(WAYS.reversed), size, INK, 0.17);
  write(`${name}.png`, await sharp(Buffer.from(svg), { density: 600 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer());
}

console.log('logo: symbol and horizontal lockups, favicon.svg, favicon.ico, touch icons -> public/');
