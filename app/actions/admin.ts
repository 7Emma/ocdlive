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

  const title = formData.get("role")?.toString().trim() || formData.get("title")?.toString().trim() || "Poste Régie";
  const categoryRaw = formData.get("department")?.toString().trim() || "Audiovisuel & Régie";
  const category = (categoryRaw.includes("Son")
    ? "Audiovisuel & Régie"
    : categoryRaw.includes("Social")
    ? "Communication & Réseaux"
    : "Audiovisuel & Régie") as OpportunityItem["category"];
  const contractTypeRaw = formData.get("type")?.toString().trim() || "Freelance";
  const contractType = (contractTypeRaw.includes("CDD")
    ? "CDD / CDI"
    : contractTypeRaw.includes("Stage")
    ? "Stage"
    : "Freelance") as OpportunityItem["contractType"];
  const location = formData.get("location")?.toString().trim() || "Abidjan (Terrain & Studio)";
  const remuneration = formData.get("compensation")?.toString().trim() || "Rémunération forfaitaire par événement";
  const description = formData.get("description")?.toString().trim() || "";
  const requirementsRaw = formData.get("requirements")?.toString() || "";
  const requirements = requirementsRaw
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  await addOpportunity({
    title,
    company: "OCD Live (Régie & Mouvement)",
    location,
    category,
    contractType,
    remuneration,
    postedDate: "Aujourd'hui",
    deadline: "Permanent",
    description,
    requirements: requirements.length > 0 ? requirements : ["Motivation terrain", "Esprit d'équipe #OCD"],
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
