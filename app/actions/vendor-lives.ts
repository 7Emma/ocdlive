"use server";

import { revalidatePath } from "next/cache";
import {
  addVendorLive,
  updateVendorLiveStatus,
  toggleVendorLiveFeatured,
  deleteVendorLive,
  type VendorLive,
} from "@/lib/admin-store";

export interface VendorLiveActionResult {
  success: boolean;
  message: string;
  live?: VendorLive;
  errors?: Record<string, string>;
}

export async function submitVendorLiveAction(
  _prevState: VendorLiveActionResult | null,
  formData: FormData
): Promise<VendorLiveActionResult> {
  const hpSecurity = formData.get("hpSecurity")?.toString().trim();
  if (hpSecurity) {
    // Honeypot anti-spam
    return {
      success: true,
      message: "Votre direct a été enregistré avec succès.",
    };
  }

  const vendorName = formData.get("vendorName")?.toString().trim() || "";
  const brandName = formData.get("brandName")?.toString().trim() || "";
  const country = formData.get("country")?.toString().trim() || "TG";
  const city = formData.get("city")?.toString().trim() || "";
  const category = formData.get("category")?.toString().trim() || "mode";
  const title = formData.get("title")?.toString().trim() || "";
  const productHighlights =
    formData.get("productHighlights")?.toString().trim() || "";
  const platform =
    (formData.get("platform")?.toString().trim() as
      | "tiktok"
      | "facebook"
      | "instagram"
      | "youtube") || "tiktok";
  const liveUrl = formData.get("liveUrl")?.toString().trim() || "";
  const whatsapp = formData.get("whatsapp")?.toString().trim() || "";
  const validationSlot =
    formData.get("validationSlot")?.toString().trim() || "21h00 GMT";

  const errors: Record<string, string> = {};

  if (!vendorName || vendorName.length < 2) {
    errors.vendorName = "Le nom de la boutique ou du vendeur est requis.";
  }
  if (!city || city.length < 2) {
    errors.city = "Veuillez préciser la ville (ex: Douala, Cotonou, Lomé, Abidjan).";
  }
  if (!title || title.length < 5) {
    errors.title = "Veuillez donner un titre accrocheur à votre vente en direct.";
  }
  if (!liveUrl || !liveUrl.startsWith("http")) {
    errors.liveUrl = "Veuillez renseigner un lien de direct valide (ex: https://tiktok.com/@votrecompte/live).";
  }
  if (!whatsapp || whatsapp.length < 6) {
    errors.whatsapp = "Veuillez renseigner un numéro WhatsApp valide pour les commandes.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Veuillez corriger les informations requises ci-dessous.",
      errors,
    };
  }

  try {
    const newLive = await addVendorLive({
      vendorName,
      brandName: brandName || vendorName,
      country,
      city,
      category,
      title,
      productHighlights:
        productHighlights || "Articles disponibles en direct · Commande immédiate sur WhatsApp",
      platform,
      liveUrl,
      whatsapp,
      validationSlot,
      viewsEstimated: "Validation en cours",
    });

    revalidatePath("/vendeurs-live");
    revalidatePath("/admin/lives");
    revalidatePath("/");

    return {
      success: true,
      message: `Félicitations ! Votre live est enregistré. Notre régie OCD procèdera à la vérification lors de la session de ${validationSlot}. Vous recevrez un signalement sur WhatsApp.`,
      live: newLive,
    };
  } catch (err) {
    console.error("Error submitting vendor live:", err);
    return {
      success: false,
      message: "Une erreur est survenue lors de la soumission de votre live.",
    };
  }
}

export async function moderateVendorLiveAction(
  id: string,
  status: VendorLive["status"]
): Promise<{ success: boolean; message: string }> {
  try {
    await updateVendorLiveStatus(id, status);
    revalidatePath("/vendeurs-live");
    revalidatePath("/admin/lives");
    revalidatePath("/");
    return { success: true, message: `Statut mis à jour : ${status}` };
  } catch (err) {
    console.error("Error moderating vendor live:", err);
    return { success: false, message: "Erreur lors de la modération." };
  }
}

export async function toggleFeaturedVendorLiveAction(
  id: string
): Promise<{ success: boolean }> {
  try {
    await toggleVendorLiveFeatured(id);
    revalidatePath("/vendeurs-live");
    revalidatePath("/admin/lives");
    revalidatePath("/");
    return { success: true };
  } catch {
    return { success: false };
  }
}

export async function deleteVendorLiveAction(
  id: string
): Promise<{ success: boolean }> {
  try {
    await deleteVendorLive(id);
    revalidatePath("/vendeurs-live");
    revalidatePath("/admin/lives");
    revalidatePath("/");
    return { success: true };
  } catch {
    return { success: false };
  }
}
