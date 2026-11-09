import Link from "next/link";
import { COMPANY_INFO, LIVE_FORMATS, BOVAN_VIDEOS, YOUTH_PHOTOS, PRICING_OFFERS } from "@/lib/data";
import ScrollToTop from "@/components/ScrollToTop";
import "./home.css";

export default function Home() {
  return (
    <>
      <ScrollToTop />

      {/* 1. HERO — LES OPPORTUNITÉS C'EST DEHORS */}
      <section className="hero" id="home">
        {/* Arc croissant lumineux orange en haut à gauche */}
        <div className="hero-crescent-left" aria-hidden="true" />
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow">
            <i /> Opportunités C'est Dehors · OCD Live
          </div>
          <h1>
            Les opportunités,
            <br />
            c'est <em>dehors.</em>
          </h1>
          <p>
            On ne réussit pas enfermé dans sa chambre. OCD Live est la scène,
            le plateau et le direct où l'on filme ceux qui sortent, qui bougent
            et qui construisent. L’expérience du live, pensée autrement.
          </p>
          <div className="actions">
            <Link className="btn orange" href="/services">
              Découvrir nos 2 formats de live →
            </Link>
            <Link className="btn outline" href="/reservation">
              ▶ Réserver une prestation ↗
            </Link>
          </div>
          <div className="hero-note">
            <span /> Quand vous sortez, nous mettons nos caméras au service de votre voix.
          </div>
        </div>
        <div className="container hero-bottom">
          <span>OCD LIVE — CRÉATION & DIFFUSION DIRECTE</span>
          <span>Défiler pour découvrir ↓</span>
        </div>

        {/* Découpe asymétrique en bas du hero : arrondi vers le bas à gauche, vers le haut à droite avec trait orange */}
        <div className="hero-wave-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="hero-wave-svg"
          >
            <path
              d="M0,45 C320,110 520,115 880,55 C1150,15 1320,22 1440,25 L1440,120 L0,120 Z"
              fill="#0c0c0c"
            />
            <path
              d="M0,45 C320,110 520,115 880,55 C1150,15 1320,22 1440,25"
              stroke="#f36b0b"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="hero-wave-stroke"
            />
          </svg>
        </div>
      </section>

      {/* 2. LE CONSTAT — LE MANIFESTE DU MOUVEMENT OCD */}
      <section
        className="section"
        style={{
          background: "#0c0c0c",
          borderBottom: "1px solid var(--line)",
          padding: "85px 0",
        }}
      >
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <label style={{ display: "inline-flex", justifyContent: "center", marginBottom: "14px" }}>
            Le Constat · Pourquoi sortir
          </label>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.15, margin: "0 0 20px" }}>
            Dans sa chambre, rien ne se passe. <em>C'est dehors que tout se joue.</em>
          </h2>
          <p style={{ color: "#d0ceca", fontSize: "16px", lineHeight: 1.85, margin: "0 0 20px" }}>
            Rester chez soi en attendant une opportunité ne mène nulle part. C'est sur le terrain,
            dans les rencontres, les conférences, les concerts et les plateaux d'échanges que
            se signent les contrats et que les ambitions se concrétisent.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.8, margin: "0 auto 30px", maxWidth: "760px" }}>
            <strong>OCD signifie « Opportunités C'est Dehors ».</strong> Notre rôle est de poser nos caméras
            4K et nos régies mobiles au cœur de cette énergie, pour que votre action soit vue, entendue
            et diffusée avec l'exigence d'une grande chaîne de télévision.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn orange" href="/a-propos">
              Comprendre le mouvement OCD →
            </Link>
            <Link className="btn outline" href="/opportunites">
              Voir nos opportunités de terrain ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 3. LE TERRAIN — LES 2 FORMATS DE DIRECT & LES 5 SERVICES */}
      <section className="section services" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <label>Les 2 Formats de Live</label>
              <h2>
                Deux manières de capter <em>votre audience.</em>
              </h2>
              <p>
                Sur le terrain avec votre public ou à distance en streaming multiplateforme :
                choisissez la configuration adaptée à votre événement.
              </p>
            </div>
            <Link className="orange-link" href="/services">
              Découvrir les 2 formats en détail ↗
            </Link>
          </div>

          {/* Les 2 Formats de Live Innovants */}
          <div className="live-formats-innovative">
            {LIVE_FORMATS.map((fmt) => (
              <div key={fmt.id} className="live-innovative-card">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="live-innovative-badge">{fmt.badge}</span>
                    <span style={{ fontSize: "24px", color: fmt.id === "live-presentiel" ? "var(--orange)" : "#fff" }}>
                      {fmt.id === "live-presentiel" ? "◉" : "▣"}
                    </span>
                  </div>

                  <h3 className="live-innovative-title">{fmt.title}</h3>
                  <p className="live-innovative-subtitle">{fmt.subtitle}</p>
                  <p className="live-innovative-concept">{fmt.concept}</p>

                  <ul className="innovations-list">
                    {fmt.innovations?.map((inn, i) => (
                      <li key={i}>
                        <i>✦</i>
                        <span>{inn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="live-innovative-footer">
                  <div className="live-tech-pills">
                    {fmt.techPills?.map((pill, i) => (
                      <span key={i}>{pill}</span>
                    ))}
                  </div>
                  <Link
                    href={`/reservation?format=${fmt.id === "live-presentiel" ? "presentiel" : "distance"}`}
                    className={`btn ${fmt.id === "live-presentiel" ? "orange" : "outline"}`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Réserver en {fmt.id === "live-presentiel" ? "présentiel" : "à distance"} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="section-head">
            <div>
              <label>Nos 5 Expertises Techniques</label>
              <h2>
                Une offre complète <em>pour vos projets.</em>
              </h2>
            </div>
          </div>

          <div className="service-grid">
            <article>
              <div className="service-icon">
                <small>01</small>
                <b>▣</b>
              </div>
              <h3>Captation vidéo & live</h3>
              <p>
                La captation de vos événements avec une réalisation multicaméra soignée et une diffusion en direct.
              </p>
              <Link href="/services">↗</Link>
            </article>
            <article>
              <div className="service-icon">
                <small>02</small>
                <b>▤</b>
              </div>
              <h3>Production audiovisuelle</h3>
              <p>
                Des contenus vidéo de standard cinématographique conçus pour valoriser vos marques et projets.
              </p>
              <Link href="/services">↗</Link>
            </article>
            <article>
              <div className="service-icon">
                <small>03</small>
                <b>◉</b>
              </div>
              <h3>Streaming & diffusion</h3>
              <p>
                Une diffusion multiplateforme robuste et sécurisée pour connecter votre événement au monde entier.
              </p>
              <Link href="/services">↗</Link>
            </article>
            <article>
              <div className="service-icon">
                <small>04</small>
                <b>▦</b>
              </div>
              <h3>Événements & conférences</h3>
              <p>
                Régie son, lumière, projection et retour écran pour vos congrès, sommets et remises de prix.
              </p>
              <Link href="/services">↗</Link>
            </article>
            <article>
              <div className="service-icon">
                <small>05</small>
                <b>▧</b>
              </div>
              <h3>Création de contenus</h3>
              <p>
                Formats courts verticaux (Reels, TikTok), capsules d'interviews et teasers post-événement.
              </p>
              <Link href="/services">↗</Link>
            </article>
          </div>
        </div>
      </section>

      {/* 4. BOVAN & LA VISION DU DIRECT */}
      <section className="about" id="about">
        <div className="about-photo">
          <img
            src="/images/bovan-dg.jpg"
            alt="Bovan — Directeur Général d'OCD Live"
            style={{ objectPosition: "center 20%" }}
          />
          <span>● Bovan — Directeur Général d'OCD Live</span>
        </div>
        <div className="about-copy">
          <label>La Parole de la Direction</label>
          <h2>
            « Quand vous sortez, nous mettons nos caméras <em>au service de votre voix.</em> »
          </h2>
          <blockquote
            style={{
              borderLeft: "3px solid var(--orange)",
              paddingLeft: "18px",
              margin: "18px 0",
              color: "#e0deda",
              fontStyle: "italic",
              fontSize: "15px",
              lineHeight: 1.75,
            }}
          >
            "{COMPANY_INFO.dg.quote}"
          </blockquote>
          <span
            style={{
              fontSize: "11px",
              color: "var(--light)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "block",
              marginBottom: "18px",
            }}
          >
            {COMPANY_INFO.dg.quoteStatus}
          </span>
          <p>
            OCD Live n'est pas un catalogue d'options : c'est un outil de terrain,
            pensé pour propulser ceux qui ont le courage de franchir leur porte et
            d'affronter la réalité avec ambition.
          </p>
          <Link className="btn outline" href="/a-propos">
            Découvrir l'histoire d'OCD Live & Bovan →
          </Link>
        </div>
      </section>

      {/* 5. GÉNÉRATION OCD — LE MOUVEMENT DU TERRAIN */}
      <section className="community-section" id="communaute">
        <div className="container">
          <div className="section-head">
            <div>
              <label>#LesOpportunitesCestDehors · La Voix de Bovan & le Mouvement</label>
              <h2>
                Génération OCD : <em>ceux qui sortent, ceux qui bâtissent.</em>
              </h2>
              <p>
                Le mouvement ne vit pas dans une chambre : il vit sur les marchés,
                les chantiers, les ateliers et les plateaux. Retrouvez les prises de parole
                du PDG Bovan et la jeunesse engagée sur le terrain.
              </p>
            </div>
            <a
              className="btn orange"
              href="https://youtube.com/@ocdlive"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suivre Bovan sur YouTube ↗
            </a>
          </div>

          {/* 1. VIDÉOS DU PDG BOVAN EN GRAND FORMAT */}
          {BOVAN_VIDEOS.length > 0 && (
            <div className="bovan-videos-layout">
              {/* Vidéo Principale Grand Format */}
              <a
                href={BOVAN_VIDEOS[0].youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bovan-video-main"
              >
                <div className="bovan-thumb-wrap">
                  <img src={BOVAN_VIDEOS[0].thumbnail} alt={BOVAN_VIDEOS[0].title} />
                  <div className="bovan-play-overlay">
                    <div className="bovan-play-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <span className="bovan-video-badge">{BOVAN_VIDEOS[0].badge}</span>
                  <span className="bovan-video-duration">{BOVAN_VIDEOS[0].duration}</span>
                </div>
                <div className="bovan-video-info">
                  <div className="bovan-video-meta">
                    <span style={{ color: "var(--orange)", fontWeight: 800 }}>● BOVAN PDG</span>
                    <span>·</span>
                    <span>{BOVAN_VIDEOS[0].views}</span>
                    <span>·</span>
                    <span>Master 4K Broadcast</span>
                  </div>
                  <h3>{BOVAN_VIDEOS[0].title}</h3>
                  <p>{BOVAN_VIDEOS[0].description}</p>
                </div>
              </a>

              {/* Vidéos Secondaires */}
              <div className="bovan-secondary-videos">
                {BOVAN_VIDEOS.slice(1).map((vid) => (
                  <a
                    key={vid.id}
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bovan-video-card"
                  >
                    <div className="bovan-card-thumb">
                      <img src={vid.thumbnail} alt={vid.title} />
                      <div className="bovan-play-overlay">
                        <div className="bovan-play-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                      <span className="bovan-video-duration">{vid.duration}</span>
                    </div>
                    <div className="bovan-card-content">
                      <span style={{ color: "var(--orange)", fontSize: "10px", fontWeight: 800, textTransform: "uppercase" }}>
                        {vid.badge}
                      </span>
                      <h4>{vid.title}</h4>
                      <p>{vid.description}</p>
                      <small style={{ color: "#777", fontSize: "10px", marginTop: "2px" }}>
                        {vid.views} · Regarder sur YouTube ↗
                      </small>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 2. GALERIE PHOTO DES JEUNES ENGAGÉS DANS LE MOUVEMENT */}
          <div className="youth-gallery-head">
            <div>
              <span className="eyebrow">
                <i /> Sur le terrain · La réalité du dehors
              </span>
              <h3>Les Jeunes du Mouvement en Action</h3>
              <p>Chantiers, ateliers, tournages et street food : la jeunesse active filmée par OCD Live.</p>
            </div>
            <Link className="btn outline" href="/opportunites">
              Rejoindre nos équipes sur le terrain →
            </Link>
          </div>

          <div className="youth-photos-grid">
            {YOUTH_PHOTOS.map((photo) => (
              <div key={photo.id} className="youth-photo-card">
                <img src={photo.image} alt={photo.title} />
                <div className="youth-photo-overlay">
                  <span className="youth-photo-badge">{photo.hashtag}</span>
                  <h4>{photo.title}</h4>
                  <span>{photo.role}</span>
                  <small>📍 {photo.location}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LE PORTFOLIO & LES RÉALISATIONS */}
      <section className="section work" id="work">
        <div className="container">
          <div className="section-head">
            <div>
              <label>Nos réalisations</label>
              <h2>
                Le savoir-faire <em>en images.</em>
              </h2>
              <p>Découvrez une sélection de sommets, d'émissions et de productions signées OCD Live.</p>
            </div>
            <Link className="btn outline" href="/realisations">
              Voir toutes les réalisations ↗
            </Link>
          </div>
          <div className="work-grid">
            <Link className="work-card large" href="/realisations/sommet-afrique-finance-2026">
              <img
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85"
                alt="Production audiovisuelle Sommet Afrique Finance"
              />
              <span className="shade" />
              <span className="work-title">
                <small>Sommet International</small>
                <b>Sommet Afrique Finance 2026</b>
              </span>
              <i>↗</i>
            </Link>
            <Link className="work-card" href="/realisations/plateau-talk-tech-africa">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85"
                alt="Plateau Talk Tech Africa"
              />
              <span className="shade" />
              <span className="work-title">
                <small>Plateau Télévisé</small>
                <b>Talk Tech Africa Direct</b>
              </span>
              <i>↗</i>
            </Link>
            <Link className="work-card" href="/realisations/forum-international-energies-durables">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85"
                alt="Forum International Énergies"
              />
              <span className="shade" />
              <span className="work-title">
                <small>Captation Multicaméra</small>
                <b>Forum International Énergies</b>
              </span>
              <i>↗</i>
            </Link>
          </div>
          <p className="disclaimer">
            Régies mobiles 4K et plateau insonorisé basés à Lomé, opérant dans toute la sous-région.
          </p>
        </div>
      </section>

      {/* 6. TARIFS CLAIRS EN FCFA & RÈGLE DES 4 LIVES PAR JOUR */}
      <section
        className="section"
        style={{
          background: "#0c0c0c",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div>
              <label>Formules & Tarifs en FCFA · Lomé (Togo)</label>
              <h2>
                Des packs clairs, <em>sans surprise.</em>
              </h2>
              <p>
                Règle d'exigence broadcast : <strong>4 créneaux de direct maximum par jour</strong> avec une
                <strong> équipe personnalisée mobilisée directement dans vos locaux</strong> ou en studio.
              </p>
            </div>
            <Link className="btn orange" href="/tarifs">
              Voir la grille complète (6 packs) →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {PRICING_OFFERS.map((offer) => (
              <div
                key={offer.id}
                style={{
                  background: offer.isPopular
                    ? "linear-gradient(145deg, rgba(32, 22, 14, 0.95), rgba(16, 14, 12, 0.98))"
                    : "linear-gradient(145deg, rgba(28, 28, 28, 0.85), rgba(16, 16, 16, 0.95))",
                  border: offer.isPopular
                    ? "2px solid var(--orange)"
                    : "1px solid rgba(255, 255, 255, 0.09)",
                  borderRadius: "20px",
                  padding: "30px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  position: "relative",
                  boxShadow: offer.isPopular
                    ? "0 14px 40px rgba(243, 107, 11, 0.22)"
                    : "0 10px 30px rgba(0, 0, 0, 0.5)",
                  transition: "transform 0.25s ease",
                }}
              >
                {offer.isPopular && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "20px",
                      background: "var(--orange)",
                      color: "#170e08",
                      fontSize: "10px",
                      fontWeight: 900,
                      padding: "4px 12px",
                      borderRadius: "50px",
                      letterSpacing: "1px",
                    }}
                  >
                    POPULAIRE
                  </span>
                )}

                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ color: "var(--orange)", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                      {offer.period || "Live OCD"}
                    </span>
                  </div>
                  <h3 style={{ font: "800 20px Manrope, sans-serif", margin: "0 0 8px 0", color: "#fff" }}>
                    {offer.title}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>
                    {offer.description}
                  </p>
                  <div style={{ font: "900 28px Manrope, sans-serif", color: "var(--orange)", margin: "16px 0 6px 0" }}>
                    {offer.price}
                  </div>
                  <small style={{ color: "#aaa", fontSize: "11px", display: "block" }}>
                    Équipe personnalisée dans vos locaux incluse
                  </small>
                </div>

                <Link
                  className={offer.isPopular ? "btn orange" : "btn outline"}
                  href={`/reservation?offre=${offer.slug}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Réserver ce pack →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. POURQUOI OCD LIVE — LES 4 PILIERS */}
      <section className="why">
        <div className="container why-grid">
          <div>
            <label>Pourquoi OCD Live ?</label>
            <h2>
              Un partenaire engagé <em>à chaque étape.</em>
            </h2>
            <p>
              Nous construisons avec vous une réponse adaptée à votre événement,
              à votre message et à votre public.
            </p>
            <Link className="orange-link" href="/contact">
              Échangeons sur vos besoins ↗
            </Link>
          </div>
          <div className="benefits">
            <div>
              <b>✦</b>
              <strong>Exigence professionnelle</strong>
            </div>
            <div>
              <b>◷</b>
              <strong>Réactivité & flexibilité</strong>
            </div>
            <div>
              <b>♧</b>
              <strong>Une équipe engagée</strong>
            </div>
            <div>
              <b>↗</b>
              <strong>Un partenaire à vos côtés</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 8. L'ACTION / RÉSERVATION DIRECTE */}
      <section className="contact" id="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Votre prochain direct commence maintenant</small>
            <h2>Prêt à donner vie à votre événement ?</h2>
            <p>
              Sélectionnez votre pack et réservez l'un de nos 4 créneaux quotidiens
              en quelques clics.
            </p>
          </div>
          <Link className="btn white" href="/reservation">
            Réserver mon direct →
          </Link>
        </div>
      </section>
    </>
  );
}
