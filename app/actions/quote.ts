"use server";

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

  // Generate reference number for the booking
  const reservationRef = `OCD-${Date.now().toString().slice(-6)}`;

  // Log complete reservation for the admin
  console.log("=================================================");
  console.log("=== NOUVELLE RÉSERVATION DE LIVE OCD LIVE ===");
  console.log("RÉFÉRENCE :", reservationRef);
  console.log("Date de réception :", new Date().toISOString());
  console.log("Offre sélectionnée :", selectedOffer);
  console.log("Format du live :", liveFormat);
  console.log("Date souhaitée :", eventDate);
  console.log("Créneau horaire :", selectedSlot);
  console.log("Nom du contact :", fullName);
  console.log("Organisation :", organization);
  console.log("Email :", email);
  console.log("Téléphone :", phone);
  console.log("Lieu :", eventLocation || "Studio OCD Live");
  console.log("Description du projet :", message);
  console.log("Statut : EN ATTENTE DE VALIDATION PAR L'ADMINISTRATEUR (Max 4/jour)");
  console.log("=================================================");

  return {
    success: true,
    reservationId: reservationRef,
    message: `Votre demande de réservation #${reservationRef} a été transmise à l'administrateur. Nous vérifions la disponibilité du créneau (limité à 4 lives par jour) et vous contactons sous 24h.`,
  };
}
