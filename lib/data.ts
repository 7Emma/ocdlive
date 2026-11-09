export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "Camera" | "Clapperboard" | "Radio" | "Calendar" | "Film";
  benefits: string[];
  deliverables: string[];
  technologies: string[];
}

export interface LiveSlot {
  id: string;
  label: string;
  hours: string;
  description: string;
}

export interface LiveFormatItem {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  forWhom: string;
  howItWorks: string;
  badge: string;
  innovations: string[];
  techPills: string[];
  socialViral: string;
}

export interface BovanVideoItem {
  id: string;
  title: string;
  duration: string;
  views: string;
  badge: string;
  thumbnail: string;
  description: string;
  youtubeUrl: string;
  isMain?: boolean;
}

export interface YouthPhotoItem {
  id: string;
  title: string;
  role: string;
  location: string;
  hashtag: string;
  image: string;
  facebookUrl?: string;
  isVideo?: boolean;
}

export interface PricingOfferItem {
  id: string;
  slug: string;
  title: string;
  price: string;
  rawPrice: number;
  period?: string;
  description: string;
  isPopular?: boolean;
  included: string[];
  targetAudience: string;
  note?: string;
}

export type OpportunityType =
  | "Formation & Masterclass"
  | "Encadrement & Mentorat"
  | "Emploi & Mission Terrain"
  | "Casting & Appel à Projets";

export interface OpportunityItem {
  id: string;
  title: string;
  type?: OpportunityType;
  company: string;
  location: string;
  contractType: string;
  category:
    | "Audiovisuel & Régie"
    | "Production & Montage"
    | "Événementiel & Accueil"
    | "Communication & Réseaux"
    | "Entrepreneuriat & Création";
  remuneration: string;
  duration?: string;
  postedDate: string;
  deadline: string;
  badge?: string;
  spots?: string;
  description: string;
  requirements: string[];
  benefits?: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Conference" | "Live" | "Corporate" | "Plateau";
  client: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  metrics?: { label: string; value: string }[];
  deliverables: string[];
  techSetup: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "OCD Live",
  acronymMeaning: "Opportunités C'est Dehors",
  slogan: "L'expérience du live, pensée autrement.",
  manifestoLead: "Les opportunités, c'est dehors. On ne réussit pas dans sa chambre.",
  email: "contact@ocdlive.com",
  phone: "+228 90 00 00 00",
  phoneLabel: "+228 90 00 00 00",
  address: "Studio OCD Live, Lomé, Togo",
  socials: {
    youtube: "https://youtube.com/@ocdlive",
    facebook: "https://facebook.com/ocdlive",
    instagram: "https://instagram.com/ocdlive",
    linkedin: "https://linkedin.com/company/ocdlive",
    twitter: "https://x.com/ocdlive",
  },
  dg: {
    name: "Bovann",
    role: "PDG & Fondateur d'OCD Live",
    photo: "/images/bovann-pdg.jpg",
    avatar: "/images/bovann-avatar.jpg",
    quote:
      "Nous n'avons pas créé OCD Live pour faire de la vidéo de plus. Nous l'avons créé pour que la jeunesse et les bâtisseurs de ce continent arrêtent d'attendre dans leur chambre et prennent la parole dehors. Quand vous sortez, nous mettons nos caméras et nos régies au service de votre voix.",
    quoteStatus: "PDG d'OCD Live & Initiateur du mouvement #LesOpportunitesCestDehors",
  },
  capacity: {
    maxLivesPerDay: 4,
    note: "Capacité limitée à 4 lives par jour pour garantir une exigence broadcast maximale.",
  },
};

export const WHATSAPP_RESERVATION_URL =
  "https://wa.me/22890000000?text=Bonjour%20OCD%20Live%20!%20Je%20souhaite%20r%C3%A9server%20un%20live%20pour%20mon%20activit%C3%A9.%20Pouvez-vous%20me%20confirmer%20les%20disponibilit%C3%A9s%20%3F";

