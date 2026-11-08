import fs from "fs/promises";
import path from "path";
import {
  DAILY_LIVE_SLOTS,
  OPPORTUNITIES_DATA,
  PROJECTS_DATA,
  ARTICLES_DATA,
  BOVAN_VIDEOS,
  YOUTH_PHOTOS,
  COMPANY_INFO,
  type LiveSlot,
  type OpportunityItem,
  type ProjectItem,
  type ArticleItem,
  type BovanVideoItem,
  type YouthPhotoItem,
} from "./data";

export type {
  LiveSlot,
  OpportunityItem,
  ProjectItem,
  ArticleItem,
  BovanVideoItem,
  YouthPhotoItem,
};

export interface LiveBroadcastState {
  isLive: boolean;
  isScheduled: boolean;
  streamTitle: string;
  platform: "youtube" | "tiktok" | "facebook" | "twitch" | "linkedin" | "multistream";
  streamUrl: string;
  viewersCount: number;
  scheduledTime?: string;
  channelName: string;
}

export type ReservationStatus =
  | "NOUVEAU"
  | "DEVIS_ENVOYE"
  | "CONFIRME"
  | "TERMINE"
  | "ANNULE";

export interface ReservationItem {
  id: string;
  ref: string;
  fullName: string;
  organization?: string;
  email: string;
  phone: string;
  selectedOffer: string;
  liveFormat: string;
  eventDate: string;
  selectedSlot: string;
  eventLocation: string;
  message: string;
  status: ReservationStatus;
  budgetEstimated?: number;
  assignedSlotLabel?: string;
  internalNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApplicantItem {
  id: string;
  opportunityId: string;
  opportunityRole: string;
  fullName: string;
  email: string;
  phone: string;
  portfolioUrl?: string;
  motivation: string;
  status: "NOUVEAU" | "ENTRETIEN" | "RETENU" | "REFUSE";
  createdAt: string;
}

export interface AdminStoreData {
  liveBroadcast: LiveBroadcastState;
  dailySlots: LiveSlot[];
  reservations: ReservationItem[];
  opportunities: OpportunityItem[];
  applicants: ApplicantItem[];
  projects: ProjectItem[];
  articles: ArticleItem[];
  bovanVideos: BovanVideoItem[];
  youthPhotos: YouthPhotoItem[];
  settings: {
    companyName: string;
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    maxLivesPerDay: number;
    baseHourlyRateFcfa: number;
  };
}

const STORE_PATH = path.join(process.cwd(), "data", "admin-store.json");

// Initial mock reservations for demo & immediate testing
const INITIAL_RESERVATIONS: ReservationItem[] = [
  {
    id: "res-001",
    ref: "OCD-842910",
    fullName: "Kouamé Jean-Marc",
    organization: "AfriqTech Summit 2026",
    email: "contact@afriqtech.org",
    phone: "+225 07 48 92 10 33",
    selectedOffer: "pack-journee",
    liveFormat: "live-presentiel",
    eventDate: "2026-11-15",
    selectedSlot: "slot-2",
    assignedSlotLabel: "11h30 - 14h30",
    eventLocation: "Hôtel Ivoire, Cocody Abidjan",
    message: "Captation live bilingue français/anglais pour 4 panels et retransmission simultanée sur YouTube et LinkedIn. Besoin du Starlink et d'un Aftermovie express.",
    status: "CONFIRME",
    budgetEstimated: 1500000,
    internalNotes: "Acompte 50% reçu. Équipe régie affectée : Marc (Réalisateur) + 3 cadreurs.",
    createdAt: "2026-11-06T10:14:00Z",
    updatedAt: "2026-11-07T14:30:00Z",
  },
  {
    id: "res-002",
    ref: "OCD-913402",
    fullName: "Aïcha Traoré",
    organization: "Fondation Bâtir Demain",
    email: "aicha.traore@batirdemain.ci",
    phone: "+225 05 88 12 44 90",
    selectedOffer: "pack-standard",
    liveFormat: "live-talkshow",
    eventDate: "2026-11-18",
    selectedSlot: "slot-3",
    assignedSlotLabel: "15h00 - 18h00",
    eventLocation: "Plateau Studio OCD Live Marcory",
    message: "Talk-show interactif avec 3 intervenants sur le mouvement des jeunes entrepreneurs. Besoin de prompteur et modération de chat en direct.",
    status: "NOUVEAU",
    budgetEstimated: 650000,
    internalNotes: "Nouvelle demande reçue via le site. À rappeler sur WhatsApp.",
    createdAt: "2026-11-08T09:20:00Z",
    updatedAt: "2026-11-08T09:20:00Z",
  },
  {
    id: "res-003",
    ref: "OCD-782109",
    fullName: "Didier Koffi",
    organization: "Label Babi Groove",
    email: "didier@babigroove.com",
    phone: "+225 01 02 43 89 12",
    selectedOffer: "pack-starter",
    liveFormat: "live-presentiel",
    eventDate: "2026-11-20",
    selectedSlot: "slot-4",
    assignedSlotLabel: "19h00 - 22h00",
    eventLocation: "Espace Canal aux Bois, Treichville",
    message: "Concert acoustique en live privé sur YouTube membre. Besoin de 3 caméras et enregistrement son multipiste.",
    status: "DEVIS_ENVOYE",
    budgetEstimated: 350000,
    internalNotes: "Devis envoyé par email. En attente de confirmation du client.",
    createdAt: "2026-11-07T16:45:00Z",
    updatedAt: "2026-11-08T11:00:00Z",
  },
];

// Initial mock candidates from youth movement
const INITIAL_APPLICANTS: ApplicantItem[] = [
  {
    id: "app-001",
    opportunityId: "opp-01",
    opportunityRole: "Cadreur / Opérateur Caméra Mobile",
    fullName: "Yao Boris",
    email: "yao.boris.media@gmail.com",
    phone: "+225 07 11 22 33 44",
    portfolioUrl: "https://instagram.com/boris_cameraman",
    motivation: "Je suis le mouvement #OCD depuis le début avec Bovan. J'ai 3 ans d'expérience sur Sony FX3 et Ronin RS3. Je veux aller sur le terrain avec vous !",
    status: "ENTRETIEN",
    createdAt: "2026-11-07T14:10:00Z",
  },
  {
    id: "app-002",
    opportunityId: "opp-02",
    opportunityRole: "Technicien Régie Streaming & VMix",
    fullName: "Aminata Koné",
    email: "aminata.kone99@yahoo.fr",
    phone: "+225 05 99 88 77 66",
    portfolioUrl: "https://github.com/aminata-stream",
    motivation: "Passionnée de diffusion web et réseaux IP (SRT, RTMP, NDI). J'ai configuré plusieurs régies hybrides à Abidjan.",
    status: "NOUVEAU",
    createdAt: "2026-11-08T08:30:00Z",
  },
];

function getDefaultStore(): AdminStoreData {
  return {
    liveBroadcast: {
      isLive: true,
      isScheduled: false,
      streamTitle: "Direct Régie OCD Live · Plateau Talk-Show #LesOpportunitesCestDehors",
      platform: "youtube",
      streamUrl: "https://www.youtube.com/@BovannYT/live",
      viewersCount: 1420,
      scheduledTime: "Tous les soirs à 19h00 GMT",
      channelName: "@BovannYT",
    },
    dailySlots: DAILY_LIVE_SLOTS,
    reservations: INITIAL_RESERVATIONS,
    opportunities: OPPORTUNITIES_DATA,
    applicants: INITIAL_APPLICANTS,
    projects: PROJECTS_DATA,
    articles: ARTICLES_DATA,
    bovanVideos: BOVAN_VIDEOS,
    youthPhotos: YOUTH_PHOTOS,
    settings: {
      companyName: COMPANY_INFO.name,
      phone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      whatsapp: COMPANY_INFO.phone,
      address: COMPANY_INFO.address,
      maxLivesPerDay: 4,
      baseHourlyRateFcfa: 150000,
    },
  };
}

export async function getAdminStore(): Promise<AdminStoreData> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf-8");
    return JSON.parse(raw) as AdminStoreData;
  } catch {
    const initial = getDefaultStore();
    try {
      await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
      await fs.writeFile(STORE_PATH, JSON.stringify(initial, null, 2), "utf-8");
    } catch (writeErr) {
      console.error("Could not write default store to disk:", writeErr);
    }
    return initial;
  }
}

