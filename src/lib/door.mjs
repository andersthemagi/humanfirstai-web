// The Open Door on the mark's 64-unit grid. One drawing, used twice: the doors on the pages
// (src/components/Door.astro) and the logo files in public/ (scripts/logo.mjs).
export const OPENING = 'M27,51.5 L27,30 A12.5,12.5 0 0 1 52,30 L52,51.5 Z';
export const FRAME = 'M24.5,51.5 L24.5,30 A15,15 0 0 1 54.5,30 L54.5,51.5';
// The leaf is that same arched door, swung 66 degrees toward you about its hinge and seen from the
// ground line, so the threshold stays level and the arch rises toward the near edge. This is where
// the drawing leaves the brand's mark, whose leaf is flat-topped: a door cannot be arched shut and
// square open.
export const LEAF =
  'M21.4,51.5 L21.4,30 C21.4,28.36 21.27,26.67 21.02,25.02 C20.76,23.37 20.38,21.76 19.89,20.28 C19.4,18.8 18.8,17.47 18.11,16.36 C17.43,15.26 16.66,14.41 15.86,13.88 C15.06,13.36 14.22,13.17 13.41,13.38 C12.61,13.59 11.84,14.2 11.17,15.2 C10.51,16.2 9.96,17.58 9.58,19.25 C9.2,20.91 9,22.85 9,24.88 L9,51.5 Z';
// Its far face, one thickness behind. What shows past the leaf is the edge and the rim of the arch.
export const LEAF_BACK =
  'M19.48,51.5 L19.48,30.15 C19.48,28.53 19.34,26.85 19.08,25.21 C18.82,23.57 18.43,21.97 17.92,20.51 C17.42,19.04 16.8,17.72 16.09,16.63 C15.39,15.54 14.6,14.69 13.78,14.18 C12.95,13.66 12.09,13.48 11.26,13.69 C10.43,13.9 9.64,14.51 8.96,15.51 C8.28,16.5 7.71,17.87 7.32,19.53 C6.94,21.18 6.73,23.1 6.73,25.11 L6.73,51.5 Z';
export const KNOB = { cx: 11.6, cy: 33.1, r: 1.8 };
