import Link from "next/link";
import {
  LIVE_FORMATS,
  PRICING_OFFERS,
} from "@/lib/data";
import ScrollToTop from "@/components/ScrollToTop";
import BovanCommunitySection from "@/components/BovanCommunitySection";
import "./home.css";

export default function Home() {
  return (
    <>
      <ScrollToTop />

      {/* 1. HERO — LES OPPORTUNITÉS C'EST DEHORS AVEC CARTE D'AFRIQUE */}
      <section className="hero" id="home">
        {/* Arc croissant lumineux orange en haut à gauche */}
        <div className="hero-crescent-left" aria-hidden="true" />
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow">
            <i /> Opportunités C'est Dehors · OCD Live Lomé
          </div>
          <h1>
            Les opportunités,
            <br />
            c'est <em>dehors.</em>
          </h1>
          <p>
            On ne réussit pas enfermé dans sa chambre. OCD Live est la scène, le
            plateau et le direct où l'on filme ceux qui sortent, qui bougent et
            qui construisent. L’expérience du live, pensée autrement.
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
            <span /> Quand vous sortez, nous mettons nos caméras au service de
            votre voix.
          </div>
        </div>
        <div className="container hero-bottom">
          <span>OCD LIVE — HUB LOMÉ (TOGO) · CRÉATION & DIFFUSION DIRECTE</span>
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
        <div
          className="container"
          style={{ maxWidth: "860px", textAlign: "center" }}
        >
          <label
            style={{
              display: "inline-flex",
              justifyContent: "center",
              marginBottom: "14px",
            }}
          >
            Le Constat · Pourquoi sortir
          </label>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Dans sa chambre, rien ne se passe.{" "}
            <em>C'est dehors que tout se joue.</em>
          </h2>
          <p
            style={{
              color: "#d0ceca",
              fontSize: "16px",
              lineHeight: 1.85,
              margin: "0 0 20px",
            }}
          >
            Rester chez soi en attendant une opportunité ne mène nulle part.
            C'est sur le terrain, dans les rencontres, les conférences, les
            concerts et les plateaux d'échanges que se signent les contrats et
            que les ambitions se concrétisent.
          </p>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "14px",
              lineHeight: 1.8,
              margin: "0 auto 30px",
              maxWidth: "760px",
            }}
          >
            <strong>OCD signifie « Opportunités C'est Dehors ».</strong> Notre
            rôle est de poser nos caméras 4K et nos régies mobiles au cœur de
            cette énergie, pour que votre action soit vue, entendue et diffusée
            avec l'exigence d'une grande chaîne de télévision.
          </p>
          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
                Sur le terrain avec votre public ou à distance en streaming
                multiplateforme : choisissez la configuration adaptée à votre
                événement.
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span className="live-innovative-badge">{fmt.badge}</span>
                    <span
                      style={{
                        fontSize: "24px",
                        color:
                          fmt.id === "live-presentiel"
                            ? "var(--orange)"
                            : "#fff",
                      }}
                    >
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
                    Réserver en{" "}
                    {fmt.id === "live-presentiel" ? "présentiel" : "à distance"}{" "}
                    →
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
                La captation de vos événements avec une réalisation multicaméra
                soignée et une diffusion en direct.
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
                Des contenus vidéo de standard cinématographique conçus pour
                valoriser vos marques et projets.
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
                Une diffusion multiplateforme robuste et sécurisée pour
                connecter votre événement au monde entier.
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
                Régie son, lumière, projection et retour écran pour vos congrès,
                sommets et remises de prix.
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
                Formats courts verticaux (Reels, TikTok), capsules d'interviews
                et teasers post-événement.
              </p>
              <Link href="/services">↗</Link>
            </article>
          </div>
        </div>
      </section>

      {/* 4. TECHNIQUE BROADCAST & CAMÉRAS LIVE */}
      <section className="about" id="broadcast">
        <div className="about-photo">
          <img
            src="/images/live-camera-broadcast.jpg"
            alt="Caméra Broadcast 4K et Régie en Direct — OCD Live"
            style={{ objectPosition: "center center" }}
          />
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "50px",
              border: "1px solid rgba(243, 107, 11, 0.6)",
              background: "rgba(0, 0, 0, 0.85)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#ff3b30",
                boxShadow: "0 0 10px #ff3b30",
              }}
            />
            RÉGIE DIRECT 4K · CAMÉRAS CINÉMA & MULTICAM
          </span>
        </div>
        <div className="about-copy">
          <label>
            <i
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--orange)",
                display: "inline-block",
              }}
            />
            Technique Broadcast & Immersion Terrain
          </label>
          <h2>
            Des caméras de pointe pour capter{" "}
            <em>l'intensité du direct.</em>
          </h2>
          <p
            style={{
              color: "#e0deda",
              fontSize: "15px",
              lineHeight: 1.8,
              margin: "18px 0",
            }}
          >
            Sur notre plateau studio insonorisé à Lomé ou déployées au cœur de votre
            boutique, entreprise ou événement, nos régies mobiles multicaméras 4K
            et nos optiques broadcast subliment chaque geste, chaque émotion et
            chaque vente en direct.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "16px",
              margin: "24px 0 28px",
              padding: "18px 20px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
            }}
          >
            <div>
              <b
                style={{
                  color: "var(--orange)",
                  fontSize: "22px",
                  display: "block",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                4K HDR
              </b>
              <small
                style={{
                  color: "#aaa",
                  fontSize: "11px",
                  lineHeight: 1.4,
                  display: "block",
                }}
              >
                Optiques cinéma & étalonnage live
              </small>
            </div>
            <div>
              <b
                style={{
                  color: "var(--orange)",
                  fontSize: "22px",
                  display: "block",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Starlink
              </b>
              <small
                style={{
                  color: "#aaa",
                  fontSize: "11px",
                  lineHeight: 1.4,
                  display: "block",
                }}
              >
                Liaison satellite sans coupure
              </small>
            </div>
            <div>
              <b
                style={{
                  color: "var(--orange)",
                  fontSize: "22px",
                  display: "block",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                Multi-Flux
              </b>
              <small
                style={{
                  color: "#aaa",
                  fontSize: "11px",
                  lineHeight: 1.4,
                  display: "block",
                }}
              >
                Streaming simultané TikTok & YouTube
              </small>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link className="btn orange" href="/reservation">
              Réserver un créneau live ↗
            </Link>
            <Link className="btn outline" href="/a-propos">
              Découvrir la vision & l'équipe →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. GÉNÉRATION OCD — LE MOUVEMENT DU TERRAIN */}
      <BovanCommunitySection />

      {/* 6. LE PORTFOLIO & LES RÉALISATIONS */}
      <section className="section work" id="work">
        <div className="container">
          <div className="section-head">
            <div>
              <label>Nos réalisations</label>
              <h2>
                Le savoir-faire <em>en images.</em>
              </h2>
              <p>
                Découvrez une sélection de sommets, d'émissions et de
                productions signées OCD Live.
              </p>
            </div>
            <Link className="btn outline" href="/realisations">
              Voir toutes les réalisations ↗
            </Link>
          </div>
          <div className="work-grid">
            <Link
              className="work-card large"
              href="/realisations/sommet-afrique-finance-2026"
            >
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
            <Link
              className="work-card"
              href="/realisations/plateau-talk-tech-africa"
            >
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
            <Link
              className="work-card"
              href="/realisations/forum-international-energies-durables"
            >
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
            Régies mobiles 4K et plateau insonorisé basés à Lomé, opérant dans
            toute la sous-région.
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
                Règle d'exigence broadcast :{" "}
                <strong>4 créneaux de direct maximum par jour</strong> avec une
                <strong>
                  {" "}
                  équipe personnalisée mobilisée directement dans vos locaux
                </strong>{" "}
                ou en studio.
              </p>
            </div>
            <Link className="btn orange" href="/tarifs">
              Voir la grille complète (6 packs) →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--orange)",
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {offer.period || "Live OCD"}
                    </span>
                  </div>
                  <h3
                    style={{
                      font: "800 20px Manrope, sans-serif",
                      margin: "0 0 8px 0",
                      color: "#fff",
                    }}
                  >
                    {offer.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "13px",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {offer.description}
                  </p>
                  <div
                    style={{
                      font: "900 28px Manrope, sans-serif",
                      color: "var(--orange)",
                      margin: "16px 0 6px 0",
                    }}
                  >
                    {offer.price}
                  </div>
                  <small
                    style={{
                      color: "#aaa",
                      fontSize: "11px",
                      display: "block",
                    }}
                  >
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
              Sélectionnez votre pack et réservez l'un de nos 4 créneaux
              quotidiens en quelques clics.
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