export async function saveAdminStore(data: AdminStoreData): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

/* =========================================================================
 * HELPER OPERATIONS
 * ========================================================================= */

export async function getLiveBroadcast(): Promise<LiveBroadcastState> {
  const store = await getAdminStore();
  return store.liveBroadcast;
}

export async function updateLiveBroadcast(
  patch: Partial<LiveBroadcastState>
): Promise<LiveBroadcastState> {
  const store = await getAdminStore();
  store.liveBroadcast = { ...store.liveBroadcast, ...patch };
  await saveAdminStore(store);
  return store.liveBroadcast;
}

export async function getReservations(): Promise<ReservationItem[]> {
  const store = await getAdminStore();
  return store.reservations;
}

export async function addReservation(
  item: Omit<ReservationItem, "id" | "ref" | "status" | "createdAt" | "updatedAt">
): Promise<ReservationItem> {
  const store = await getAdminStore();
  const ref = `OCD-${Date.now().toString().slice(-6)}`;
  const newItem: ReservationItem = {
    ...item,
    id: `res-${Date.now()}`,
    ref,
    status: "NOUVEAU",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  store.reservations.unshift(newItem);
  await saveAdminStore(store);
  return newItem;
}

export async function updateReservationStatus(
  id: string,
  status: ReservationStatus,
  internalNotes?: string
): Promise<ReservationItem | null> {
  const store = await getAdminStore();
  const res = store.reservations.find((r) => r.id === id);
  if (!res) return null;
  res.status = status;
  if (internalNotes !== undefined) res.internalNotes = internalNotes;
  res.updatedAt = new Date().toISOString();
  await saveAdminStore(store);
  return res;
}

export async function deleteReservation(id: string): Promise<boolean> {
  const store = await getAdminStore();
  const beforeLen = store.reservations.length;
  store.reservations = store.reservations.filter((r) => r.id !== id);
  if (store.reservations.length !== beforeLen) {
    await saveAdminStore(store);
    return true;
  }
  return false;
}

export async function addApplicant(
  applicant: Omit<ApplicantItem, "id" | "status" | "createdAt">
): Promise<ApplicantItem> {
  const store = await getAdminStore();
  const newItem: ApplicantItem = {
    ...applicant,
    id: `app-${Date.now()}`,
    status: "NOUVEAU",
    createdAt: new Date().toISOString(),
  };
  store.applicants.unshift(newItem);
  await saveAdminStore(store);
  return newItem;
}

export async function updateApplicantStatus(
  id: string,
  status: ApplicantItem["status"]
): Promise<ApplicantItem | null> {
  const store = await getAdminStore();
  const applicant = store.applicants.find((a) => a.id === id);
  if (!applicant) return null;
  applicant.status = status;
  await saveAdminStore(store);
  return applicant;
}

export async function addOpportunity(
  opp: Omit<OpportunityItem, "id">
): Promise<OpportunityItem> {
  const store = await getAdminStore();
  const newItem: OpportunityItem = {
    ...opp,
    id: `opp-${Date.now()}`,
  };
  store.opportunities.unshift(newItem);
  await saveAdminStore(store);
  return newItem;
}

export async function deleteOpportunity(id: string): Promise<boolean> {
  const store = await getAdminStore();
  store.opportunities = store.opportunities.filter((o) => o.id !== id);
  await saveAdminStore(store);
  return true;
}

export async function addProject(project: ProjectItem): Promise<ProjectItem> {
  const store = await getAdminStore();
  store.projects.unshift(project);
  await saveAdminStore(store);
  return project;
}

export async function deleteProject(slug: string): Promise<boolean> {
  const store = await getAdminStore();
  store.projects = store.projects.filter((p) => p.slug !== slug);
  await saveAdminStore(store);
  return true;
}

export async function addArticle(article: ArticleItem): Promise<ArticleItem> {
  const store = await getAdminStore();
  store.articles.unshift(article);
  await saveAdminStore(store);
  return article;
}

export async function deleteArticle(slug: string): Promise<boolean> {
  const store = await getAdminStore();
  store.articles = store.articles.filter((a) => a.slug !== slug);
  await saveAdminStore(store);
  return true;
}

export async function updateSettings(
  patch: Partial<AdminStoreData["settings"]>
): Promise<AdminStoreData["settings"]> {
  const store = await getAdminStore();
  store.settings = { ...store.settings, ...patch };
  await saveAdminStore(store);
  return store.settings;
}
