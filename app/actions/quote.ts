"use server";

import { addReservation } from "@/lib/admin-store";
import { PRICING_OFFERS, BUSINESS_ACTIVITIES, PAYMENT_METHODS } from "@/lib/data";

export interface QuoteActionState {
  success: boolean;
  message: string;
  reservationId?: string;
  activityLabel?: string;
  paymentMethodLabel?: string;
  depositAmountFcfa?: number;
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
  const selectedOffer = formData.get("selectedOffer")?.toString().trim() || "live-1h30";
  const liveFormat = formData.get("liveFormat")?.toString().trim() || "live-presentiel";
  const activityType = formData.get("activityType")?.toString().trim() || "mode_vetements";
  const activityCustomDetails = formData.get("activityCustomDetails")?.toString().trim() || "";
  const paymentMethod = formData.get("paymentMethod")?.toString().trim() || "tmoney";
  const eventDate = formData.get("eventDate")?.toString().trim() || "";
  const selectedSlot = formData.get("selectedSlot")?.toString().trim() || "slot-1";
  const eventLocation = formData.get("eventLocation")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";
  const consent = formData.get("consent");

  const errors: Record<string, string[]> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = ["Le nom complet ou nom de la marque est obligatoire."];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Veuillez renseigner une adresse email valide."];
  }

  if (!phone || phone.length < 6) {
    errors.phone = ["Veuillez renseigner un numéro de téléphone valide (WhatsApp recommandé)."];
  }

  if (!eventDate) {
    errors.eventDate = ["Veuillez sélectionner une date souhaitée pour votre live."];
  }

  if (!consent) {
    errors.consent = [
      "Le consentement au traitement des données est obligatoire pour valider la réservation.",
    ];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Veuillez renseigner tous les champs obligatoires avant de valider.",
      errors,
    };
  }

  // Calculate estimated budget from offer
  const matchedOffer = PRICING_OFFERS.find((o) => o.id === selectedOffer || o.slug === selectedOffer);
  const budgetEstimated = matchedOffer ? matchedOffer.rawPrice : 15000;

  const matchedActivity = BUSINESS_ACTIVITIES.find((a) => a.id === activityType);
  const activityLabel = matchedActivity ? matchedActivity.label : "Vente & Commerce";

  const matchedPayment = PAYMENT_METHODS.find((p) => p.id === paymentMethod);
  const paymentMethodLabel = matchedPayment ? matchedPayment.label : "T-Money (Togocom)";

  const depositAmountFcfa = budgetEstimated <= 30000 ? budgetEstimated : Math.round(budgetEstimated * 0.5);

  // Persist reservation into admin store
  let reservationRef = `OCD-${Date.now().toString().slice(-6)}`;
  try {
    const saved = await addReservation({
      fullName: fullName || "Client OCD Live",
      organization,
      email: email || "",
      phone: phone || "",
      selectedOffer: matchedOffer ? matchedOffer.title : selectedOffer,
      liveFormat: liveFormat === "distance" ? "À distance (Streaming web)" : "En présentiel (Dans vos locaux ou au Studio)",
      eventDate,
      selectedSlot,
      eventLocation: eventLocation || "Dans vos locaux à Lomé / Studio OCD",
      message: message || `Activité : ${activityLabel}. ${activityCustomDetails ? `Précisions : ${activityCustomDetails}` : ""}`,
      budgetEstimated,
      activityType,
      activityLabel,
      activityCustomDetails,
      paymentMethod,
      paymentMethodLabel,
      depositAmountFcfa,
      depositStatus: "EN_ATTENTE",
      internalNotes: `Activité : ${activityLabel} | Paiement choisi : ${paymentMethodLabel} | Acompte : ${depositAmountFcfa.toLocaleString("fr-FR")} FCFA.`,
    });
    reservationRef = saved.ref;
  } catch (err) {
    console.error("Failed to save reservation to admin store:", err);
  }

  return {
    success: true,
    reservationId: reservationRef,
    activityLabel,
    paymentMethodLabel,
    depositAmountFcfa,
    message: `Votre demande de réservation #${reservationRef} a été enregistrée avec succès. Notre régisseur vérifie la disponibilité du créneau (limité à 4 lives par jour) et vous contacte sous 24h.`,
  };
}
