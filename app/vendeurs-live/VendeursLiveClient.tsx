"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  PANAFRICAN_COUNTRIES,
  LIVE_CATEGORIES,
  REGIE_VALIDATION_SLOTS,
  type VendorLive,
} from "@/lib/data";
import { submitVendorLiveAction } from "@/app/actions/vendor-lives";
import {
  Sparkles,
  Search,
  ExternalLink,
  MessageSquare,
  PlusCircle,
  X,
  Radio,
} from "lucide-react";

interface Props {
  initialLives: VendorLive[];
}

export default function VendeursLiveClient({ initialLives }: Props) {
  const [lives, setLives] = useState<VendorLive[]>(initialLives);
  const [selectedCountry, setSelectedCountry] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Form State
  const [isPending, startTransition] = useTransition();
  const [formFeedback, setFormFeedback] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  // Filtered Lives
  const approvedLives = lives.filter(
    (l) => l.status === "APPROVED" || l.status === "PENDING"
  );

  const filteredLives = approvedLives.filter((live) => {
    // Country filter
    if (selectedCountry !== "ALL" && live.country !== selectedCountry) {
      return false;
    }
    // Category filter
    if (selectedCategory !== "ALL" && live.category !== selectedCategory) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = live.vendorName.toLowerCase().includes(q);
      const matchTitle = live.title.toLowerCase().includes(q);
      const matchCity = live.city.toLowerCase().includes(q);
      const matchHighlights = live.productHighlights
        ?.toLowerCase()
        .includes(q);
      if (!matchName && !matchTitle && !matchCity && !matchHighlights) {
        return false;
      }
    }
    return true;
  });

  // Country counts
  const getCountryCount = (code: string) => {
    return approvedLives.filter((l) => l.country === code).length;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormFeedback(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const res = await submitVendorLiveAction(null, formData);
      if (res.success) {
        setFormFeedback({ success: true, message: res.message });
        if (res.live) {
          setLives((prev) => [res.live!, ...prev]);
        }
        form.reset();
      } else {
        setFormFeedback({
          success: false,
          message: res.message || "Une erreur est survenue.",
        });
      }
    });
  };

  return (
    <div className="vendeurs-page-wrapper">
      {/* 1. HERO PANAFRICAIN */}
      <section className="vendeurs-hero">
        <div className="vendeurs-hero-content">
          <div className="reservation-breadcrumb" style={{ marginBottom: "16px" }}>
            <Link href="/">Accueil</Link>
            <span>›</span>
            <span>Vendeurs en Direct #OCD</span>
          </div>

          <div className="vendeurs-ecosystem-tag">
            <Sparkles size={13} />
            <span>Propulsé par Bovann Group · En synergie avec House of Challenge (4M+ abonnés)</span>
          </div>

          <h1>
            L'Afrique vend en direct. <span>#LesOpportunitésCestDehors</span>
          </h1>

          <p>
            Du Cameroun au Bénin, du Togo à la Côte d'Ivoire et au Sénégal : découvrez les jeunes commerçants, créateurs et boutiques qui vendent en temps réel sur TikTok, Facebook, Instagram et YouTube.
          </p>

          <div className="vendeurs-hero-actions">
            <button
              type="button"
              className="btn orange"
              onClick={() => setIsModalOpen(true)}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <PlusCircle size={18} />
              <span>Déclarer mon Live de vente (Gratuit) ↗</span>
            </button>

            <div className="vendeurs-slots-banner">
              <span>⏰ <strong>Sessions de validation par la régie :</strong></span>
              <div className="vendeurs-slots-pills">
                {REGIE_VALIDATION_SLOTS.map((slot) => (
                  <span key={slot.id} className="vendeur-slot-pill" title={slot.description}>
                    ● {slot.badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BARRE DE FILTRES PAYS & CATÉGORIES */}
      <section className="container vendeurs-filters-section">
        {/* Filtre par Pays */}
        <div className="vendeurs-country-bar">
          <button
            type="button"
            className={`country-tab-btn ${selectedCountry === "ALL" ? "active" : ""}`}
            onClick={() => setSelectedCountry("ALL")}
          >
            <span>🌍 Tous les pays</span>
            <span className="country-badge-count">{approvedLives.length}</span>
          </button>

          {PANAFRICAN_COUNTRIES.map((country) => {
            const count = getCountryCount(country.code);
            return (
              <button
                key={country.code}
                type="button"
                className={`country-tab-btn ${selectedCountry === country.code ? "active" : ""}`}
                onClick={() => setSelectedCountry(country.code)}
              >
                <span>{country.flag} {country.name}</span>
                <span className="country-badge-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Filtre par Catégories */}
        <div className="vendeurs-category-bar">
          <button
            type="button"
            className={`category-tab-btn ${selectedCategory === "ALL" ? "active" : ""}`}
            onClick={() => setSelectedCategory("ALL")}
          >
            <span>⚡ Tout afficher</span>
          </button>
          {LIVE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`category-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.icon} {cat.label}</span>
            </button>
          ))}
        </div>

        {/* Barre de recherche & stats */}
        <div className="vendeurs-stats-row">
          <div className="vendeurs-live-pulse">
            <span className="pulse-dot" />
            <span>
              {filteredLives.length} live{filteredLives.length > 1 ? "s" : ""}{" "}
              {selectedCountry !== "ALL"
                ? `au ${PANAFRICAN_COUNTRIES.find((c) => c.code === selectedCountry)?.name}`
                : "actuellement actifs en Afrique"}
            </span>
          </div>

          <div style={{ position: "relative", minWidth: "260px" }}>
            <Search
              size={15}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            />
            <input
              type="text"
              placeholder="Rechercher boutique, ville, produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "#141416",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "50px",
                padding: "8px 14px 8px 38px",
                color: "#fff",
                fontSize: "12.5px",
                outline: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. GRILLE DES LIVES */}
      <section className="container">
        {filteredLives.length === 0 ? (
          <div
            style={{
              padding: "60px 20px",
              textAlign: "center",
              background: "#121214",
              borderRadius: "20px",
              border: "1px dashed rgba(255, 255, 255, 0.12)",
              margin: "20px 0 60px",
            }}
          >
            <Radio size={40} style={{ color: "var(--orange)", margin: "0 auto 14px" }} />
            <h3 style={{ fontSize: "18px", color: "#fff", margin: "0 0 8px" }}>
              Aucun live trouvé pour cette sélection
            </h3>
            <p style={{ color: "#aaa", fontSize: "13px", maxWidth: "450px", margin: "0 auto 20px" }}>
              Vous êtes actuellement en vente directe dans cette catégorie ou ce pays ? Soyez le premier à être mis en avant !
            </p>
            <button
              type="button"
              className="btn orange"
              onClick={() => setIsModalOpen(true)}
            >
              ➕ Déclarer mon live maintenant ↗
            </button>
          </div>
        ) : (
          <div className="vendeurs-grid">
            {filteredLives.map((live) => {
              const countryObj = PANAFRICAN_COUNTRIES.find(
                (c) => c.code === live.country
              );
              const categoryObj = LIVE_CATEGORIES.find(
                (cat) => cat.id === live.category
              );

              // Pre-formatted WhatsApp order message
              const cleanWhatsApp = live.whatsapp.replace(/\D/g, "");
              const orderMsg = encodeURIComponent(
                `Bonjour ${live.vendorName} ! J'ai vu votre vente en direct sur OCD Live ("${live.title}"). Quels sont les articles disponibles et les prix ? Merci !`
              );

              return (
                <article key={live.id} className="vendeur-card">
                  {/* Miniature / Image */}
                  <div className="vendeur-thumb-box">
                    <img
                      src={
                        live.thumbnailUrl ||
                        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&auto=format&fit=crop&q=80"
                      }
                      alt={live.title}
                    />

                    {live.status === "APPROVED" ? (
                      <span className="vendeur-live-badge">
                        <span className="pulse-dot" style={{ width: "7px", height: "7px" }} />
                        EN DIRECT
                      </span>
                    ) : (
                      <span
                        className="vendeur-live-badge"
                        style={{ background: "rgba(243, 107, 11, 0.9)" }}
                      >
                        SESSION {live.validationSlot}
                      </span>
                    )}

                    <span className="vendeur-platform-badge">
                      {live.platform.toUpperCase()}
                    </span>

                    <span className="vendeur-location-badge">
                      {countryObj?.flag} {live.city}
                    </span>
                  </div>

                  {/* Corps de la carte */}
                  <div className="vendeur-body">
                    <div className="vendeur-meta-row">
                      <span>{categoryObj?.icon} {categoryObj?.label}</span>
                      {live.viewsEstimated && (
                        <span style={{ color: "#aaa", fontSize: "11px" }}>
                          ● {live.viewsEstimated}
                        </span>
                      )}
                    </div>

                    <h3>{live.title}</h3>

                    <div style={{ fontSize: "12px", color: "#ddd", fontWeight: 700 }}>
                      Boutique : {live.vendorName}
                    </div>

                    <p className="vendeur-highlights">
                      ✦ {live.productHighlights}
                    </p>

                    <div className="vendeur-card-actions">
                      <a
                        href={live.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-watch-live"
                      >
                        <ExternalLink size={13} />
                        <span>Regarder le Live ↗</span>
                      </a>

                      <a
                        href={`https://wa.me/${cleanWhatsApp}?text=${orderMsg}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp-vendor"
                      >
                        <MessageSquare size={13} />
                        <span>Commander ↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. MODAL DE DÉCLARATION DU LIVE */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--orange)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                ● Signalement Régie OCD Live
              </span>
              <h2 style={{ fontSize: "20px", color: "#fff", margin: "0 0 6px" }}>
                Déclarer mon Live en Vente (Gratuit)
              </h2>
              <p style={{ color: "#aaa", fontSize: "12.5px", margin: 0, lineHeight: 1.5 }}>
                Renseignez votre direct. Notre équipe technique vérifie votre lien lors des créneaux officiels et propulse votre vente auprès de milliers d'acheteurs.
              </p>
            </div>

            {formFeedback && (
              <div
                style={{
                  background: formFeedback.success
                    ? "rgba(34, 197, 94, 0.15)"
                    : "rgba(239, 68, 68, 0.15)",
                  border: `1px solid ${formFeedback.success ? "rgba(34, 197, 94, 0.4)" : "rgba(239, 68, 68, 0.4)"}`,
                  color: formFeedback.success ? "#86efac" : "#fca5a5",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  marginBottom: "18px",
                  lineHeight: 1.5,
                }}
              >
                {formFeedback.success ? "✓ " : "⚠️ "}
                {formFeedback.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <input type="text" name="hpSecurity" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="vendorName">Nom du Vendeur ou de la Boutique *</label>
                  <input
                    id="vendorName"
                    name="vendorName"
                    type="text"
                    required
                    placeholder="Ex: Boutique Élégance Cotonou"
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="country">Pays d'émission *</label>
                  <select id="country" name="country" required defaultValue="CM">
                    {PANAFRICAN_COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.name} ({c.phoneCode})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="city">Ville & Quartier *</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="Ex: Douala (Akwa), Lomé (Déckon)..."
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="category">Catégorie de produits *</label>
                  <select id="category" name="category" required defaultValue="mode">
                    {LIVE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.icon} {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label htmlFor="title">Titre de votre direct & Promo phare *</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  placeholder="Ex: Arrivage sacs en cuir & talons chic à partir de 8 000 FCFA"
                />
              </div>

              <div className="modal-form-group">
                <label htmlFor="productHighlights">Détails des articles vendus</label>
                <input
                  id="productHighlights"
                  name="productHighlights"
                  type="text"
                  placeholder="Ex: Tailles 37 à 43, livraison immédiate, réduction 20% pendant le live"
                />
              </div>

              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="platform">Plateforme de diffusion *</label>
                  <select id="platform" name="platform" required defaultValue="tiktok">
                    <option value="tiktok">TikTok Live</option>
                    <option value="facebook">Facebook Live / Reel</option>
                    <option value="instagram">Instagram Live</option>
                    <option value="youtube">YouTube Live</option>
                  </select>
                </div>

                <div className="modal-form-group">
                  <label htmlFor="validationSlot">Session de validation souhaitée *</label>
                  <select id="validationSlot" name="validationSlot" required defaultValue="21h00 GMT">
                    {REGIE_VALIDATION_SLOTS.map((s) => (
                      <option key={s.id} value={s.time}>
                        ● {s.time} ({s.label})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label htmlFor="liveUrl">Lien direct de votre Live *</label>
                <input
                  id="liveUrl"
                  name="liveUrl"
                  type="url"
                  required
                  placeholder="Ex: https://www.tiktok.com/@votrecompte/live"
                />
              </div>

              <div className="modal-form-group">
                <label htmlFor="whatsapp">Numéro WhatsApp pour recevoir les commandes *</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="Ex: +237 6 90 00 00 00 ou +229 97 00 00 00"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="modal-submit-btn"
              >
                {isPending ? "Transmission à la régie..." : "Envoyer à la Régie OCD pour Validation ↗"}
              </button>

              <p style={{ textAlign: "center", fontSize: "11px", color: "#888", margin: "6px 0 0" }}>
                🔒 Vérification humaine par l'équipe OCD Live lors de chaque session quotidienne (08h, 11h30, 18h, 21h GMT).
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
