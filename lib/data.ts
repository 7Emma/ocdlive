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

export interface OpportunityItem {
  id: string;
  title: string;
  company: string;
  location: string;
  contractType: "Freelance" | "CDD / CDI" | "Stage" | "Casting / Tournage";
  category: "Audiovisuel & Régie" | "Production & Montage" | "Événementiel & Accueil" | "Communication & Réseaux";
  remuneration: string;
  postedDate: string;
  deadline: string;
  description: string;
  requirements: string[];
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
  phone: "+225 07 00 00 00 00",
  phoneLabel: "+225 07 00 00 00 00 [À VALIDER]",
  address: "Studio OCD Live, Abidjan, Côte d'Ivoire",
  socials: {
    youtube: "https://youtube.com/@ocdlive",
    facebook: "https://facebook.com/ocdlive",
    instagram: "https://instagram.com/ocdlive",
    linkedin: "https://linkedin.com/company/ocdlive",
    twitter: "https://x.com/ocdlive",
  },
  dg: {
    name: "Bovan",
    role: "Directeur Général d'OCD Live",
    photo: "/images/bovan-dg.jpg",
    quote:
      "Nous n'avons pas créé OCD Live pour faire de la vidéo de plus. Nous l'avons créé pour que la jeunesse et les bâtisseurs de ce continent arrêtent d'attendre dans leur chambre et prennent la parole dehors. Quand vous sortez, nous mettons nos caméras et nos régies au service de votre voix.",
    quoteStatus: "[À VALIDER PAR BOVAN]",
  },
  capacity: {
    maxLivesPerDay: 4,
    note: "Capacité limitée à 4 lives par jour pour garantir une exigence broadcast maximale.",
  },
};

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
      "Duplex multi-villes (Abidjan, Dakar, Paris, Londres) avec retour oreillette IFB et latence quasi nulle",
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
    id: "pack-1h30",
    slug: "pack-1h30",
    title: "Pack Découverte 1h30",
    price: "15 000 FCFA",
    rawPrice: 15000,
    period: "Session studio",
    description:
      "Idéal pour enregistrer une interview percutante, une capsule de présentation ou tester le potentiel de notre plateau.",
    included: [
      "1h30 d'enregistrement en plateau studio",
      "Éclairage broadcast et micros professionnels",
      "Remise des rushs bruts en haute définition",
      "Assistance d'un technicien son et image",
    ],
    targetAudience: "Créateurs de contenus, indépendants, porteurs de projets",
    note: "Détails techniques communiqués à la demande [À VALIDER]",
  },
  {
    id: "pack-4h",
    slug: "pack-4h",
    title: "Pack Demi-Journée 4h",
    price: "40 000 FCFA",
    rawPrice: 40000,
    period: "Session 4h",
    isPopular: true,
    description:
      "La formule préférée pour enregistrer plusieurs épisodes de podcast, une masterclass ou une allocution institutionnelle soignée.",
    included: [
      "4h d'utilisation complète du studio",
      "Dispositif multicaméra HD / 4K",
      "Prise de son studio Shure SM7B avec traitement DSP",
      "Habillage visuel personnalisé sur les écrans du plateau",
      "Exportation des fichiers masters sous 48h",
    ],
    targetAudience: "Entreprises, podcasts vidéo, formateurs, animateurs",
    note: "Créneaux sur réservation préalable [À VALIDER]",
  },
  {
    id: "live-direct-4h",
    slug: "live-direct-4h",
    title: "Live Direct 4h Broadcast",
    price: "100 000 FCFA",
    rawPrice: 100000,
    period: "Prestation live",
    description:
      "Une régie de retransmission complète pour couvrir votre conférence, webinaire ou concert en streaming direct haute disponibilité.",
    included: [
      "4h de diffusion en direct sans coupure",
      "Régie mobile multicaméra avec réalisation en direct",
      "Diffusion simultanée sur vos canaux (YouTube, Facebook, LinkedIn)",
      "Connexion sécurisée avec redondance multi-SIM",
      "Replay intégral disponible immédiatement",
    ],
    targetAudience: "Conférences, sommets, cérémonies, événements culturels",
    note: "Présentiel ou duplex à distance [À VALIDER]",
  },
  {
    id: "diffusion-bovan",
    slug: "diffusion-bovan",
    title: "Diffusion sur la Page de Bovan",
    price: "100 000 FCFA",
    rawPrice: 100000,
    period: "Campagne vidéo",
    description:
      "Bénéficiez de la notoriété et de l'engagement de la communauté de Bovan pour faire rayonner votre activité ou votre message.",
    included: [
      "Publication de votre vidéo validée sur la page officielle",
      "Mise en avant auprès d'une audience active et qualifiée",
      "Relais en story avec mention de votre projet",
      "Rapport de performance et statistiques de portée",
    ],
    targetAudience: "Marques, entrepreneurs, événements en quête d'impact",
    note: "Durée et conditions éditoriales [À VALIDER PAR BOVAN]",
  },
  {
    id: "pack-hoc-bovan",
    slug: "pack-hoc-bovan",
    title: "Pack House of Challenge & Bovan",
    price: "Tarif sur demande",
    rawPrice: 0,
    period: "Double diffusion",
    description:
      "Puissance de feu maximale : diffusion croisée sur la page House of Challenge et sur la page de Bovan.",
    included: [
      "Diffusion synchronisée sur deux communautés majeures",
      "Visibilité décuplée auprès des jeunes et des décideurs",
      "Stratégie de relais et d'engagement",
    ],
    targetAudience: "Lancements de produits d'envergure, grandes campagnes",
    note: "Tarif et plateformes exactes [À VALIDER]",
  },
  {
    id: "diffusion-4m",
    slug: "diffusion-4m",
    title: "Relais Réseau 4 Millions d'Abonnés",
    price: "Tarif sur demande",
    rawPrice: 0,
    period: "Portée massive",
    description:
      "Touchez une audience panafricaine colossale grâce à notre réseau partenaire de pages totalisant plus de 4 millions d'abonnés.",
    included: [
      "Exposition massive auprès de 4M+ de followers",
      "Validation éditoriale préalable",
      "Mesure d'audience certifiée",
    ],
    targetAudience: "Institutions, multinationales, artistes de premier plan",
    note: "Nom de la page et métriques exactes [À VALIDER]",
  },
];

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: "cadreur-live-abidjan",
    title: "Cadreur / Opérateur Caméra Broadcast",
    company: "OCD Live Productions",
    location: "Abidjan (Plateau / Cocody)",
    contractType: "Freelance",
    category: "Audiovisuel & Régie",
    remuneration: "Selon barème de pige journalière",
    postedDate: "Hier",
    deadline: "20 Novembre 2026",
    description:
      "Dans le cadre du renforcement de nos équipes de captation sur les prochains sommets et plateaux TV, nous recherchons des cadreurs réactifs, maîtrisant le travail en multicaméra avec intercom.",
    requirements: [
      "Maîtrise des caméras type Sony FX6 / FX9 / Blackmagic",
      "Expérience avérée du direct (timing serré, suivi du conducteur)",
      "Capacité à suivre les ordres de cadrage du réalisateur sans hésitation",
    ],
  },
  {
    id: "monteur-reels-talkshow",
    title: "Monteur Vidéo Rythmé & Formats Courts (Reels / TikTok)",
    company: "OCD Live Media",
    location: "Abidjan / Télétravail partiel",
    contractType: "Freelance",
    category: "Production & Montage",
    remuneration: "Rémunération par capsule livrée",
    postedDate: "Il y a 3 jours",
    deadline: "25 Novembre 2026",
    description:
      "Nous recherchons un monteur talentueux pour transformer nos enregistrements d'émissions et de podcasts en extraits viraux ultra-dynamiques avec sous-titres animés et sound design percutant.",
    requirements: [
      "Maîtrise de Premiere Pro ou DaVinci Resolve",
      "Excellente culture des codes visuels TikTok / Instagram / Shorts",
      "Capacité à extraire la punchline et le moment fort d'une vidéo d'1 heure",
    ],
  },
  {
    id: "assistant-regie-evenement",
    title: "Assistant Régie Générale & Câblage Plateau",
    company: "OCD Live Terrain",
    location: "Abidjan & Déplacements intérieurs",
    contractType: "CDD / CDI",
    category: "Audiovisuel & Régie",
    remuneration: "Salaire selon profil [À VALIDER]",
    postedDate: "Il y a 5 jours",
    deadline: "30 Novembre 2026",
    description:
      "Le terrain a besoin de bras et d'énergie. En charge de l'installation, du passage de câbles SDI/HDMI/Fibre, de la mise en place des retours et du rangement du matériel après les lives.",
    requirements: [
      "Ponctualité irréprochable et sens de la discipline",
      "Rigueur dans le rangement et le soin du matériel sensible",
      "Motivation totale à apprendre le métier aux côtés de techniciens seniors",
    ],
  },
  {
    id: "hotes-hotesses-accueil",
    title: "Hôtes & Hôtesses d'Accueil Événementiel",
    company: "Partenaire Événements OCD",
    location: "Abidjan",
    contractType: "Casting / Tournage",
    category: "Événementiel & Accueil",
    remuneration: "Rémunération forfaitaire par événement",
    postedDate: "Cette semaine",
    deadline: "15 Décembre 2026",
    description:
      "Pour les grands sommets et conférences retransmis en direct, nous constituons notre vivier d'accueil pour l'orientation des intervenants VIP, la distribution des badges et l'assistance en salle.",
    requirements: [
      "Excellente élocution et présentation soignée",
      "Sens aigu du service et diplomatie",
      "Bilinguisme Français/Anglais apprécié",
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
    title: "Pourquoi ta chambre ne va jamais te nourrir : Sortir ou subir",
    duration: "16:42",
    views: "640K vues",
    badge: "VIDÉO MAÎTRESSE · MANIFESTE DU TERRAIN",
    thumbnail: "/images/bovan-dg.jpg",
    description:
      "Dans cette prise de parole percutante, Bovan s'adresse les yeux dans les yeux à la jeunesse : l'attente passive et les diplômes au placard ne paient aucune facture. Découvrez la philosophie brute d'OCD — Opportunités C'est Dehors.",
    youtubeUrl: "https://youtube.com/@ocdlive",
    isMain: true,
  },
  {
    id: "bovan-v2",
    title: "Les 3 lois du dehors : Comment un jeune sans capital peut s'imposer",
    duration: "12:15",
    views: "420K vues",
    badge: "CONSEILS & ACTION",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=85",
    description:
      "Conseils stratégiques pour débuter avec zéro franc, construire sa crédibilité sur le terrain et forcer les portes du succès sans attendre la permission de personne.",
    youtubeUrl: "https://youtube.com/@ocdlive",
  },
  {
    id: "bovan-v3",
    title: "Immersion Régie OCD Live : On filme les vrais bâtisseurs de l'Afrique",
    duration: "09:30",
    views: "290K vues",
    badge: "REPORTAGE EN DIRECT",
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&auto=format&fit=crop&q=85",
    description:
      "Caméras 4K et régies mobiles déployées sur les marchés, les chantiers et les sommets : la démonstration de force technique au service des talents de chez nous.",
    youtubeUrl: "https://youtube.com/@ocdlive",
  },
];

export const YOUTH_PHOTOS: YouthPhotoItem[] = [
  {
    id: "youth-1",
    title: "Artisans & Monteurs de Structures Scéniques",
    role: "Scénographie & Régie Terrain",
    location: "Koumassi, Abidjan",
    hashtag: "#UnOCDNeLacheRien",
    image: "/images/studio-team.jpg",
  },
  {
    id: "youth-2",
    title: "Cadreurs & Opérateurs Caméra Broadcast",
    role: "Prise de Vue & Réalisation Direct",
    location: "Plateau, Abidjan",
    hashtag: "#GénérationOCD",
    image: "/images/hero-cameraman.png",
  },
  {
    id: "youth-3",
    title: "Créatrices & Entrepreneures Street Food / Catering",
    role: "Entrepreneuriat Culinaire de Terrain",
    location: "Cocody, Abidjan",
    hashtag: "#LesOpportunitesCestDehors",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85",
  },
  {
    id: "youth-4",
    title: "Jeunes Bâtisseurs & Techniciens Plateau",
    role: "Installation Régie & Lumière Studio",
    location: "Marcory, Abidjan",
    hashtag: "#OpportunitésCestDehors",
    image: "/images/studio-brand.png",
  },
];
