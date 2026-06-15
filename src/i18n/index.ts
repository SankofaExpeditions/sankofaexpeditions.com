export const languages = {
  en: { label: 'English', flag: '🇺🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
  es: { label: 'Español', flag: '🇪🇸' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Strip any existing lang prefix
  const cleanPath = path.replace(/^\/(en|fr|es)/, '');
  if (lang === defaultLang) return cleanPath || '/';
  return `/${lang}${cleanPath || ''}`;
}

// UI strings used across all pages
export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.expeditions': 'Expeditions',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Intel',

    // Header
    'header.tagline': 'Sometimes you need to go back and get it.',

    // Footer
    'footer.navigate': 'Navigate',
    'footer.connect': 'Connect',
    'footer.tagline': 'Intelligence, infrastructure, and real-world pathways for Africans and the African diaspora to move, build, and thrive across the continent.',
    'footer.motto': '"Sometimes you need to go back and get it."',
    'footer.copyright': `© ${new Date().getFullYear()} Sankofa Expeditions®. All rights reserved.`,
    'footer.proverb': '"Se wo were fi na wosankofa a yenkyi.", It is not wrong to go back for that which you have forgotten.',

    // Homepage
    'hero.eyebrow': 'African Intelligence · Diaspora Pathways · Real Infrastructure',
    'hero.title': "The Intelligence Layer for Africa's Next Chapter",
    'hero.description': "Sankofa Expeditions® delivers on-the-ground intelligence, infrastructure access, and real-world pathways for Africans and the African diaspora to move, build, and thrive across the continent. We don't sell dreams, we build bridges.",
    'hero.cta.primary': 'Get the Intel',
    'hero.cta.secondary': 'Learn More',
    'hero.stat.nations': 'African Nations Covered',
    'hero.stat.diaspora': 'Diaspora Connected',
    'hero.stat.intel': 'On-Ground Intel',

    // Mission
    'mission.eyebrow': 'Our Mission',
    'mission.title': 'Go Back and Get It. Then Build Forward.',
    'mission.p1': '<strong>Sankofa</strong> is an Akan word from Ghana meaning <em>"go back and get it."</em> The Sankofa bird flies forward while looking backward, carrying the egg of knowledge, wisdom, and heritage into the future.',
    'mission.p2': '<strong>Sankofa Expeditions®</strong> exists because the African diaspora deserves more than travel brochures and tourist traps. We provide real intelligence, the kind that helps you navigate visa processes, understand local economies, find trustworthy partners, secure housing, and actually build something lasting on the continent.',
    'mission.p3': "Whether you're exploring relocation, launching a business, investing in real estate, or reconnecting with your roots, we provide the infrastructure and intelligence that turns intention into action.",
    'mission.pillar1.title': 'Pan-African Coverage',
    'mission.pillar1.desc': "Intelligence spanning all 54 African nations, not just the tourist-friendly highlights.",
    'mission.pillar2.title': 'Diaspora-First',
    'mission.pillar2.desc': 'Built by the diaspora, for the diaspora. We understand the journey because we live it.',
    'mission.pillar3.title': 'Verified Intel',
    'mission.pillar3.desc': 'Every data point verified on the ground. No recycled blog posts, no second-hand opinions.',

    // Trust
    'trust.eyebrow': 'Why Trust Sankofa',
    'trust.title': 'Built Different. Built for This.',
    'trust.subtitle': "We're not another travel agency. We're an intelligence platform built by the diaspora, for the diaspora.",
    'trust.item1.title': 'Boots on the Ground',
    'trust.item1.desc': "Our intelligence comes from real people in real places, not scraped data or recycled blog posts. We verify everything through our on-the-ground network across Africa.",
    'trust.item2.title': 'Diaspora-Owned & Led',
    'trust.item2.desc': "We understand the diaspora experience because we live it. Every pathway we recommend, every connection we make, it's informed by our own journey of return and reconnection.",
    'trust.item3.title': 'No Gatekeeping',
    'trust.item3.desc': 'The information barrier is the biggest obstacle for diaspora looking to engage with Africa. We tear it down. Premium intelligence delivered without the premium price wall.',
    'trust.quote': '"The diaspora doesn\'t need another tour. It needs infrastructure, intelligence, and someone who understands what it means to go back."',
    'trust.quoteAttr': ', Sankofa Expeditions®',

    // Email capture
    'capture.eyebrow': 'Join the Movement',
    'capture.title': 'Get the Intel Before Everyone Else',
    'capture.desc': "Join our list for exclusive intelligence drops: country deep-dives, diaspora opportunities, visa updates, investment signals, and on-the-ground dispatches from across Africa. No spam. Pure signal.",
    'capture.name': 'Your first name',
    'capture.email': 'Your email address',
    'capture.submit': 'Get Intel →',
    'capture.privacy': 'We respect your inbox. Unsubscribe anytime.',

    // Blog
    'blog.eyebrow': 'Intel Drops & Guides',
    'blog.title': 'The Sankofa Journal',
    'blog.subtitle': 'Deep-dive intelligence for the African diaspora, country profiles, relocation guides, visa intel, and on-the-ground dispatches from across the continent.',
    'blog.latest': 'Latest Intelligence',
    'blog.published': 'Intel Drops Published',
    'blog.read': 'Read →',
    'blog.subscribe.eyebrow': 'Stay Informed',
    'blog.subscribe.title': "Don't Miss an Intel Drop",
    'blog.subscribe.desc': 'Be the first to receive our articles, country deep-dives, and diaspora pathway updates. No spam, no fluff, just verified intelligence delivered to your inbox.',
    'blog.subscribe.cta': 'Subscribe for Updates →',
    'blog.subscribe.contact': 'Contact Us',
    'blog.cta.title': 'Get More Intel Like This',
    'blog.cta.subscribe': 'Subscribe for Updates',
  },

  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.expeditions': 'Expéditions',
    'nav.services': 'Services',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Renseignements',

    // Header
    'header.tagline': 'Parfois, il faut retourner chercher ce qu\'on a laissé.',

    // Footer
    'footer.navigate': 'Navigation',
    'footer.connect': 'Contact',
    'footer.tagline': 'Intelligence, infrastructure et voies concrètes pour les Africains et la diaspora africaine, pour se déplacer, construire et prospérer à travers le continent.',
    'footer.motto': '"Parfois, il faut retourner chercher ce qu\'on a laissé."',
    'footer.copyright': `© ${new Date().getFullYear()} Sankofa Expeditions®. Tous droits réservés.`,
    'footer.proverb': '"Se wo were fi na wosankofa a yenkyi.". Il n\'est pas mal de revenir chercher ce que l\'on a oublié.',

    // Homepage
    'hero.eyebrow': 'Intelligence Africaine · Parcours Diaspora · Infrastructure Réelle',
    'hero.title': "La couche d'intelligence pour le prochain chapitre de l'Afrique",
    'hero.description': "Renseignement de terrain, accès aux infrastructures et parcours concrets pour la diaspora africaine. On ne vend pas des rêves, on construit des ponts.",
    'hero.cta.primary': 'Obtenir les Renseignements',
    'hero.cta.secondary': 'En savoir plus',
    'hero.stat.nations': 'Nations Africaines Couvertes',
    'hero.stat.diaspora': 'Diaspora Connectée',
    'hero.stat.intel': 'Intel de Terrain',

    // Mission
    'mission.eyebrow': 'Notre Mission',
    'mission.title': 'Retournez Chercher. Puis Construisez.',
    'mission.p1': '<strong>Sankofa</strong> est un mot Akan du Ghana signifiant <em>« retourne le chercher ».</em> L\'oiseau Sankofa vole vers l\'avant tout en regardant vers l\'arrière, portant l\'œuf de la connaissance, de la sagesse et de l\'héritage vers le futur.',
    'mission.p2': '<strong>Sankofa Expeditions®</strong> existe parce que la diaspora africaine mérite mieux que des brochures touristiques. Nous fournissons du vrai renseignement, le genre qui vous aide à naviguer les processus de visa, comprendre les économies locales, trouver des partenaires fiables et construire quelque chose de durable sur le continent.',
    'mission.p3': "Que vous exploriez la relocalisation, le lancement d'une entreprise, l'investissement immobilier ou la reconnexion avec vos racines, nous fournissons l'infrastructure et l'intelligence qui transforment l'intention en action.",
    'mission.pillar1.title': 'Couverture Panafricaine',
    'mission.pillar1.desc': "Renseignement couvrant les 54 nations africaines, pas seulement les destinations touristiques populaires.",
    'mission.pillar2.title': 'Diaspora D\'abord',
    'mission.pillar2.desc': 'Créé par la diaspora, pour la diaspora. Nous comprenons ce parcours parce que nous le vivons.',
    'mission.pillar3.title': 'Intel Vérifié',
    'mission.pillar3.desc': 'Chaque donnée vérifiée sur le terrain. Pas d\'articles recyclés, pas d\'opinions de seconde main.',

    // Trust
    'trust.eyebrow': 'Pourquoi Nous Faire Confiance',
    'trust.title': 'Différent. Conçu pour Ça.',
    'trust.subtitle': "Nous ne sommes pas une agence de voyage. Nous sommes une plateforme d'intelligence créée par la diaspora, pour la diaspora.",
    'trust.item1.title': 'Présence sur le terrain',
    'trust.item1.desc': "Notre intelligence provient de personnes réelles dans des lieux réels, pas de données extraites ou d'articles recyclés. Nous vérifions tout grâce à notre réseau sur le terrain à travers l'Afrique.",
    'trust.item2.title': 'Fondé par la Diaspora',
    'trust.item2.desc': "Nous comprenons l'expérience de la diaspora parce que nous la vivons. Chaque voie que nous recommandons est éclairée par notre propre parcours de retour et de reconnexion.",
    'trust.item3.title': 'Sans Barrières',
    'trust.item3.desc': "La barrière de l'information est le plus grand obstacle pour la diaspora. Nous la détruisons. Intelligence premium sans mur de prix.",
    'trust.quote': '"La diaspora n\'a pas besoin d\'un autre tour. Elle a besoin d\'infrastructure, d\'intelligence, et de quelqu\'un qui comprend ce que signifie revenir."',
    'trust.quoteAttr': ', Sankofa Expeditions®',

    // Email capture
    'capture.eyebrow': 'Rejoignez le Mouvement',
    'capture.title': 'Recevez les Renseignements Avant Tout le Monde',
    'capture.desc': "Inscrivez-vous pour des analyses exclusives : profils de pays, opportunités pour la diaspora, mises à jour de visas, signaux d'investissement et dépêches de terrain. Pas de spam. Signal pur.",
    'capture.name': 'Votre prénom',
    'capture.email': 'Votre adresse email',
    'capture.submit': 'S\'inscrire →',
    'capture.privacy': 'Nous respectons votre boîte mail. Désinscription à tout moment.',

    // Blog
    'blog.eyebrow': 'Analyses & Guides',
    'blog.title': 'Le Journal Sankofa',
    'blog.subtitle': 'Intelligence approfondie pour la diaspora africaine, profils de pays, guides de relocalisation, renseignements sur les visas et dépêches de terrain.',
    'blog.latest': 'Dernières Analyses',
    'blog.published': 'Analyses Publiées',
    'blog.read': 'Lire →',
    'blog.subscribe.eyebrow': 'Restez Informé',
    'blog.subscribe.title': 'Ne Manquez Aucune Analyse',
    'blog.subscribe.desc': 'Soyez les premiers à recevoir nos articles, analyses de pays et mises à jour. Pas de spam, que du renseignement vérifié.',
    'blog.subscribe.cta': 'S\'abonner aux Mises à Jour →',
    'blog.subscribe.contact': 'Nous Contacter',
    'blog.cta.title': 'Plus de Renseignements Comme Celui-ci',
    'blog.cta.subscribe': 'S\'abonner',
  },

  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.expeditions': 'Expediciones',
    'nav.services': 'Servicios',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.cta': 'Informes',

    // Header
    'header.tagline': 'A veces, hay que volver a buscar lo que dejaste.',

    // Footer
    'footer.navigate': 'Navegación',
    'footer.connect': 'Contacto',
    'footer.tagline': 'Inteligencia, infraestructura y caminos reales para africanos y la diáspora africana, para moverse, construir y prosperar en el continente.',
    'footer.motto': '"A veces, hay que volver a buscar lo que dejaste."',
    'footer.copyright': `© ${new Date().getFullYear()} Sankofa Expeditions®. Todos los derechos reservados.`,
    'footer.proverb': '"Se wo were fi na wosankofa a yenkyi.", No es malo volver a buscar lo que has olvidado.',

    // Homepage
    'hero.eyebrow': 'Inteligencia Africana · Rutas de la Diáspora · Infraestructura Real',
    'hero.title': 'La Capa de Inteligencia para el Próximo Capítulo de África',
    'hero.description': 'Inteligencia de campo, acceso a infraestructura y caminos reales para la diáspora africana. No vendemos sueños, construimos puentes.',
    'hero.cta.primary': 'Obtener Información',
    'hero.cta.secondary': 'Saber Más',
    'hero.stat.nations': 'Naciones Africanas Cubiertas',
    'hero.stat.diaspora': 'Diáspora Conectada',
    'hero.stat.intel': 'Intel en Campo',

    // Mission
    'mission.eyebrow': 'Nuestra Misión',
    'mission.title': 'Vuelve a Buscarlo. Luego Construye.',
    'mission.p1': '<strong>Sankofa</strong> es una palabra Akan de Ghana que significa <em>"vuelve a buscarlo".</em> El pájaro Sankofa vuela hacia adelante mientras mira hacia atrás, llevando el huevo del conocimiento, la sabiduría y la herencia hacia el futuro.',
    'mission.p2': '<strong>Sankofa Expeditions®</strong> existe porque la diáspora africana merece más que folletos turísticos. Proporcionamos inteligencia real, la que te ayuda a navegar procesos de visa, entender economías locales, encontrar socios confiables y construir algo duradero en el continente.',
    'mission.p3': 'Ya sea que explores la reubicación, el lanzamiento de un negocio, la inversión inmobiliaria o la reconexión con tus raíces, proporcionamos la infraestructura e inteligencia que transforma la intención en acción.',
    'mission.pillar1.title': 'Cobertura Panafricana',
    'mission.pillar1.desc': 'Inteligencia que cubre las 54 naciones africanas, no solo los destinos turísticos populares.',
    'mission.pillar2.title': 'Diáspora Primero',
    'mission.pillar2.desc': 'Creado por la diáspora, para la diáspora. Entendemos el viaje porque lo vivimos.',
    'mission.pillar3.title': 'Intel Verificado',
    'mission.pillar3.desc': 'Cada dato verificado en campo. Sin artículos reciclados, sin opiniones de segunda mano.',

    // Trust
    'trust.eyebrow': 'Por Qué Confiar en Sankofa',
    'trust.title': 'Diferente. Hecho para Esto.',
    'trust.subtitle': 'No somos otra agencia de viajes. Somos una plataforma de inteligencia creada por la diáspora, para la diáspora.',
    'trust.item1.title': 'Presencia en el Terreno',
    'trust.item1.desc': 'Nuestra inteligencia proviene de personas reales en lugares reales, no datos extraídos ni artículos reciclados. Verificamos todo a través de nuestra red en el terreno en África.',
    'trust.item2.title': 'Fundada por la Diáspora',
    'trust.item2.desc': 'Entendemos la experiencia de la diáspora porque la vivimos. Cada camino que recomendamos está informado por nuestro propio viaje de retorno y reconexión.',
    'trust.item3.title': 'Sin Barreras',
    'trust.item3.desc': 'La barrera de información es el mayor obstáculo para la diáspora. La destruimos. Inteligencia premium sin muro de precios.',
    'trust.quote': '"La diáspora no necesita otro tour. Necesita infraestructura, inteligencia, y alguien que entienda lo que significa volver."',
    'trust.quoteAttr': ', Sankofa Expeditions®',

    // Email capture
    'capture.eyebrow': 'Únete al Movimiento',
    'capture.title': 'Recibe la Información Antes que Todos',
    'capture.desc': 'Únete para análisis exclusivos: perfiles de países, oportunidades para la diáspora, actualizaciones de visa, señales de inversión y despachos de campo. Sin spam. Señal pura.',
    'capture.name': 'Tu nombre',
    'capture.email': 'Tu correo electrónico',
    'capture.submit': 'Suscribirme →',
    'capture.privacy': 'Respetamos tu bandeja de entrada. Cancela cuando quieras.',

    // Blog
    'blog.eyebrow': 'Análisis y Guías',
    'blog.title': 'El Diario Sankofa',
    'blog.subtitle': 'Inteligencia profunda para la diáspora africana, perfiles de países, guías de reubicación, información de visas y despachos de campo.',
    'blog.latest': 'Últimos Análisis',
    'blog.published': 'Análisis Publicados',
    'blog.read': 'Leer →',
    'blog.subscribe.eyebrow': 'Mantente Informado',
    'blog.subscribe.title': 'No Te Pierdas Ningún Análisis',
    'blog.subscribe.desc': 'Sé el primero en recibir nuestros artículos, análisis de países y actualizaciones. Sin spam, solo inteligencia verificada.',
    'blog.subscribe.cta': 'Suscribirse a Actualizaciones →',
    'blog.subscribe.contact': 'Contáctanos',
    'blog.cta.title': 'Más Información Como Esta',
    'blog.cta.subscribe': 'Suscribirse',
  }
} as const;

export function t(key: string, lang: Lang = defaultLang): string {
  return (ui[lang] as Record<string, string>)?.[key] || (ui.en as Record<string, string>)?.[key] || key;
}
