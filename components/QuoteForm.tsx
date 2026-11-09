"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, Calendar, Clock, ShieldCheck } from "lucide-react";
import { submitQuoteAction, QuoteActionState } from "@/app/actions/quote";
import { PRICING_OFFERS, DAILY_LIVE_SLOTS, LIVE_FORMATS } from "@/lib/data";

const initialState: QuoteActionState = {
  success: false,
  message: "",
};

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const offerFromQuery = searchParams.get("offre");
  const initialOffer = offerFromQuery || "pack-4h";

  const [state, formAction, isPending] = useActionState(
    submitQuoteAction,
    initialState
  );

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    selectedOffer: initialOffer,
    liveFormat: "live-presentiel",
    eventDate: "",
    selectedSlot: "slot-2",
    eventLocation: "",
    message: "",
    consent: false,
    hpSecurity: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  if (state.success) {
    return (
      <div className="bg-[#121215] border border-[#ff6600]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 bg-[#ff6600]/20 text-[#ff6600] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#ff6600]">
            Réservation enregistrée
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Demande transmise à l'administrateur
          </h3>
        </div>
        <p className="text-zinc-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          {state.message}
        </p>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-xs text-zinc-400 space-y-1">
          <p>
            <strong className="text-white">Prochaine étape :</strong> L'administrateur vérifie la disponibilité parmi les 4 créneaux quotidiens et vous rappelle pour caler les éléments techniques.
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 text-sm text-[#ff6600] hover:text-[#ff8533] underline underline-offset-4 font-semibold pt-3 cursor-pointer"
        >
          Effectuer une autre réservation
        </button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-[#131316] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl relative"
    >
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hpSecurity">Ne pas remplir</label>
        <input
          type="text"
          id="hpSecurity"
          name="hpSecurity"
          value={formData.hpSecurity}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Capacity & Admin Notice */}
      <div className="p-4 rounded-2xl bg-[#ff6600]/10 border border-[#ff6600]/30 flex items-start gap-3.5">
        <ShieldCheck className="w-5 h-5 text-[#ff6600] shrink-0 mt-0.5" />
        <div className="text-xs text-zinc-300 space-y-1">
          <strong className="text-white block font-semibold">
            Capacité régie limitée à 4 lives par jour
          </strong>
          <span>
            Toutes les réservations sont transmises à l'administrateur afin de garantir une concentration technique absolue et la disponibilité de nos équipes.
          </span>
        </div>
      </div>

      {!state.success && state.message && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Étape 1 : Choix de la Formule / Pack */}
      <div className="space-y-3">
        <label
          htmlFor="selectedOffer"
          className="block text-xs font-bold uppercase tracking-wider text-white"
        >
          1. Formule ou Prestation souhaitée <span className="text-[#ff6600]">*</span>
        </label>
        <select
          id="selectedOffer"
          name="selectedOffer"
          value={formData.selectedOffer}
          onChange={handleChange}
          className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
        >
          {PRICING_OFFERS.map((offer) => (
            <option key={offer.id} value={offer.slug}>
              {offer.title} — {offer.price}
            </option>
          ))}
          <option value="autre-prestation">Autre besoin personnalisé</option>
        </select>
      </div>

      {/* Étape 2 : Format du Live (Présentiel ou Distance) */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-white">
          2. Format du direct <span className="text-[#ff6600]">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LIVE_FORMATS.map((format) => {
            const isSelected = formData.liveFormat === format.id;
            return (
              <label
                key={format.id}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#ff6600]/10 border-[#ff6600] text-white"
                    : "bg-[#18181d] border-white/10 text-zinc-400 hover:border-white/25"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">
                      {format.title}
                    </span>
                    <input
                      type="radio"
                      name="liveFormat"
                      value={format.id}
                      checked={isSelected}
                      onChange={handleChange}
                      className="text-[#ff6600] focus:ring-0"
                    />
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {format.subtitle}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Étape 3 : Date & Choix parmi les 4 Créneaux Quotidiens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="eventDate"
            className="block text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-[#ff6600]" />
            <span>3. Date souhaitée <span className="text-[#ff6600]">*</span></span>
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
          />
          {state.errors?.eventDate && (
            <p className="text-red-400 text-xs mt-1">
              {state.errors.eventDate[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="selectedSlot"
            className="block text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5 text-[#ff6600]" />
            <span>4. Créneau horaire (4 par jour) <span className="text-[#ff6600]">*</span></span>
          </label>
          <select
            id="selectedSlot"
            name="selectedSlot"
            value={formData.selectedSlot}
            onChange={handleChange}
            className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
          >
            {DAILY_LIVE_SLOTS.map((slot) => (
              <option key={slot.id} value={slot.id}>
                {slot.label} ({slot.hours})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Étape 4 : Coordonnées du contact */}
      <div className="space-y-4 pt-2 border-t border-white/5">
        <span className="block text-xs font-bold uppercase tracking-wider text-white">
          5. Vos coordonnées
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs text-zinc-400 mb-1.5"
            >
              Nom & Prénom <span className="text-[#ff6600]">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ex: Kouamé Konan"
              className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
            />
            {state.errors?.fullName && (
              <p className="text-red-400 text-xs mt-1">
                {state.errors.fullName[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="organization"
              className="block text-xs text-zinc-400 mb-1.5"
            >
              Organisation / Société <span className="text-zinc-600">(Facultatif)</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Ex: Entreprise / Média / Indépendant"
              className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-xs text-zinc-400 mb-1.5"
            >
              Adresse e-mail <span className="text-[#ff6600]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@domaine.com"
              className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
            />
            {state.errors?.email && (
              <p className="text-red-400 text-xs mt-1">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs text-zinc-400 mb-1.5"
            >
              Numéro de téléphone <span className="text-[#ff6600]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+228 90 00 00 00"
              className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
            />
            {state.errors?.phone && (
              <p className="text-red-400 text-xs mt-1">
                {state.errors.phone[0]}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Description du projet */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
        >
          6. Description de votre événement & besoins spécifiques <span className="text-[#ff6600]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet : sujet du live, nombre d'intervenants prévus, diffusion publique ou privée, besoins en habillage graphique..."
          className="w-full bg-[#1b1b1f] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-colors"
        />
        {state.errors?.message && (
          <p className="text-red-400 text-xs mt-1">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* Consentement */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="w-4 h-4 mt-1 rounded border-zinc-700 bg-[#1b1b1f] text-[#ff6600] focus:ring-[#ff6600] focus:ring-offset-0 cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-xs text-zinc-400 leading-relaxed cursor-pointer"
        >
          J'accepte que les données saisies soient transmises à l'administrateur d'OCD Live pour le traitement et la confirmation de ma réservation de créneau live.
        </label>
      </div>
      {state.errors?.consent && (
        <p className="text-red-400 text-xs">
          {state.errors.consent[0]}
        </p>
      )}

      {/* Bouton de confirmation */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ff6600] hover:bg-[#ff771a] active:bg-[#cc5200] text-white font-bold text-sm px-9 py-4 rounded-xl shadow-xl shadow-[#ff6600]/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Enregistrement du créneau en cours...</span>
          </>
        ) : (
          <>
            <span>Transmettre la réservation à l'administrateur</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
