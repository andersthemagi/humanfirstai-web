// The Catalan words for src/i18n/ui.ts, taken off the site on 2026-11-16. Not imported anywhere.
// To bring Catalan back, see README.md in this folder.
// The entry for `languages` in ui.ts:
export const caLanguage = { name: 'Català', short: 'CA', intl: 'ca-ES', og: 'ca_ES' } as const;

// In ui.ts it was `const ca: Words = {`.
export const ca = {
  titleDefault: 'Human First AI · Que la IA sigui una porta oberta, no un laboratori tancat',
  description:
    "Human First AI és un grup de persones voluntàries que comença a Barcelona i vol que la IA sigui una porta oberta, no un laboratori tancat. Estem preparant taules rodones, tallers, esdeveniments i més. Subscriu-te per rebre avisos al correu.",
  shareAlt: 'Human First AI. Volem que tothom entengui la IA. Que la IA sigui una porta oberta, no un laboratori tancat. Una porta taronja oberta en una paret blau fosc.',
  skip: 'Salta al contingut',
  homeLabel: 'Human First AI, inici',
  menu: 'Menú',
  nav: { about: 'Qui som', events: 'Esdeveniments', blog: 'Blog', contact: 'Contacte' },
  cta: 'Rebre avisos',
  aria: { main: 'Principal', footer: 'Peu de pàgina', language: 'Idioma' },
  privacy: 'Privacitat',
  footLine: 'Un grup de persones voluntàries de Barcelona.',

  news: {
    button: "Subscriu-me",
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
        title: 'Vine a un esdeveniment',
        body: "Encara no hi ha res programat. Subscriu-te i t'escriurem quan hi hagi un esdeveniment programat.",
        link: 'Subscriu-me',
      },
      {
        title: 'Ajuda',
        body: 'Busquem persones que sàpiguen ensenyar, organitzar, traduir, dissenyar o escriure.',
        link: 'Vull ajudar',
      },
      {
        title: 'Ofereix un espai',
        body: "Una biblioteca, una sala o una oficina fora d'horari. Si tens un espai a Barcelona o a prop, digues-nos-ho.",
        link: 'Oferir un espai',
      },
    ],
  },

  home: {
    why: 'La nostra missió',
    also: 'També pots <a href="{help}">ajudar</a> o <a href="{host}">oferir un espai</a>.',
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
      "Estem preparant taules rodones, tallers, esdeveniments i més, començant per Barcelona. Subscriu-te i t'escriurem quan hi hagi alguna cosa programada.",
    lead: 'Estem preparant taules rodones, tallers, esdeveniments i més, començant per Barcelona.',
    emptyTitle: 'Encara no hi ha esdeveniments programats',
    emptyLead: "Subscriu-te i t'escriurem quan n'hi hagi un.",
    emailLabel: 'El teu correu',
    host: 'Tens un espai que puguem fer servir o vols ajudar? <a href="{host}">Ofereix un espai</a> o <a href="{help}">ajuda\'ns</a>.',
    comingUp: 'Properament',
    timeRange: 'de {from} a {to}',
    typeIn: '{type} en {language}',
    types: { Panel: 'Taula rodona', Workshop: 'Taller', Talk: 'Xerrada', Social: 'Trobada' },
    languages: { english: 'anglès', spanish: 'castellà', catalan: 'català' },
    tba: 'Data i lloc per anunciar',
    dateTba: 'Data per anunciar',
    placeTba: 'Lloc per anunciar',
    hearFirst: 'Rep un correu quan tingui data',
    hearNext: 'Rep un correu sobre el següent',
    seat: "Inscriu-m'hi",
    past: 'Ja han passat',
  },

  contact: {
    title: 'Contacte',
    description: "Ajuda'ns, ofereix un espai o fes-nos una pregunta. Cada missatge el llegeix una persona de l'equip.",
    heading: 'Escriu-nos',
    lead: "Cada missatge el llegeix una persona de l'equip. Ho fem de manera voluntària, així que podem trigar uns dies a respondre.",
    reasons: { help: 'Vull ajudar', host: 'Oferir un espai', press: 'Premsa o aliances', other: 'Una altra cosa' },
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
    heading: 'Gràcies',
    lead: "Si t'has subscrit, t'escriurem quan hi hagi alguna cosa programada. Si has enviat un missatge, et respondrà algú de l'equip. Pot trigar uns dies.",
    more: 'Mentrestant, pots llegir <a href="{blog}">el nostre blog</a>, <a href="{host}">oferir un espai</a> o <a href="{help}">ajudar-nos</a>.',
  },

  lost: {
    title: 'Pàgina no trobada',
    heading: 'Pàgina no trobada',
    lead: 'No hem trobat aquesta pàgina. Potser ha canviat de lloc. Torna a la <a href="{home}">pàgina d\'inici</a> o <a href="{contact}">explica\'ns què buscaves</a>.',
  },

  blog: {
    title: 'Blog',
    lead: "Articles de l'equip de Human First AI.",
    external: "(s'obre al nostre web d'articles)",
    inEnglish: 'En anglès',
    more: 'Més articles',
  },

  privacyPage: {
    draft: 'Aquesta pàgina és un esborrany. El nostre equip encara no ha acabat de revisar-la.',
    updated: 'Última modificació: {date}.',
  },
};
