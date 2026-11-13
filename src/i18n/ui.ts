// The three languages of the site and every sentence that is not edited in the CMS.
// English lives at /, Spanish at /es/, Catalan at /ca/. Pages share one file each
// (src/pages/[...lang]/) and read their words from here.
//
// To change a sentence: change it in all three blocks below. Spanish and Catalan address the
// reader as "tú" / "tu", use no exclamation marks, and say only what has already happened.

export const languages = {
  en: { name: 'English', short: 'EN', intl: 'en-GB', og: 'en_GB' },
  es: { name: 'Español', short: 'ES', intl: 'es-ES', og: 'es_ES' },
  ca: { name: 'Català', short: 'CA', intl: 'ca-ES', og: 'ca_ES' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** One page per language from a single file: /about/, /es/about/, /ca/about/. */
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

/** Content files carry their language in the name: home.json, home-es.json, home-ca.json. */
export const entryId = (base: string, lang: Lang) => (lang === defaultLang ? base : `${base}-${lang}`);

/** Fills {name} gaps in a sentence. */
export const fill = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));

/** Dates come out of Intl in lower case in Spanish and Catalan; a line that starts with one needs its capital. */
export const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const en = {
  titleDefault: 'Human First AI · Make AI an open door, not a locked lab',
  description:
    'Human First AI is a volunteer group, starting in Barcelona, that wants AI to be an open door, not a locked lab. Panels, workshops, events and more are in the works. Leave your email to hear first.',
  shareAlt: 'Human First AI. We open doors to AI for all. An open orange doorway on a dark blue wall.',
  skip: 'Skip to content',
  homeLabel: 'Human First AI, home',
  menu: 'Menu',
  nav: { about: 'About', events: 'Events', blog: 'Writing', contact: 'Contact' },
  cta: 'Get updates',
  aria: { main: 'Main', footer: 'Footer', language: 'Language' },
  privacy: 'Privacy',
  footLine: 'Volunteers opening doors to AI for all. Based in Barcelona.',

  news: {
    button: 'Tell me when',
    note: 'We will email you when something has a date and a place. You can stop any time.',
    noteSubstack: 'We will email you when something has a date and a place. Sent through Substack. You can stop any time.',
    placeholder: 'you@example.com',
    honeypot: 'Leave this empty',
    privacy: 'How we use your email',
  },

  take: {
    title: 'Take part',
    steps: [
      {
        title: 'Come along',
        body: 'Nothing has a date yet. Leave your email and you will be the first to know when something does.',
        link: 'Tell me when',
      },
      {
        title: 'Help make it happen',
        body: 'Teach, organise, translate, design or write. We are volunteers, and there is plenty to do.',
        link: 'Offer to help',
      },
      {
        title: 'Lend us a space',
        body: 'A library, a hall, an office after hours. If it is in or near Barcelona, tell us about it.',
        link: 'Offer a space',
      },
    ],
  },

  home: {
    why: 'Why we started',
    also: 'You can also <a href="{help}">offer to help</a> or <a href="{host}">lend us a space</a>.',
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
      'Panels, workshops, events and more are in the works, starting in Barcelona. Leave your email and we will tell you when something has a date.',
    lead: 'Panels, workshops, events and more are in the works, starting in Barcelona.',
    emptyTitle: 'Nothing has a date yet',
    emptyLead: 'Leave your email and we will tell you as soon as something does.',
    emailLabel: 'Your email',
    host: 'Have a space we could use, or want to help? <a href="{host}">Offer a space</a> or <a href="{help}">offer to help</a>.',
    comingUp: 'Coming up',
    timeRange: '{from} to {to}',
    typeIn: '{type} in {language}',
    types: { Panel: 'Panel', Workshop: 'Workshop', Talk: 'Talk', Social: 'Social' },
    languages: { english: 'English', spanish: 'Spanish', catalan: 'Catalan' },
    tba: 'Date and place to be announced',
    dateTba: 'Date to be announced',
    placeTba: 'Place to be announced',
    hearFirst: 'Hear as soon as there is a date',
    hearNext: 'Hear about the next one',
    seat: 'Save me a seat',
    past: 'Already happened',
  },

  contact: {
    title: 'Contact',
    description: 'Offer to help, offer a space, or ask a question. A real person reads every message.',
    heading: 'Say hello',
    lead: 'A real person reads every message. We are volunteers, so it may take a few days to reply.',
    reasons: { help: 'Offer to help', host: 'Offer a space', press: 'Press or partnership', other: 'Something else' },
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
    heading: 'Got it. Thank you.',
    lead: 'If you left your email, we will write to you when something has a date and a place. If you sent a message, a real person will reply. That may take a few days.',
    more: 'While you wait, read <a href="{blog}">something we wrote</a>. If you know a space we could use, <a href="{host}">tell us about it</a>. If you could help, <a href="{help}">say so here</a>.',
  },

  lost: {
    title: 'Page not found',
    heading: 'This door does not go anywhere',
    lead: 'We could not find that page. It may have moved. Go back to the <a href="{home}">home page</a>, or <a href="{contact}">tell us what you were looking for</a>.',
  },

  blog: {
    title: 'Writing',
    lead: 'Essays from the people behind Human First AI.',
    external: '(opens on our articles site)',
    // Shown beside a piece that has no version in the language being read. Empty in English.
    inEnglish: '',
    more: 'More writing',
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
    'Human First AI es un grupo de personas voluntarias que empieza en Barcelona y quiere que la IA sea una puerta abierta, no un laboratorio cerrado. Estamos preparando mesas redondas, talleres, eventos y más. Deja tu correo y te avisamos.',
  shareAlt: 'Human First AI. Abrimos puertas a la IA para todo el mundo. Una puerta naranja abierta en una pared azul oscuro.',
  skip: 'Saltar al contenido',
  homeLabel: 'Human First AI, inicio',
  menu: 'Menú',
  nav: { about: 'Quiénes somos', events: 'Eventos', blog: 'Artículos', contact: 'Contacto' },
  cta: 'Recibir avisos',
  aria: { main: 'Principal', footer: 'Pie de página', language: 'Idioma' },
  privacy: 'Privacidad',
  footLine: 'Voluntariado que abre puertas a la IA para todo el mundo. Desde Barcelona.',

  news: {
    button: 'Avísame',
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
        title: 'Acércate',
        body: 'Todavía no hay nada con fecha. Deja tu correo y te enterarás antes que nadie cuando la haya.',
        link: 'Avísame',
      },
      {
        title: 'Ayuda a hacerlo posible',
        body: 'Enseñar, organizar, traducir, diseñar o escribir. Lo hacemos de forma voluntaria y hay mucho por hacer.',
        link: 'Quiero ayudar',
      },
      {
        title: 'Préstanos un espacio',
        body: 'Una biblioteca, una sala, una oficina fuera de horario. Si está en Barcelona o cerca, cuéntanoslo.',
        link: 'Ofrecer un espacio',
      },
    ],
  },

  home: {
    why: 'Por qué empezamos',
    also: 'También puedes <a href="{help}">ofrecer tu ayuda</a> o <a href="{host}">prestarnos un espacio</a>.',
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
      'Estamos preparando mesas redondas, talleres, eventos y más, empezando por Barcelona. Deja tu correo y te avisamos cuando algo tenga fecha.',
    lead: 'Estamos preparando mesas redondas, talleres, eventos y más, empezando por Barcelona.',
    emptyTitle: 'Todavía no hay nada con fecha',
    emptyLead: 'Deja tu correo y te avisamos en cuanto la haya.',
    emailLabel: 'Tu correo',
    host: '¿Tienes un espacio que podamos usar o quieres ayudar? <a href="{host}">Ofrece un espacio</a> u <a href="{help}">ofrece tu ayuda</a>.',
    comingUp: 'Próximamente',
    timeRange: 'de {from} a {to}',
    typeIn: '{type} en {language}',
    types: { Panel: 'Mesa redonda', Workshop: 'Taller', Talk: 'Charla', Social: 'Encuentro' },
    languages: { english: 'inglés', spanish: 'español', catalan: 'catalán' },
    tba: 'Fecha y lugar por anunciar',
    dateTba: 'Fecha por anunciar',
    placeTba: 'Lugar por anunciar',
    hearFirst: 'Entérate en cuanto haya fecha',
    hearNext: 'Entérate del siguiente',
    seat: 'Guárdame un sitio',
    past: 'Ya han pasado',
  },

  contact: {
    title: 'Contacto',
    description: 'Ofrece tu ayuda, ofrece un espacio o haznos una pregunta. Cada mensaje lo lee una persona.',
    heading: 'Escríbenos',
    lead: 'Cada mensaje lo lee una persona. Lo hacemos de forma voluntaria, así que podemos tardar unos días en contestar.',
    reasons: { help: 'Quiero ayudar', host: 'Ofrecer un espacio', press: 'Prensa o colaboración', other: 'Otra cosa' },
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
    heading: 'Recibido. Gracias.',
    lead: 'Si has dejado tu correo, te escribiremos cuando algo tenga fecha y lugar. Si has enviado un mensaje, te contestará una persona. Puede tardar unos días.',
    more: 'Mientras tanto, lee <a href="{blog}">algo de lo que hemos escrito</a>. Si conoces un espacio que podamos usar, <a href="{host}">cuéntanoslo</a>. Si puedes ayudar, <a href="{help}">dínoslo aquí</a>.',
  },

  lost: {
    title: 'Página no encontrada',
    heading: 'Esta puerta no lleva a ningún sitio',
    lead: 'No hemos encontrado esa página. Puede que haya cambiado de sitio. Vuelve a la <a href="{home}">página de inicio</a> o <a href="{contact}">cuéntanos qué buscabas</a>.',
  },

  blog: {
    title: 'Artículos',
    lead: 'Textos de las personas que hay detrás de Human First AI.',
    external: '(se abre en nuestra web de artículos)',
    inEnglish: 'En inglés',
    more: 'Más artículos',
  },

  privacyPage: {
    draft: 'Esta página es un borrador. Nuestro equipo todavía no ha terminado de revisarla.',
    updated: 'Última modificación: {date}.',
  },
};

