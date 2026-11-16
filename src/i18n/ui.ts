// The languages of the site and every sentence that is not edited in the CMS.
// English lives at /, Spanish at /es/. Pages share one file each
// (src/pages/[...lang]/) and read their words from here. Catalan is off the site for now;
// its words are kept in parked/catalan/.
//
// To change a sentence: change it in both blocks below. Spanish addresses the reader as "tú",
// uses no exclamation marks, and says only what has already happened.

export const languages = {
  en: { name: 'English', short: 'EN', intl: 'en-GB', og: 'en_GB' },
  es: { name: 'Español', short: 'ES', intl: 'es-ES', og: 'es_ES' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** One page per language from a single file: /about/, /es/about/. */
export const langPaths = () => langs.map((lang) => ({ params: { lang: lang === defaultLang ? undefined : lang } }));

/** The language of the page at this address. */
export function langOf(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return first !== defaultLang && (langs as string[]).includes(first) ? (first as Lang) : defaultLang;
}

/** The same address in another language. Leaves #anchors and outside links alone. */
export const localPath = (lang: Lang, path: string) =>
  lang === defaultLang || !path.startsWith('/') ? path : `/${lang}${path}`;

/** The address with its language taken off the front: /es/about/ becomes /about/. */
export function pathWithoutLang(url: URL) {
  const lang = langOf(url);
  const path = lang === defaultLang ? url.pathname : url.pathname.slice(lang.length + 1) || '/';
  return path.endsWith('/') ? path : `${path}/`;
}

/** Content files carry their language in the name: home.json, home-es.json. */
export const entryId = (base: string, lang: Lang) => (lang === defaultLang ? base : `${base}-${lang}`);

/** Fills {name} gaps in a sentence. */
export const fill = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

/** Dates come out of Intl in lower case in Spanish; a line that starts with one needs its capital. */
export const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const en = {
  titleDefault: 'Human First AI · Make AI an open door, not a locked lab',
  description:
    'Human First AI is a volunteer group, starting in Barcelona, that wants AI to be an open door, not a locked lab. Panels, workshops, events and more are in the works. Sign up for email updates.',
  shareAlt: 'Human First AI. We want everyone to understand AI. Make AI an open door, not a locked lab. An open orange doorway on a dark blue wall.',
  skip: 'Skip to content',
  homeLabel: 'Human First AI, home',
  menu: 'Menu',
  nav: { about: 'About', events: 'Events', blog: 'Blog', contact: 'Contact' },
  cta: 'Get updates',
  aria: { main: 'Main', footer: 'Footer', language: 'Language' },
  privacy: 'Privacy',
  footLine: 'A volunteer group based in Barcelona.',

  news: {
    button: 'Sign up',
    note: 'We will email you when something has a date and a place. You can stop any time.',
    noteSubstack: 'We will email you when something has a date and a place. Sent through Substack. You can stop any time.',
    placeholder: 'you@example.com',
    honeypot: 'Leave this empty',
    privacy: 'How we use your email',
  },

  take: {
    title: 'Get involved',
    steps: [
      {
        title: 'Come to an event',
        body: 'Nothing is scheduled yet. Sign up and we will email you when an event is scheduled.',
        link: 'Sign up',
      },
      {
        title: 'Volunteer',
        body: 'We need people who can teach, organise, translate, design or write.',
        link: 'Volunteer',
      },
      {
        title: 'Offer a venue',
        body: 'A library, a hall or an office after hours. If you have a space in or near Barcelona, let us know.',
        link: 'Offer a venue',
      },
    ],
  },

  home: {
    why: 'Our mission',
    also: 'You can also <a href="{help}">volunteer</a> or <a href="{host}">offer a venue</a>.',
  },

  about: { title: 'About' },

  team: {
    title: 'Our team',
    lead: '{n} people so far, and there is room for more.',
    onLinkedIn: '{name} on LinkedIn',
    more: 'More about {name}',
    portrait: 'Portrait of {name}',
  },

  events: {
    title: 'Events',
    description:
      'Panels, workshops, events and more are in the works, starting in Barcelona. Sign up and we will email you when something is scheduled.',
    lead: 'Panels, workshops, events and more are in the works, starting in Barcelona.',
    emptyTitle: 'No events scheduled yet',
    emptyLead: 'Sign up and we will email you when one is scheduled.',
    emailLabel: 'Your email',
    host: 'Have a space we could use, or want to help? <a href="{host}">Offer a venue</a> or <a href="{help}">volunteer</a>.',
    comingUp: 'Coming up',
    timeRange: '{from} to {to}',
    typeIn: '{type} in {language}',
    types: { Panel: 'Panel', Workshop: 'Workshop', Talk: 'Talk', Social: 'Social' },
    languages: { english: 'English', spanish: 'Spanish', catalan: 'Catalan' },
    tba: 'Date and place to be announced',
    dateTba: 'Date to be announced',
    placeTba: 'Place to be announced',
    hearFirst: 'Get an email when it is scheduled',
    hearNext: 'Get an email about the next one',
    seat: 'Register',
    past: 'Already happened',
  },

  contact: {
    title: 'Contact',
    description: 'Volunteer, offer a venue or ask a question. A person on our team reads every message.',
    heading: 'Contact us',
    lead: 'A person on our team reads every message. We are volunteers, so it may take a few days to reply.',
    reasons: { help: 'Volunteer', host: 'Offer a venue', press: 'Press or partnership', other: 'Something else' },
    legend: 'What would you like to do?',
    name: 'Your name',
    email: 'Email',
    message: 'Your message',
    hint: 'Tell us where you are and what you have in mind.',
    send: 'Send message',
    use: 'We use your name and email only to reply to you. <a href="{privacy}">Privacy</a>',
  },

  thanks: {
    title: 'Thank you',
    heading: 'Thank you',
    lead: 'If you signed up, we will email you when something is scheduled. If you sent a message, someone on our team will reply. That may take a few days.',
    more: 'In the meantime, you can read <a href="{blog}">our blog</a>, <a href="{host}">offer a venue</a> or <a href="{help}">volunteer</a>.',
  },

  lost: {
    title: 'Page not found',
    heading: 'Page not found',
    lead: 'We could not find that page. It may have moved. Go back to the <a href="{home}">home page</a>, or <a href="{contact}">tell us what you were looking for</a>.',
  },

  blog: {
    title: 'Blog',
    lead: 'Articles by the Human First AI team.',
    external: '(opens on our articles site)',
    // Shown beside a piece that has no version in the language being read. Empty in English.
    inEnglish: '',
    more: 'More posts',
  },

  privacyPage: {
    draft: 'This page is a draft. Our team has not finished reviewing it.',
    updated: 'Last changed on {date}.',
  },
};

type Words = typeof en;

const es: Words = {
  titleDefault: 'Human First AI · Que la IA sea una puerta abierta, no un laboratorio cerrado',
  description:
    'Human First AI es un grupo de personas voluntarias que empieza en Barcelona y quiere que la IA sea una puerta abierta, no un laboratorio cerrado. Estamos preparando mesas redondas, talleres, eventos y más. Suscríbete para recibir avisos por correo.',
  shareAlt: 'Human First AI. Queremos que todo el mundo entienda la IA. Que la IA sea una puerta abierta, no un laboratorio cerrado. Una puerta naranja abierta en una pared azul oscuro.',
  skip: 'Saltar al contenido',
  homeLabel: 'Human First AI, inicio',
  menu: 'Menú',
  nav: { about: 'Quiénes somos', events: 'Eventos', blog: 'Blog', contact: 'Contacto' },
  cta: 'Recibir avisos',
  aria: { main: 'Principal', footer: 'Pie de página', language: 'Idioma' },
  privacy: 'Privacidad',
  footLine: 'Un grupo de personas voluntarias de Barcelona.',

  news: {
    button: 'Suscribirme',
    note: 'Te escribiremos cuando algo tenga fecha y lugar. Puedes darte de baja cuando quieras.',
    noteSubstack: 'Te escribiremos cuando algo tenga fecha y lugar. Lo enviamos con Substack. Puedes darte de baja cuando quieras.',
    placeholder: 'nombre@ejemplo.com',
    honeypot: 'Deja esto vacío',
    privacy: 'Cómo usamos tu correo',
  },

  take: {
    title: 'Participa',
    steps: [
      {
        title: 'Ven a un evento',
        body: 'Todavía no hay nada programado. Suscríbete y te escribiremos cuando haya un evento programado.',
        link: 'Suscribirme',
      },
      {
        title: 'Ayuda',
        body: 'Buscamos personas que sepan enseñar, organizar, traducir, diseñar o escribir.',
        link: 'Quiero ayudar',
      },
      {
        title: 'Ofrece un espacio',
        body: 'Una biblioteca, una sala o una oficina fuera de horario. Si tienes un espacio en Barcelona o cerca, dínoslo.',
        link: 'Ofrecer un espacio',
      },
    ],
  },

  home: {
    why: 'Nuestra misión',
    also: 'También puedes <a href="{help}">ayudar</a> u <a href="{host}">ofrecer un espacio</a>.',
  },

  about: { title: 'Quiénes somos' },

  team: {
    title: 'Nuestro equipo',
    lead: 'De momento somos {n} personas, y hay sitio para más.',
    onLinkedIn: '{name} en LinkedIn',
    more: 'Más sobre {name}',
    portrait: 'Retrato de {name}',
  },

  events: {
    title: 'Eventos',
    description:
      'Estamos preparando mesas redondas, talleres, eventos y más, empezando por Barcelona. Suscríbete y te escribiremos cuando haya algo programado.',
    lead: 'Estamos preparando mesas redondas, talleres, eventos y más, empezando por Barcelona.',
    emptyTitle: 'Todavía no hay eventos programados',
    emptyLead: 'Suscríbete y te escribiremos cuando haya uno.',
    emailLabel: 'Tu correo',
    host: '¿Tienes un espacio que podamos usar o quieres ayudar? <a href="{host}">Ofrece un espacio</a> o <a href="{help}">ayúdanos</a>.',
    comingUp: 'Próximamente',
    timeRange: 'de {from} a {to}',
    typeIn: '{type} en {language}',
    types: { Panel: 'Mesa redonda', Workshop: 'Taller', Talk: 'Charla', Social: 'Encuentro' },
    languages: { english: 'inglés', spanish: 'español', catalan: 'catalán' },
    tba: 'Fecha y lugar por anunciar',
    dateTba: 'Fecha por anunciar',
    placeTba: 'Lugar por anunciar',
    hearFirst: 'Recibe un correo cuando tenga fecha',
    hearNext: 'Recibe un correo sobre el siguiente',
    seat: 'Inscribirme',
    past: 'Ya han pasado',
  },

  contact: {
    title: 'Contacto',
    description: 'Ayúdanos, ofrece un espacio o haznos una pregunta. Cada mensaje lo lee una persona del equipo.',
    heading: 'Escríbenos',
    lead: 'Cada mensaje lo lee una persona del equipo. Lo hacemos de forma voluntaria, así que podemos tardar unos días en contestar.',
    reasons: { help: 'Quiero ayudar', host: 'Ofrecer un espacio', press: 'Prensa o alianzas', other: 'Otra cosa' },
    legend: '¿Qué te gustaría hacer?',
    name: 'Tu nombre',
    email: 'Correo electrónico',
    message: 'Tu mensaje',
    hint: 'Cuéntanos dónde estás y qué tienes en mente.',
    send: 'Enviar mensaje',
    use: 'Usamos tu nombre y tu correo solo para contestarte. <a href="{privacy}">Privacidad</a>',
  },

  thanks: {
    title: 'Gracias',
    heading: 'Gracias',
    lead: 'Si te has suscrito, te escribiremos cuando haya algo programado. Si has enviado un mensaje, te contestará alguien del equipo. Puede tardar unos días.',
    more: 'Mientras tanto, puedes leer <a href="{blog}">nuestro blog</a>, <a href="{host}">ofrecer un espacio</a> o <a href="{help}">ayudarnos</a>.',
  },

  lost: {
    title: 'Página no encontrada',
    heading: 'Página no encontrada',
    lead: 'No hemos encontrado esa página. Puede que haya cambiado de sitio. Vuelve a la <a href="{home}">página de inicio</a> o <a href="{contact}">cuéntanos qué buscabas</a>.',
  },

  blog: {
    title: 'Blog',
    lead: 'Artículos del equipo de Human First AI.',
    external: '(se abre en nuestra web de artículos)',
    inEnglish: 'En inglés',
    more: 'Más artículos',
  },

  privacyPage: {
    draft: 'Esta página es un borrador. Nuestro equipo todavía no ha terminado de revisarla.',
    updated: 'Última modificación: {date}.',
  },
};

const ui: Record<Lang, Words> = { en, es };

/** The words for one language. */
export const useT = (lang: Lang) => ui[lang];
