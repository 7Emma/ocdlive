"use server";

import { revalidatePath } from "next/cache";
import { verifyAdminSession } from "@/lib/auth";
import {
  updateLiveBroadcast,
  updateReservationStatus,
  deleteReservation,
  updateApplicantStatus,
  addOpportunity,
  deleteOpportunity,
  addProject,
  deleteProject,
  addArticle,
  deleteArticle,
  updateSettings,
  type ReservationStatus,
  type LiveBroadcastState,
} from "@/lib/admin-store";
import type { ProjectItem, ArticleItem, OpportunityItem } from "@/lib/data";

function assertAuth(isAuth: boolean) {
  if (!isAuth) {
    throw new Error("Action non autorisée. Veuillez vous connecter en tant qu'administrateur.");
  }
}

export async function updateLiveBroadcastAction(formData: FormData): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  const isLive = formData.get("isLive") === "true" || formData.get("isLive") === "on";
  const isScheduled = formData.get("isScheduled") === "true";
  const streamTitle = formData.get("streamTitle")?.toString().trim() || "";
  const platform = (formData.get("platform")?.toString() || "youtube") as LiveBroadcastState["platform"];
  const streamUrl = formData.get("streamUrl")?.toString().trim() || "";
  const viewersCount = parseInt(formData.get("viewersCount")?.toString() || "0", 10) || 0;
  const channelName = formData.get("channelName")?.toString().trim() || "@BovannYT";
  const scheduledTime = formData.get("scheduledTime")?.toString().trim() || "";

  await updateLiveBroadcast({
    isLive,
    isScheduled,
    streamTitle,
    platform,
    streamUrl,
    viewersCount,
    channelName,
    scheduledTime,
  });

  revalidatePath("/", "layout");
  revalidatePath("/admin", "layout");
}

export async function updateReservationStatusAction(
  id: string,
  status: ReservationStatus,
  internalNotes?: string
): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await updateReservationStatus(id, status, internalNotes);
  revalidatePath("/admin/reservations");
  revalidatePath("/admin");
}

export async function deleteReservationAction(id: string): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await deleteReservation(id);
  revalidatePath("/admin/reservations");
  revalidatePath("/admin");
}

export async function updateApplicantStatusAction(
  id: string,
  status: "NOUVEAU" | "ENTRETIEN" | "RETENU" | "REFUSE"
): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await updateApplicantStatus(id, status);
  revalidatePath("/admin/opportunites");
  revalidatePath("/admin");
}

export async function createOpportunityAction(formData: FormData): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  const title =
    formData.get("role")?.toString().trim() ||
    formData.get("title")?.toString().trim() ||
    "Opportunité Jeunesse OCD";

  const type = (formData.get("opportunityType")?.toString().trim() ||
    "Formation & Masterclass") as OpportunityItem["type"];

  const company =
    formData.get("company")?.toString().trim() ||
    (type?.includes("Formation")
      ? "OCD Live Academy"
      : type?.includes("Mentorat")
      ? "Bovan Mouvement #OCD"
      : type?.includes("Casting")
      ? "House of Challenge & OCD"
      : "OCD Live Productions");

  const categoryRaw = formData.get("department")?.toString().trim() || "Audiovisuel & Régie";
  const category = (
    categoryRaw.includes("Son")
      ? "Audiovisuel & Régie"
      : categoryRaw.includes("Montage") || categoryRaw.includes("Post-production")
      ? "Production & Montage"
      : categoryRaw.includes("Social") || categoryRaw.includes("Communication")
      ? "Communication & Réseaux"
      : categoryRaw.includes("Entrepreneuriat")
      ? "Entrepreneuriat & Création"
      : categoryRaw.includes("Accueil") || categoryRaw.includes("Événementiel")
      ? "Événementiel & Accueil"
      : "Audiovisuel & Régie"
  ) as OpportunityItem["category"];

  const contractType =
    formData.get("type")?.toString().trim() ||
    (type?.includes("Formation")
      ? "Formation Pratique Gratuite"
      : type?.includes("Mentorat")
      ? "Mentorat 3 Mois"
      : type?.includes("Casting")
      ? "Casting Ouvert"
      : "Freelance / Pige");

  const location =
    formData.get("location")?.toString().trim() || "Lomé (Studio & Terrain)";
  const remuneration =
    formData.get("compensation")?.toString().trim() ||
    (type?.includes("Formation")
      ? "Prise en charge intégrale"
      : type?.includes("Mentorat")
      ? "Accompagnement offert"
      : "Rémunération forfaitaire");
  const duration = formData.get("duration")?.toString().trim() || "Selon planning";
  const spots = formData.get("spots")?.toString().trim() || "Places limitées";
  const badge =
    formData.get("badge")?.toString().trim() ||
    (type?.includes("Formation")
      ? "FORMATION 100% PRATIQUE"
      : type?.includes("Mentorat")
      ? "MENTORAT BOVAN"
      : type?.includes("Casting")
      ? "CASTING OUVERT"
      : "MISSION RÉMUNÉRÉE");

  const description = formData.get("description")?.toString().trim() || "";
  const requirementsRaw = formData.get("requirements")?.toString() || "";
  const requirements = requirementsRaw
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  await addOpportunity({
    title,
    type,
    company,
    location,
    category,
    contractType,
    remuneration,
    duration,
    spots,
    badge,
    postedDate: "Aujourd'hui",
    deadline: "Permanent",
    description,
    requirements:
      requirements.length > 0
        ? requirements
        : ["Motivation terrain", "Esprit d'équipe #OCD"],
    benefits: [
      "Attestation ou intégration réseau OCD Live",
      "Visibilité auprès de la communauté Bovan",
    ],
  });

  revalidatePath("/opportunites");
  revalidatePath("/admin/opportunites");
}

export async function deleteOpportunityAction(id: string): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await deleteOpportunity(id);
  revalidatePath("/opportunites");
  revalidatePath("/admin/opportunites");
}

export async function createProjectAction(project: ProjectItem): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await addProject(project);
  revalidatePath("/realisations");
  revalidatePath("/admin/realisations");
}

export async function deleteProjectAction(slug: string): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await deleteProject(slug);
  revalidatePath("/realisations");
  revalidatePath("/admin/realisations");
}

export async function createArticleAction(article: ArticleItem): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await addArticle(article);
  revalidatePath("/actualites");
  revalidatePath("/admin/actualites");
}

export async function deleteArticleAction(slug: string): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  await deleteArticle(slug);
  revalidatePath("/actualites");
  revalidatePath("/admin/actualites");
}

export async function updateSettingsAction(formData: FormData): Promise<void> {
  const isAuth = await verifyAdminSession();
  assertAuth(isAuth);

  const phone = formData.get("phone")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const whatsapp = formData.get("whatsapp")?.toString().trim() || "";
  const address = formData.get("address")?.toString().trim() || "";
  const maxLivesPerDay = parseInt(formData.get("maxLivesPerDay")?.toString() || "4", 10);
  const baseHourlyRateFcfa = parseInt(formData.get("baseHourlyRateFcfa")?.toString() || "150000", 10);

  await updateSettings({
    phone,
    email,
    whatsapp,
    address,
    maxLivesPerDay,
    baseHourlyRateFcfa,
  });

  revalidatePath("/admin/parametres");
}