export function getWhatsAppReservationUrl(offerName?: string) {
  const base = "https://wa.me/22890000000";
  const msg = offerName
    ? `Bonjour OCD Live ! Je souhaite réserver la formule "${offerName}" pour mon activité. Pouvez-vous me confirmer les créneaux disponibles ?`
    : "Bonjour OCD Live ! Je souhaite réserver un live pour mon activité. Pouvez-vous me renseigner sur les disponibilités ?";
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export const DAILY_LIVE_SLOTS: LiveSlot[] = [
  {
    id: "slot-1",
    label: "Créneau 1 — Matinale",
    hours: "09h00 – 11h00",
    description: "Interviews courtes, annonces officielles, lancements de journée",
  },
  {
    id: "slot-2",
    label: "Créneau 2 — Midi",
    hours: "11h30 – 13h30",
    description: "Talk-shows, débats de mi-journée, tables rondes",
  },
  {
    id: "slot-3",
    label: "Créneau 3 — Après-midi",
    hours: "14h30 – 16h30",
    description: "Enregistrement de podcasts, masterclasses, capsules",
  },
  {
    id: "slot-4",
    label: "Créneau 4 — Prime / Soirée",
    hours: "17h00 – 21h00",
    description: "Grand direct événementiel, sommet, concert ou émission live",
  },
];

export const LIVE_FORMATS: LiveFormatItem[] = [
  {
    id: "live-presentiel",
    title: "Les Lives en Présentiel",
    subtitle: "Sur le terrain, face au public et aux opportunités",
    concept:
      "Le direct se passe au contact direct du monde. Sur scène, dans un marché, sur un chantier, dans une salle de conférence ou en plein air, notre régie mobile autonome capte la ferveur réelle et l'énergie brute de ceux qui bâtissent.",
    forWhom:
      "Entrepreneurs de terrain, organisateurs de festivals, conférences, sommets, marques et bâtisseurs du mouvement OCD.",
    howItWorks:
      "Déploiement d'une régie multicaméra 4K, liaisons HF sans fil longue portée, micro-trottoir spontané et transmission par satellite Starlink + bonding cellulaire 5G.",
    badge: "Immersion Terrain",
    innovations: [
      "Régie mobile autonome tout-terrain (Starlink Business + Bonding 4G/5G multi-opérateurs)",
      "Cadreurs mobiles sur stabilisateurs Ronin & micros HF pour capter les réactions du public en direct",
      "Clipping viral instantané : montage et publication de Shorts/TikTok en moins de 30 minutes pendant le live",
      "Diffusion double flux : projection sur écran géant local + retransmission mondiale simultanée",
    ],
    techPills: [
      "Starlink Business Satellite",
      "Bonding 4G/5G LiveU",
      "Sony FX6 / FX9 4K",
      "Micros HF Sennheiser",
      "Blackmagic ATEM 4K",
    ],
    socialViral:
      "Génération immédiate de capsules virales sous-titrées avec le hashtag #OCD et #LesOpportunitesCestDehors pour inonder les flux TikTok et YouTube.",
  },
  {
    id: "live-distance",
    title: "Les Lives à Distance",
    subtitle: "Le Hub Connecté : sortir de sa chambre sans frontière",
    concept:
      "Sortir de chez soi, c'est aussi refuser l'isolement en se branchant sur le direct mondial. Ce format interconnecte des intervenants situés dans différentes villes d'Afrique et du monde au sein d'un même plateau broadcast ultra-fluide.",
    forWhom:
      "Créateurs de contenu, experts internationaux en duplex, entreprises panafricaines, webinaires VIP et émissions connectées.",
    howItWorks:
      "Liaison duplex ultra-faible latence (<0.5s), incrustation dynamique des commentaires et tweets du chat en direct, et double encodage natif horizontal (16:9) + vertical (9:16).",
    badge: "Hub Connecté Mondial",
    innovations: [
      "Duplex multi-villes (Lomé, Abidjan, Paris, Londres) avec retour oreillette IFB et latence quasi nulle",
      "Simulcast biformat : diffusion simultanée en 16:9 (YouTube/LinkedIn) ET en 9:16 vertical natif (TikTok Live)",
      "Affichage interactif du chat : les questions et réactions du public apparaissent en 3D sur le décor du live",
      "Export master instantané : vidéo 4K nettoyée + piste audio podcast prête pour Spotify et Apple Podcasts",
    ],
    techPills: [
      "Duplex SRT / WebRTC ultra-low latency",
      "Double encodage 16:9 + 9:16 natif",
      "Micros Shure SM7B Broadcast",
      "Synthés 3D dynamiques temps réel",
      "Mastering audio DSP Dante",
    ],
    socialViral:
      "Interactivité décuplée avec la communauté en ligne : les spectateurs voient leurs commentaires affichés à l'écran en direct.",
  },
];

export const PRICING_OFFERS: PricingOfferItem[] = [
  {
    id: "live-1h30",
    slug: "live-1h30",
    title: "Live Direct 1h30",
    price: "15 000 FCFA",
    rawPrice: 15000,
    period: "Session 1h30",
    description:
      "Captation en direct avec une équipe personnalisée dans vos locaux ou au studio : interview, talk ou prise de parole diffusée sur vos réseaux.",
    included: [
      "1h30 de direct avec équipe personnalisée dans vos locaux ou en studio",
      "Dispositif 2 caméras, éclairage et micros professionnels",
      "Retransmission directe sur vos canaux (YouTube, Facebook, TikTok)",
      "Remise immédiate du Replay HD après la session",
    ],
    targetAudience: "Créateurs, commerces, indépendants et porteurs de projets à Lomé",
    note: "Déplacement de l'équipe à Lomé et environs sur réservation",
  },
  {
    id: "live-4h",
    slug: "live-4h",
    title: "Live Demi-Journée 4h",
    price: "30 000 FCFA",
    rawPrice: 30000,
    period: "Session 4h",
    isPopular: true,
    description:
      "Une équipe technique dédiée installée dans vos locaux pour couvrir vos conférences, ateliers, cultes ou masterclasses avec réalisation soignée.",
    included: [
      "4h de régie live complète avec équipe dédiée dans vos locaux",
      "Dispositif multicaméra HD/4K avec réalisation en direct",
      "Prise de son professionnelle & traitement dynamique du signal",
      "Incrustation de vos logos, synthés et habillage visuel sur mesure",
      "Exportation des fichiers masters HD sous 24h",
    ],
    targetAudience: "Entreprises, institutions, églises, formateurs, webinaires",
    note: "Régie mobile déployée dans vos locaux (4 lives/jour max)",
  },
  {
    id: "live-video-hoc",
    slug: "live-video-hoc",
    title: "Pack Live + 1 Vidéo House of Challenge",
    price: "50 000 FCFA",
    rawPrice: 50000,
    period: "Live + Média HOC",
    description:
      "L'équipe se déplace dans vos locaux pour capter votre live, puis produit 1 vidéo courte percutante publiée sur le compte House of Challenge.",
    included: [
      "Équipe personnalisée dans vos locaux pour le live de votre activité",
      "1 vidéo dynamique courte (Reels / TikTok) montée par nos soins",
      "Publication officielle sur le compte House of Challenge",
      "Exposition directe auprès de milliers de jeunes et de décideurs",
      "Rapport d'audience et mentions directes de votre entreprise",
    ],
    targetAudience: "Boutiques, restaurants, agences, événements voulant booster leur visibilité",
    note: "Validation conjointe du contenu avec l'équipe House of Challenge",
  },
  {
    id: "video-bovan",
    slug: "video-bovan",
    title: "Vidéo Collaboration avec Bovan",
    price: "75 000 FCFA",
    rawPrice: 75000,
    period: "Influence Bovan",
    description:
      "Tournage d'une vidéo personnalisée avec le PDG Bovan dans vos locaux ou en studio, postée sur le compte de Bovan ou House of Challenge.",
    included: [
      "Présence et collaboration en vidéo avec le PDG Bovan dans vos locaux",
      "Mise en lumière authentique de vos produits, services ou parcours",
      "Publication sur le compte officiel de Bovan ou House of Challenge",
      "La force et la caution du mouvement #LesOpportunitesCestDehors",
      "Relais en story avec tag de votre page pour générer des contacts",
    ],
    targetAudience: "Entrepreneurs, PME, sponsors, personnalités en quête d'impact",
    note: "Contenu validé directement avec la direction Bovan",
  },
  {
    id: "double-video-media",
    slug: "double-video-media",
    title: "Pack Double Impact (2 Vidéos Bovan / HOC)",
    price: "100 000 FCFA",
    rawPrice: 100000,
    period: "Double Diffusion",
    description:
      "Équipe de production dans vos locaux pour réaliser 2 vidéos exclusives publiées sur les comptes de Bovan ou House of Challenge.",
    included: [
      "Tournage complet dans vos locaux avec notre équipe technique",
      "2 vidéos promotionnelles distinctes scénarisées et montées",
      "Publication sur les comptes officiels de Bovan et/ou House of Challenge",
      "Double vague de visibilité et relais sur les réseaux sociaux",
      "Fichiers vidéos libres de droits pour votre propre communication",
    ],
    targetAudience: "Lancements de marques, campagnes publicitaires, promotions spéciales",
    note: "Planning de diffusion échelonné sur 1 à 2 semaines",
  },
  {
    id: "campagne-semaine",
    slug: "campagne-semaine",
    title: "Campagne 1 Semaine Promo + 2 Vidéos",
    price: "180 000 FCFA",
    rawPrice: 180000,
    period: "Semaine Intensive",
    description:
      "Couverture de lives pendant 1 semaine complète d'activité avec équipe dédiée dans vos locaux, plus 2 vidéos sur Bovan ou House of Challenge.",
    included: [
      "Équipe personnalisée mobilisée dans vos locaux pendant toute la semaine",
      "Diffusion de plusieurs sessions lives durant vos journées promotionnelles",
      "2 vidéos officielles montées et postées sur Bovan ou House of Challenge",
      "Relais permanent en direct et en stories sur toute la semaine",
      "Assistance technique complète et liaison Starlink haut débit",
    ],
    targetAudience: "Foires, festivals, grandes semaines de promotion, concessions, supermarchés",
    note: "Dispositif complet clé en main pour un impact commercial maximal",
  },
];

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  // 1. FORMATIONS & MASTERCLASSES
  {
    id: "formation-cadrage-4k",
    title: "Masterclass Pratique : Cadrage 4K & Réalisation Multicaméra",
    type: "Formation & Masterclass",
    company: "OCD Live Academy",
    location: "Lomé (Studio OCD Agoè & Régie Mobile)",
    contractType: "Formation Pratique Gratuite",
    category: "Audiovisuel & Régie",
    remuneration: "Prise en charge 100% (Matériel fourni)",
    duration: "2 semaines intensives (30h terrain)",
    postedDate: "Aujourd'hui",
    deadline: "18 Novembre 2026",
    badge: "FORMATION 100% PRATIQUE",
    spots: "12 places sélectionnées",
    description:
      "Prends en main les caméras broadcast réelles (Sony FX6, Blackmagic Studio), apprends le vocabulaire de régie, la gestion du tally, les ordres réalisateur et la prise d'angle dynamique sur les directs télévisés et streaming.",
    requirements: [
      "Jeunes passionnés d'image (débutants motivés ou autodidactes)",
      "Disponibilité en soirée et week-ends pour les tournages réels",
      "Discipline, ponctualité et esprit d'équipe #OCD",
    ],
    benefits: [
      "Attestation officielle de compétences OCD Live",
      "Intégration directe au vivier des cadreurs pigistes payés à la vacation",
      "Repas et transport assurés sur les tournages en extérieur",
    ],
  },
  {
    id: "formation-montage-reels-tiktok",
    title: "Bootcamp Express : Montage Vidéo Mobile & Formats Viraux (TikTok / Reels)",
    type: "Formation & Masterclass",
    company: "OCD Media Lab",
    location: "Lomé & En Ligne",
    contractType: "Bootcamp 5 Jours",
    category: "Production & Montage",
    remuneration: "Formation offerte + Prime au meilleur projet",
    duration: "5 jours intensifs (3h / jour)",
    postedDate: "Il y a 2 jours",
    deadline: "22 Novembre 2026",
    badge: "BOOTCAMP CRÉATEURS",
    spots: "20 places",
    description:
      "Transforme des heures de directs bruts en capsules percutantes de 60 secondes qui captent des millions de vues. Storytelling court, hooks accrocheurs dès la première seconde, sous-titres animés et sound design percutant.",
    requirements: [
      "Avoir un smartphone récent ou un PC avec CapCut, Premiere ou DaVinci",
      "Bonne culture des codes visuels et punchlines des réseaux sociaux",
      "Capacité à synthétiser une séquence forte en moins de 45 secondes",
    ],
    benefits: [
      "Possibilité d'embauche immédiate comme monteur freelance OCD",
      "Accès à la banque de rushs exclusifs des émissions de Bovan",
      "Coaching personnalisé par nos chefs monteurs",
    ],
  },
  {
    id: "formation-son-hf-broadcast",
    title: "Stage Terrain : Prise de Son HF, Mixage Broadcast & Direct Extérieur",
    type: "Formation & Masterclass",
    company: "OCD Live Productions",
    location: "Lomé (Sur sites événementiels & Foires)",
    contractType: "Stage Pratique Terrain",
    category: "Audiovisuel & Régie",
    remuneration: "Bourse de stage + Défraiement transport",
    duration: "3 semaines",
    postedDate: "Cette semaine",
    deadline: "25 Novembre 2026",
    badge: "STAGE TERRAIN",
    spots: "6 places",
    description:
      "Le son représente 70% de l'impact d'un direct. Apprends la gestion des fréquences HF sans fil, le placement des micros cravates/serre-tête, la lutte contre le vent et le larsen, et le mixage numérique en temps réel.",
    requirements: [
      "Bonne oreille, rigueur technique et sang-froid",
      "Notions de base en électricité ou audio analogique appréciées",
      "Motivation totale pour le direct sans filet",
    ],
    benefits: [
      "Manipulation de consoles numériques professionnelles",
      "Attestation de stage pratique certifiée",
      "Missions rémunérées dès validation du stage",
    ],
  },

  // 2. ENCADREMENT & MENTORAT BOVAN
  {
    id: "mentorat-bovan-terrain",
    title: "Programme d'Incubation & Mentorat Terrain par Bovan",
    type: "Encadrement & Mentorat",
    company: "Bovan Mouvement #OCD",
    location: "Lomé & Déplacements Sous-région",
    contractType: "Mentorat Exclusif 3 Mois",
    category: "Entrepreneuriat & Création",
    remuneration: "Gratuit / Accompagnement stratégique offert",
    duration: "Promotion de 3 mois",
    postedDate: "Hier",
    deadline: "30 Novembre 2026",
    badge: "MENTORAT DIRECT BOVAN",
    spots: "5 jeunes entrepreneurs sélectionnés",
    description:
      "Tu as déjà une activité réelle dehors (commerce, street food, artisanat, atelier, prestation) et tu veux exploser ta visibilité ? Le PDG Bovan et l'équipe OCD accompagnent 5 jeunes battants : refonte d'image, stratégie de vente et passage en live devant 4 millions d'abonnés.",
    requirements: [
      "Avoir une activité ou un commerce déjà existant sur le terrain",
      "Faire preuve de labeur acharné et incarner l'esprit #LesOpportunitesCestDehors",
      "Être prêt à être filmé et à partager son quotidien avec franchise et vérité",
    ],
    benefits: [
      "Passage en direct et diffusion sur les comptes de Bovan (4M+ abonnés)",
      "Conseils business et commercialisation en tête-à-tête avec Bovan",
      "Création de visuels et vidéos promotionnelles gratuites",
    ],
  },
  {
    id: "coaching-prise-parole-live",
    title: "Coaching Oratoire : Prise de Parole Face Caméra & Vente Flash en Direct",
    type: "Encadrement & Mentorat",
    company: "OCD Talent Factory",
    location: "Lomé (Plateau Live Talk-Show)",
    contractType: "Coaching Intensif",
    category: "Communication & Réseaux",
    remuneration: "Accompagnement offert sur casting",
    duration: "Session de 3 week-ends",
    postedDate: "Il y a 4 jours",
    deadline: "20 Novembre 2026",
    badge: "COACHING SCÈNE & LIVE",
    spots: "8 candidats retenus",
    description:
      "Comment captiver une audience en direct sans bafouiller ? Comment présenter un produit et susciter l'achat en temps réel ? Maîtrise ta posture, ta voix, ton regard caméra et ton pitch commercial avec les animateurs vedettes d'OCD Live.",
    requirements: [
      "Aisance relationnelle naturelle et énergie communicative",
      "Envie d'animer des ventes en direct, des chroniques ou des interviews",
      "Disponibilité les samedis matin à Lomé",
    ],
    benefits: [
      "Tournage d'une bande-démo professionnelle en studio 4K",
      "Opportunités de co-animation rémunérée sur nos lives partenaires",
      "Mise en relation avec des marques togolaises et régionales",
    ],
  },

  // 3. EMPLOIS & MISSIONS TERRAIN
  {
    id: "cadreur-live-lome",
    title: "Cadreur / Opérateur Caméra Broadcast",
    type: "Emploi & Mission Terrain",
    company: "OCD Live Productions",
    location: "Lomé (Agoè-Nyivé / Tokoin)",
    contractType: "Freelance / Pige Rémunérée",
    category: "Audiovisuel & Régie",
    remuneration: "Pige journalière (25 000 à 60 000 FCFA / jour selon mission)",
    duration: "Missions régulières selon calendrier événementiel",
    postedDate: "Hier",
    deadline: "20 Novembre 2026",
    badge: "PIGE RÉMUNÉRÉE",
    spots: "4 postes ouverts",
    description:
      "Dans le cadre du renforcement de nos équipes de captation sur les prochains sommets, concerts et plateaux TV, nous recrutons des cadreurs réactifs maîtrisant le travail en régie multicaméra avec intercom.",
    requirements: [
      "Maîtrise des caméras type Sony FX6 / FX9 / Blackmagic",
      "Expérience avérée du direct (timing serré, suivi du conducteur)",
      "Capacité à suivre les ordres de cadrage du réalisateur sans hésitation",
    ],
    benefits: [
      "Paiement garanti et immédiat après clôture du live",
      "Prise en charge transport et catering sur site",
      "Accès aux équipements audiovisuels les plus modernes du Togo",
    ],
  },
  {
    id: "technicien-starlink-broadcast",
    title: "Technicien Réseau & Déploiement Starlink Broadcast",
    type: "Emploi & Mission Terrain",
    company: "OCD Live Connectivity",
    location: "Lomé & Mobilité Sous-régionale",
    contractType: "CDD / CDI",
    category: "Audiovisuel & Régie",
    remuneration: "Salaire mensuel attractif + Primes de mission",
    duration: "Contrat temps plein",
    postedDate: "Il y a 3 jours",
    deadline: "30 Novembre 2026",
    badge: "POSTE CLÉ CDI / CDD",
    spots: "2 techniciens",
    description:
      "Responsable de l'installation des kits satellites Starlink sur le terrain, du câblage réseau, de la configuration du bonding 4G/5G et de la garantie d'un flux sans coupure vers nos plateformes de streaming.",
    requirements: [
      "Compétences solides en réseaux IP, adressage et protocoles streaming (RTMP, SRT)",
      "Réactivité extrême face aux imprévus de connexion",
      "Permis de conduire et disponibilité pour déplacements régionaux",
    ],
    benefits: [
      "Équipements et stations informatiques de pointe fournis",
      "Prise en charge intégrale des frais de mission et hébergement",
      "Cadre de travail jeune, dynamique et valorisant",
    ],
  },
  {
    id: "hotes-hotesses-accueil",
    title: "Hôtes & Hôtesses d'Accueil VIP & Protocole Événementiel",
    type: "Emploi & Mission Terrain",
    company: "Partenaire Événements OCD",
    location: "Lomé (Grands Hôtels & Palais des Congrès)",
    contractType: "Missions Ponctuelles",
    category: "Événementiel & Accueil",
    remuneration: "15 000 à 35 000 FCFA / vacation",
    duration: "Selon dates d'événements",
    postedDate: "Cette semaine",
    deadline: "15 Décembre 2026",
    badge: "MISSIONS VIP RÉMUNÉRÉES",
    spots: "15 personnes",
    description:
      "Pour les grands sommets institutionnels, forums économiques et soirées de gala retransmis en direct, nous constituons notre vivier d'accueil pour le protocole, l'orientation des personnalités VIP et l'assistance en salle.",
    requirements: [
      "Excellente élocution, courtoisie et présentation irréprochable",
      "Sens aigu du service, de la discrétion et diplomatie",
      "Bilinguisme Français / Anglais très apprécié",
    ],
    benefits: [
      "Tenues élégantes fournies",
      "Repas et logistique pris en charge",
      "Opportunités de networking de haut niveau",
    ],
  },

  // 4. CASTINGS & APPELS À PROJETS
  {
    id: "casting-chroniqueurs-ocd",
    title: "Grand Casting : Nouveaux Visages & Chroniqueurs Plateaux OCD Live",
    type: "Casting & Appel à Projets",
    company: "House of Challenge & OCD Live",
    location: "Lomé (Studio Plateau OCD)",
    contractType: "Audition Ouverte",
    category: "Communication & Réseaux",
    remuneration: "Cachet par émission + Partage de revenus digitaux",
    duration: "Saison 2026 / 2027",
    postedDate: "Hier",
    deadline: "28 Novembre 2026",
    badge: "CASTING OUVERT",
    spots: "4 chroniqueurs retenus",
    description:
      "Tu as une personnalité unique, de l'humour, de la répartie ou une expertise que tu souhaites partager avec la jeunesse africaine ? Viens auditionner pour animer une chronique hebdomadaire dans nos talk-shows en direct.",
    requirements: [
      "Jeunes de 18 à 35 ans résidant à Lomé ou environs",
      "Envoyer une courte vidéo de présentation (1 min) ou se présenter au studio",
      "Authenticité totale, franc-parler et énergie positive",
    ],
    benefits: [
      "Plateau télévisé 4K et réalisation professionnelle à ta disposition",
      "Exposition immédiate devant notre communauté de plusieurs millions de personnes",
      "Accompagnement par des réalisateurs et producteurs confirmés",
    ],
  },
  {
    id: "tremplin-video-dehors",
    title: "Tremplin Créateurs : Défi Vidéo 'Raconte ton Dehors' #LesOpportunitesCestDehors",
    type: "Casting & Appel à Projets",
    company: "Mouvement Bovan #OCD",
    location: "Togo & Sous-région",
    contractType: "Concours & Dotations",
    category: "Production & Montage",
    remuneration: "Cagnotte de 1 000 000 FCFA + Équipements de tournage",
    duration: "Clôture des soumissions le 15 Décembre",
    postedDate: "Cette semaine",
    deadline: "15 Décembre 2026",
    badge: "TREMPLIN & DOTATIONS",
    spots: "3 lauréats primés",
    description:
      "Réalise une vidéo de 60 à 90 secondes montrant un jeune de ton quartier qui se bat avec dignité dans la rue (artisan, vendeur, mécanicien, couturier, cuisinier). Le jury de Bovan récompensera les récits les plus poignants et inspirants.",
    requirements: [
      "Filmé au smartphone ou à la caméra, sans artifice",
      "Raconter une histoire humaine sincère avec le consentement de la personne",
      "Taguer #LesOpportunitesCestDehors et @BovannYT",
    ],
    benefits: [
      "1er Prix : Kit Caméra 4K + Micro HF sans fil + 500 000 FCFA",
      "Diffusion en prime time sur la chaîne de Bovan (4M)",
      "Intégration directe aux projets audiovisuels d'OCD Live",
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "captation-live",
    slug: "captation-video-live",
    title: "Captation vidéo & live",
    shortDesc:
      "Captation multicaméra haute définition avec régie mobile pour une retransmission dynamique en temps réel.",
    fullDesc:
      "Notre dispositif de captation multicaméra transforme vos événements en véritables expériences télévisuelles. Dotée de caméras cinéma et broadcast 4K, de grues, travelling et liaisons HF sans fil haute performance, notre équipe assure une immersion totale et un cadrage millimétré.",
    iconName: "Camera",
    benefits: [
      "Réalisation dynamique en direct (mélangeur vidéo professionnel)",
      "Qualité d'image 4K HDR et étalonnage des flux en direct",
      "Équipe technique chevronnée (cadreurs, réalisateur, ingénieur vision)",
      "Dispositif mobile s'adaptant à tous types de configurations scéniques",
    ],
    deliverables: [
      "Master vidéo intégral haute définition",
      "Enregistrement isolé (ISO) de chaque caméra",
      "Best-of / Aftermovie monté sous 48h",
    ],
    technologies: [
      "Caméras Sony FX6 / FX9 / Blackmagic URSA",
      "Régie ATEM Constellation 4K",
      "Optiques ciné à grande ouverture",
      "Système intercom sans fil Riedel",
    ],
  },
  {
    id: "production-audiovisuelle",
    slug: "production-audiovisuelle",
    title: "Production audiovisuelle",
    shortDesc:
      "Conception, tournage et post-production de films institutionnels, spots publicitaires et documentaires.",
    fullDesc:
      "De l'écriture du synopsis au montage final avec motion design et mixage sonore immersif, nous racontons votre histoire avec un regard cinématographique percutant qui sublime votre identité de marque.",
    iconName: "Clapperboard",
    benefits: [
      "Scénarisation et direction artistique sur mesure",
      "Éclairage studio sophistiqué et prise de son broadcast",
      "Post-production complète (montage, colorimétrie, sound design)",
      "Formats adaptés aux standards broadcast et aux réseaux sociaux",
    ],
    deliverables: [
      "Films corporate & institutionnels en formats master",
      "Déclinaisons courtes (Reels, TikTok, Shorts 9:16)",
      "Bandes-annonces et teasers promotionnels",
    ],
    technologies: [
      "Étalonnage DaVinci Resolve Studio",
      "Motion design 2D/3D & titrage dynamique",
      "Micros cravates HF Sennheiser / DPA",
    ],
  },
  {
    id: "streaming-diffusion",
    slug: "streaming-diffusion-en-direct",
    title: "Streaming & diffusion en direct",
    shortDesc:
      "Retransmission sécurisée multi-plateforme en direct avec liaisons redondantes satellite & 5G.",
    fullDesc:
      "Diffusez vos conférences, sommets ou lancements de produits auprès d'audiences mondiales sans aucune interruption. Nos valises de streaming intègrent l'agrégation 4G/5G et satellite (bonding multi-opérateurs) pour garantir un flux ininterrompu même en zone à faible connectivité.",
    iconName: "Radio",
    benefits: [
      "Diffusion simultanée (multi-streaming) sur YouTube, LinkedIn, Facebook et CDN privé",
      "Agrégation réseau multi-SIM pour une tolérance de panne zéro",
      "Intégration d'habillage graphique en direct (synthés, sous-titres, logos, score)",
      "Interactivité avec le public (questions en direct, sondages à l'écran)",
    ],
    deliverables: [
      "Lien de flux sécurisé avec mot de passe si restreint",
      "Rapport d'audience et statistiques de visionnage",
      "Replay instantané disponible dès la fin de la diffusion",
    ],
    technologies: [
      "Encodeurs matériels LiveU / Teradek",
      "Connexion sécurisée Starlink & bonding 4G/5G",
      "Serveurs RTMP / SRT ultra-faible latence",
    ],
  },
  {
    id: "evenements-conferences",
    slug: "evenements-et-conferences",
    title: "Événements & conférences",
    shortDesc:
      "Gestion technique audiovisuelle globale pour assemblées générales, sommets internationaux et conventions.",
    fullDesc:
      "Nous prenons en charge l'ensemble de l'écosystème audiovisuel de votre rassemblement : sonorisation de salle, écrans LED géants, retour de scène, traduction simultanée et captation des intervenants en duplex ou en présentiel.",
    iconName: "Calendar",
    benefits: [
      "Interlocuteur unique pour l'image, le son et la diffusion",
      "Expérience fluide pour les intervenants en présentiel et distanciel",
      "Coordination technique de régie et conducteur d'événement chronométré",
      "Respect strict des protocoles institutionnels et diplomatiques",
    ],
    deliverables: [
      "Enregistrements individuels de chaque prise de parole",
      "Synthèse vidéo quotidienne (daily recap)",
      "Pack d'extraits vidéo pour relations presse",
    ],
    technologies: [
      "Mur LED haute résolution P2.6",
      "Système de sonorisation numérique line array",
      "Cabines de traduction simultanée",
    ],
  },
  {
    id: "creation-de-contenus",
    slug: "creation-de-contenus",
    title: "Création de contenus & Studio",
    shortDesc:
      "Production de podcasts vidéo, formats interviews plateau et capsules engageantes pour vos canaux digitaux.",
    fullDesc:
      "Notre plateau studio moderne accueille vos podcasts vidéo, vos talk-shows et vos séries d'interviews. Profitez d'un décor broadcast personnalisable, d'une acoustique traitée et d'un éclairage valorisant pour faire décoller votre audience.",
    iconName: "Film",
    benefits: [
      "Studio prêt à tourner avec décor professionnel personnalisable",
      "Formule clé en main : enregistrement, montage et miniatures",
      "Accompagnement éditorial pour dynamiser le rythme de vos formats",
      "Extraction automatique de formats courts ultra-viraux",
    ],
    deliverables: [
      "Épisodes montés en haute définition avec génériques",
      "Clips courts sous-titrés pour LinkedIn, Instagram et TikTok",
      "Piste audio masterisée pour Spotify et Apple Podcasts",
    ],
    technologies: [
      "Micros Shure SM7B avec traitement DSP",
      "Éclairage studio Aputure avec dômes de diffusion",
      "Plateau avec écran de fond personnalisable",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "sommet-afrique-finance",
    slug: "sommet-afrique-finance-2026",
    title: "Sommet Afrique & Finance 2026",
    category: "Conference",
    client: "Banque Panafricaine de Développement",
    year: "2026",
    summary:
      "Captation multicaméra 6 flux, retransmission hybride bilingue et sonorisation pour 1 200 délégués.",
    description:
      "OCD Live a été missionné pour orchestrer l'intégralité de la couverture audiovisuelle du Sommet Afrique Finance. Avec plus de 1 200 participants sur place et 25 000 spectateurs en ligne, notre dispositif a garanti une retransmission bilingue sans faille.",
    image: "/images/studio-hero.png",
    metrics: [
      { label: "Spectateurs en direct", value: "28 500+" },
      { label: "Caméras déployées", value: "6 flux 4K" },
      { label: "Délégués en salle", value: "1 200+" },
      { label: "Retransmission live", value: "100% bilingue" },
    ],
    deliverables: [
      "Flux live bilingue diffusé en simultané",
      "42 capsules thématiques extraites des panels",
      "Aftermovie officiel projeté lors du dîner de clôture",
    ],
    techSetup: [
      "Régie mobile 8 entrées 4K",
      "Starlink Business + Bonding 5G",
      "Interprétation simultanée sans fil",
    ],
  },
  {
    id: "plateau-talk-tech-africa",
    slug: "plateau-talk-tech-africa",
    title: "Tech Horizon Africa — Saison 2",
    category: "Plateau",
    client: "Africa Innovate Media",
    year: "2026",
    summary:
      "Série de 12 épisodes enregistrés dans le studio OCD Live avec habillage graphique interactif.",
    description:
      "Dans notre studio à la scénographie contemporaine valorisant les contours du continent africain, nous avons accueilli la production de la série Tech Horizon Africa. Un workflow rapide a permis la mise en ligne des épisodes en moins de 48h après chaque tournage.",
    image: "/images/studio-light.png",
    metrics: [
      { label: "Épisodes produits", value: "12 épisodes" },
      { label: "Vues cumulées", value: "450 000+" },
      { label: "Délai de livraison", value: "48h / master" },
      { label: "Caméras robotisées", value: "3 tourelles 4K" },
    ],
    deliverables: [
      "12 épisodes de 35 minutes au format 16:9",
      "60 extraits au format vertical 9:16 avec sous-titres dynamiques",
      "Packaging graphique complet (intro, outro, synthés)",
    ],
    techSetup: [
      "3 caméras tourelles PTZ 4K robotisées",
      "Micros Shure SM7B avec préamplis de broadcast",
      "Éclairage zénithal et contre-jours d'ambiance",
    ],
  },
  {
    id: "forum-energies-durables",
    slug: "forum-international-energies-durables",
    title: "Forum International des Énergies",
    category: "Corporate",
    client: "Consortium Énergétique Africain",
    year: "2025",
    summary:
      "Captation plénière, régie mobile pour 3 salles en simultané et production d'un documentaire récapitulatif.",
    description:
      "Couverture technique complète sur 3 jours consécutifs, incluant la retransmission sur écran géant extérieur et la gestion de 18 duplex internationaux en visioconférence.",
    image: "/images/hero-cameraman.png",
    metrics: [
      { label: "Salles en parallèle", value: "3 régies" },
      { label: "Audience globale", value: "42 000+" },
      { label: "Intervenants en duplex", value: "18 duplex" },
      { label: "Disponibilité du flux", value: "99.98% uptime" },
    ],
    deliverables: [
      "Captation intégrale des 3 salles de conférence",
      "Documentaire institutionnel de 15 minutes",
      "Vignettes instantanées pour les réseaux sociaux",
    ],
    techSetup: [
      "Ponts réseau fibre optique dédiés",
      "Grue de 7 mètres avec tête motorisée",
      "Mélangeur vidéo avec incrustation PiP",
    ],
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "art-1",
    slug: "reussir-la-captation-live-de-votre-conference",
    title: "5 clés indispensables pour réussir la captation en direct de votre événement",
    category: "Conseils techniques",
    date: "4 Novembre 2026",
    readTime: "4 min de lecture",
    excerpt:
      "Du repérage technique de la salle à la redondance de la connexion internet, découvrez les règles d'or pour un streaming sans accroc.",
    content:
      "Organiser un événement en direct ne laisse aucune place à l'improvisation. La captation multicaméra exige une préparation minutieuse : l'acoustique de la salle, l'éclairage de la tribune, l'intégration des présentations PowerPoint et surtout la redondance du réseau de transmission. Chez OCD Live, nous combinons liaisons satellitaires et agrégation 5G pour éliminer tout risque de coupure.",
    image: "/images/studio-hero.png",
  },
  {
    id: "art-2",
    slug: "inauguration-du-nouveau-plateau-ocd-live",
    title: "Découvrez notre nouveau plateau studio moderne dédié aux créateurs et entreprises",
    category: "Actualités OCD",
    date: "28 Octobre 2026",
    readTime: "3 min de lecture",
    excerpt:
      "Pensé pour les podcasts vidéo, talk-shows et interviews corporate, notre nouveau studio allie acoustique feutrée et identité visuelle affirmée.",
    content:
      "OCD Live franchit une nouvelle étape avec l'ouverture de son studio de pointe. Arborant une scénographie soignée intégrant un motif continental rétro-éclairé et des équipements de prise de vue 4K ultra-précis, ce lieu est taillé pour produire des contenus de niveau international.",
    image: "/images/studio-light.png",
  },
];

export const BOVAN_VIDEOS: BovanVideoItem[] = [
  {
    id: "bovan-main",
    title: "Tu peux vendre sur un compte de 4 millions d'abonnés",
    duration: "Vidéo Bovan · 4M Abonnés",
    views: "4.2M abonnés",
    badge: "🔥 VENDRE EN DIRECT · AUDIENCE DE 4 MILLIONS",
    thumbnail: "/images/videos/bovan-video-1-4m.jpg",
    description:
      "Vendez vos vêtements, cosmétiques, créations culinaires et services en direct ou diffusez votre vidéo promotionnelle sur les comptes certifiés de Bovan et House of Challenge cumulant plus de 4 millions d'abonnés.",
    youtubeUrl: "https://www.facebook.com/share/r/1cPEQC9cbn/",
    isMain: true,
  },
  {
    id: "bovan-v2",
    title: "Seulement pour les OCD | Bovann",
    duration: "Facebook Reel",
    views: "45 K vues · 3,7 K réactions",
    badge: "MOTIVATION & TERRAIN",
    thumbnail: "/images/videos/bovan-video-2-ocd.jpg",
    description:
      "Conseils stratégiques et motivation de terrain par Bovan pour tous ceux qui se lèvent chaque matin pour créer leur propre opportunité.",
    youtubeUrl: "https://www.facebook.com/reel/1439435511044757/",
  },
  {
    id: "bovan-v3",
    title: "J'ai attrapé un OCD pour une surprise | Jojo le Comédien",
    duration: "Facebook Reel",
    views: "264 K vues · 23 K réactions",
    badge: "JOJO LE COMÉDIEN & BOVAN",
    thumbnail: "/images/videos/bovan-video-3-jojo.jpg",
    description:
      "Immersion en direct avec Jojo le Comédien et Bovan au cœur de l'action : force du mouvement, solidarité et surprise pour la jeunesse.",
    youtubeUrl: "https://www.facebook.com/reel/1689606752582117/",
  },
];

export const YOUTH_PHOTOS: YouthPhotoItem[] = [
  {
    id: "youth-1",
    title: "Safiou Yaya Touré — + de 59 Km ce matin",
    role: "« Rienneux lève-toi, les Opportunités C'est Dehors »",
    location: "Lomé, Togo",
    hashtag: "#LesOpportunitesCestDehors #CourageAuxOCD",
    image: "/images/youth/safiou-yaya-toure.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1F1juknFmB/",
  },
  {
    id: "youth-2",
    title: "Jojo le Comédien & l'énergie OCD",
    role: "Humour, terrain & création de contenu pour la jeunesse",
    location: "Lomé, Togo",
    hashtag: "#JojoLeComedien #OCD",
    image: "/images/youth/jojo-le-comedien-ocd.jpg",
    facebookUrl: "https://www.facebook.com/jojolecomedienOfficiel/posts/pfbid02cjumcZ9bnSjv66omqxF3omxGHr31mRniJwtbdBLEw52xQPsGcWnsweAWsAY9GcL9l",
  },
  {
    id: "youth-3",
    title: "Le travail d'un OCD ❤️",
    role: "Bovann et la jeunesse togolaise en plein labeur",
    location: "Lomé, Togo",
    hashtag: "#LeTravailDunOCD #Terrain",
    image: "/images/youth/bovann-travail-ocd.jpg",
    facebookUrl: "https://www.facebook.com/share/p/1Cy3EZg5Fg/",
  },
  {
    id: "youth-4",
    title: "La jeune qui se bat pour les opportunités",
    role: "OCD à vie 🚀 — Commerce, courage & ambition quotidienne",
    location: "Lomé, Togo",
    hashtag: "#OCDaVie #FemmeDeTerrain",
    image: "/images/youth/jeune-fille-ocd.jpg",
    facebookUrl: "https://www.facebook.com/share/r/1CEivBV6n2/",
    isVideo: true,
  },
];

export interface BusinessActivityItem {
  id: string;
  label: string;
  icon: string;
  badge: string;
  description: string;
  examples: string;
}

export const BUSINESS_ACTIVITIES: BusinessActivityItem[] = [
  {
    id: "mode_vetements",
    label: "Vente de Vêtements & Mode",
    icon: "👗",
    badge: "Mode & Prêt-à-porter",
    description: "Présentation de collections, essayages en direct, promotions et ventes flash.",
    examples: "Boutiques de vêtements, robes, costumes, friperie chic, chaussures & accessoires",
  },
  {
    id: "cosmetique_beaute",
    label: "Produits Cosmétiques & Beauté",
    icon: "💄",
    badge: "Beauté & Soins",
    description: "Démonstrations de produits, soins capillaires, maquillage et routines bien-être.",
    examples: "Gammes de soins bio, crèmes corporelles, sérums, perruques, maquillage pro",
  },
  {
    id: "restauration_food",
    label: "Street Food, Restauration & Traiteur",
    icon: "🍔",
    badge: "Food & Boissons",
    description: "Mise en avant culinaire, inauguration de restaurant, dégustations et catering.",
    examples: "Grillades, fast-food, pâtisserie, traiteur événementiel, jus naturels locaux",
  },
  {
    id: "tech_electronique",
    label: "High-Tech, Téléphonie & Électronique",
    icon: "📱",
    badge: "Tech & Gadgets",
    description: "Unboxing, tests d'appareils en direct, comparatifs et promotions flash.",
    examples: "Smartphones, ordinateurs portables, écouteurs, montres connectées, gaming",
  },
  {
    id: "formation_coaching",
    label: "Formation, Coaching & Masterclass",
    icon: "🎓",
    badge: "Savoir & Éducation",
    description: "Masterclasses en direct, ateliers interactifs, webinaires et lancements d'offres.",
    examples: "Formateurs, conférenciers, coachs business, experts finance, écoles de formation",
  },
  {
    id: "evenement_culte",
    label: "Événementiel, Culte & Célébration",
    icon: "⛪",
    badge: "Culte & Célébration",
    description: "Retransmission de services religieux, concerts live, mariages et galas d'entreprise.",
    examples: "Églises, chorales, célébrations privées, remises de prix, anniversaires",
  },
  {
    id: "artisanat_deco",
    label: "Artisanat, Mobilier & Décoration",
    icon: "🛠️",
    badge: "Artisanat & Déco",
    description: "Savoir-faire togolais, créations d'art, mobilier et décoration d'intérieur.",
    examples: "Menuiserie d'art, décoration d'espace, poterie, toiles et créations artisanales",
  },
  {
    id: "autre",
    label: "Autre Activité Commerciale",
    icon: "📦",
    badge: "Sur mesure",
    description: "Toute autre activité commerciale ou prestation de terrain nécessitant une régie live.",
    examples: "Immobilier, services financiers, concessions automobiles, commerce général",
  },
];

export interface PaymentMethodItem {
  id: string;
  label: string;
  badge: string;
  tagline: string;
  icon: string;
  operator: string;
  accountNumber: string;
  instructions: string;
  color: string;
}

export const PAYMENT_METHODS: PaymentMethodItem[] = [
  {
    id: "tmoney",
    label: "T-Money (Togocom)",
    badge: "Instantané Togo",
    tagline: "Le moyen de paiement mobile le plus rapide et populaire au Togo",
    icon: "🟢",
    operator: "Togocom",
    accountNumber: "+228 90 00 00 00",
    instructions: "Effectuez votre transfert T-Money au numéro officiel OCD Live (+228 90 00 00 00). Validation instantanée par SMS & WhatsApp.",
    color: "#00a859",
  },
  {
    id: "moov_money",
    label: "Moov Money (Flooz)",
    badge: "Instantané Togo",
    tagline: "Paiement direct sécurisé via Moov Africa Togo",
    icon: "🔵",
    operator: "Moov Africa",
    accountNumber: "+228 99 00 00 00",
    instructions: "Composez le code Flooz Moov Money vers le compte officiel OCD Live (+228 99 00 00 00) pour bloquer votre créneau.",
    color: "#0055b8",
  },
  {
    id: "carte_bancaire",
    label: "Carte Bancaire (Visa / Mastercard)",
    badge: "Paiement Sécurisé",
    tagline: "Règlement en ligne 3D-Secure avec reçu officiel instantané",
    icon: "💳",
    operator: "Visa / Mastercard / GIM-UEMOA",
    accountNumber: "Lien de paiement sécurisé",
    instructions: "Un lien de paiement sécurisé vous sera transmis par email et WhatsApp dès confirmation du planning par la régie.",
    color: "#f36b0b",
  },
  {
    id: "especes_studio",
    label: "Espèces / Acompte au Studio ou sur Place",
    badge: "Sur Rendez-vous",
    tagline: "Règlement physique à nos bureaux ou à l'arrivée de l'équipe",
    icon: "🏢",
    operator: "Comptabilité OCD Live",
    accountNumber: "Studio OCD Live, Lomé",
    instructions: "Réglez directement à notre studio à Lomé ou convenez d'un paiement lors de l'installation de l'équipe dans vos locaux.",
    color: "#e5e2de",
  },
];
