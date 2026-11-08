"use server";

import { addReservation } from "@/lib/admin-store";
import { PRICING_OFFERS } from "@/lib/data";

export interface QuoteActionState {
  success: boolean;
  message: string;
  reservationId?: string;
  errors?: Record<string, string[]>;
}

export async function submitQuoteAction(
  _prevState: QuoteActionState | null,
  formData: FormData
): Promise<QuoteActionState> {
  const hpSecurity = formData.get("hpSecurity")?.toString().trim();
  if (hpSecurity) {
    // Honeypot field filled: treat silently as success
    return {
      success: true,
      message: "Votre réservation a bien été enregistrée.",
    };
  }

  const fullName = formData.get("fullName")?.toString().trim();
  const organization = formData.get("organization")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const selectedOffer = formData.get("selectedOffer")?.toString().trim() || "pack-4h";
  const liveFormat = formData.get("liveFormat")?.toString().trim() || "live-presentiel";
  const eventDate = formData.get("eventDate")?.toString().trim() || "";
  const selectedSlot = formData.get("selectedSlot")?.toString().trim() || "slot-1";
  const eventLocation = formData.get("eventLocation")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim();
  const consent = formData.get("consent");

  const errors: Record<string, string[]> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = ["Le nom et prénom sont obligatoires."];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Veuillez renseigner une adresse email valide."];
  }

  if (!phone || phone.length < 6) {
    errors.phone = ["Veuillez renseigner un numéro de téléphone valide."];
  }

  if (!eventDate) {
    errors.eventDate = ["Veuillez sélectionner une date souhaitée pour votre live."];
  }

  if (!message || message.length < 10) {
    errors.message = [
      "Veuillez détailler votre projet et vos besoins techniques (minimum 10 caractères).",
    ];
  }

  if (!consent) {
    errors.consent = [
      "Le consentement au traitement des données est obligatoire.",
    ];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Veuillez corriger les informations requises dans le formulaire.",
      errors,
    };
  }

  // Calculate estimated budget from offer
  const matchedOffer = PRICING_OFFERS.find((o) => o.id === selectedOffer);
  const budgetEstimated = matchedOffer ? matchedOffer.rawPrice : 250000;

  // Persist reservation into admin store
  let reservationRef = `OCD-${Date.now().toString().slice(-6)}`;
  try {
    const saved = await addReservation({
      fullName: fullName || "Client OCD Live",
      organization,
      email: email || "",
      phone: phone || "",
      selectedOffer,
      liveFormat,
      eventDate,
      selectedSlot,
      eventLocation: eventLocation || "Studio OCD Live Marcory",
      message: message || "",
      budgetEstimated,
      internalNotes: `Créneau sélectionné : ${selectedSlot}. Demande en attente de vérification quota (4 lives/jour max).`,
    });
    reservationRef = saved.ref;
  } catch (err) {
    console.error("Failed to save reservation to admin store:", err);
  }

  return {
    success: true,
    reservationId: reservationRef,
    message: `Votre demande de réservation #${reservationRef} a été transmise à l'administrateur. Nous vérifions la disponibilité du créneau (limité à 4 lives par jour) et vous contactons sous 24h.`,
  };
}