const ca: Words = {
  titleDefault: 'Human First AI · Que la IA sigui una porta oberta, no un laboratori tancat',
  description:
    "Human First AI és un grup de persones voluntàries que comença a Barcelona i vol que la IA sigui una porta oberta, no un laboratori tancat. Estem preparant taules rodones, tallers, esdeveniments i més. Deixa el teu correu i t'avisem.",
  shareAlt: 'Human First AI. Obrim portes a la IA per a tothom. Una porta taronja oberta en una paret blau fosc.',
  skip: 'Salta al contingut',
  homeLabel: 'Human First AI, inici',
  menu: 'Menú',
  nav: { about: 'Qui som', events: 'Esdeveniments', blog: 'Articles', contact: 'Contacte' },
  cta: 'Rebre avisos',
  aria: { main: 'Principal', footer: 'Peu de pàgina', language: 'Idioma' },
  privacy: 'Privacitat',
  footLine: 'Voluntariat que obre portes a la IA per a tothom. Des de Barcelona.',

  news: {
    button: "Avisa'm",
    note: "T'escriurem quan alguna cosa tingui data i lloc. Et pots donar de baixa quan vulguis.",
    noteSubstack: "T'escriurem quan alguna cosa tingui data i lloc. Ho enviem amb Substack. Et pots donar de baixa quan vulguis.",
    placeholder: 'nom@exemple.com',
    honeypot: 'Deixa això buit',
    privacy: 'Com fem servir el teu correu',
  },

  take: {
    title: 'Participa',
    steps: [
      {
        title: "Acosta't",
        body: "Encara no hi ha res amb data. Deixa el teu correu i ho sabràs abans que ningú quan n'hi hagi.",
        link: "Avisa'm",
      },
      {
        title: 'Ajuda a fer-ho possible',
        body: 'Ensenyar, organitzar, traduir, dissenyar o escriure. Ho fem de manera voluntària i hi ha molta feina per fer.',
        link: 'Vull ajudar',
      },
      {
        title: "Deixa'ns un espai",
        body: "Una biblioteca, una sala, una oficina fora d'horari. Si és a Barcelona o a prop, explica'ns-ho.",
        link: 'Oferir un espai',
      },
    ],
  },

  home: {
    why: 'Per què vam començar',
    also: 'També pots <a href="{help}">oferir la teva ajuda</a> o <a href="{host}">deixar-nos un espai</a>.',
  },

  about: { title: 'Qui som' },

  team: {
    title: 'El nostre equip',
    lead: 'De moment som {n} persones, i hi ha lloc per a més.',
    onLinkedIn: '{name} a LinkedIn',
    more: 'Més sobre {name}',
    portrait: 'Retrat de {name}',
  },

  events: {
    title: 'Esdeveniments',
    description:
      "Estem preparant taules rodones, tallers, esdeveniments i més, començant per Barcelona. Deixa el teu correu i t'avisem quan alguna cosa tingui data.",
    lead: 'Estem preparant taules rodones, tallers, esdeveniments i més, començant per Barcelona.',
    emptyTitle: 'Encara no hi ha res amb data',
    emptyLead: "Deixa el teu correu i t'avisem tan bon punt n'hi hagi.",
    emailLabel: 'El teu correu',
    host: 'Tens un espai que puguem fer servir o vols ajudar? <a href="{host}">Ofereix un espai</a> o <a href="{help}">ofereix la teva ajuda</a>.',
    comingUp: 'Properament',
    timeRange: 'de {from} a {to}',
    typeIn: '{type} en {language}',
    types: { Panel: 'Taula rodona', Workshop: 'Taller', Talk: 'Xerrada', Social: 'Trobada' },
    languages: { english: 'anglès', spanish: 'castellà', catalan: 'català' },
    tba: 'Data i lloc per anunciar',
    dateTba: 'Data per anunciar',
    placeTba: 'Lloc per anunciar',
    hearFirst: "Assabenta't tan bon punt hi hagi data",
    hearNext: "Assabenta't del següent",
    seat: "Guarda'm un lloc",
    past: 'Ja han passat',
  },

  contact: {
    title: 'Contacte',
    description: 'Ofereix la teva ajuda, ofereix un espai o fes-nos una pregunta. Cada missatge el llegeix una persona.',
    heading: 'Escriu-nos',
    lead: 'Cada missatge el llegeix una persona. Ho fem de manera voluntària, així que podem trigar uns dies a respondre.',
    reasons: { help: 'Vull ajudar', host: 'Oferir un espai', press: 'Premsa o col·laboració', other: 'Una altra cosa' },
    legend: "Què t'agradaria fer?",
    name: 'El teu nom',
    email: 'Correu electrònic',
    message: 'El teu missatge',
    hint: "Explica'ns on ets i què tens al cap.",
    send: 'Envia el missatge',
    use: 'Fem servir el teu nom i el teu correu només per respondre\'t. <a href="{privacy}">Privacitat</a>',
  },

  thanks: {
    title: 'Gràcies',
    heading: 'Rebut. Gràcies.',
    lead: "Si has deixat el teu correu, t'escriurem quan alguna cosa tingui data i lloc. Si has enviat un missatge, et respondrà una persona. Pot trigar uns dies.",
    more: 'Mentrestant, llegeix <a href="{blog}">alguna cosa que hem escrit</a>. Si coneixes un espai que puguem fer servir, <a href="{host}">explica\'ns-ho</a>. Si pots ajudar, <a href="{help}">digues-nos-ho aquí</a>.',
  },

  lost: {
    title: 'Pàgina no trobada',
    heading: 'Aquesta porta no porta enlloc',
    lead: 'No hem trobat aquesta pàgina. Potser ha canviat de lloc. Torna a la <a href="{home}">pàgina d\'inici</a> o <a href="{contact}">explica\'ns què buscaves</a>.',
  },

  blog: {
    title: 'Articles',
    lead: 'Textos de les persones que hi ha darrere de Human First AI.',
    external: "(s'obre al nostre web d'articles)",
    inEnglish: 'En anglès',
    more: 'Més articles',
  },

  privacyPage: {
    draft: 'Aquesta pàgina és un esborrany. El nostre equip encara no ha acabat de revisar-la.',
    updated: 'Última modificació: {date}.',
  },
};

const ui: Record<Lang, Words> = { en, es, ca };

/** The words for one language. */
export const useT = (lang: Lang) => ui[lang];
