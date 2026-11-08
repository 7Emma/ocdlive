import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { ARTICLES_DATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actualités & Coulisses Broadcast — OCD Live",
  description:
    "Suivez les actualités d'OCD Live : coulisses de nos productions, conseils pour vos diffusions en direct et innovations broadcast en Afrique.",
};

export default function ActualitesPage() {
  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: "50px" }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> Actualités & Presse
            </div>
            <h1>
              Coulisses, conseils et <em>mouvement du live.</em>
            </h1>
            <p>
              Retrouvez nos retours d'expérience, les coulisses de notre plateau
              à Abidjan et les clés pour réussir vos retransmissions en direct.
            </p>
          </div>
          <Link className="btn orange" href="/contact">
            Planifier un direct ↗
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              style={{
                background: "linear-gradient(145deg, #181818, #101010)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.25s, border-color 0.25s",
              }}
            >
              <div style={{ position: "relative", height: "240px", width: "100%", background: "#111" }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "var(--orange)",
                    color: "#170e08",
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    letterSpacing: "1px",
                  }}
                >
                  {article.category}
                </span>
              </div>

              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "14px", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "12px", color: "var(--muted)", marginBottom: "8px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Calendar className="w-3.5 h-3.5 text-[#f36b0b]" />
                      <span>{article.date}</span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Clock className="w-3.5 h-3.5 text-[#aaa]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 style={{ font: "800 20px/1.3 Manrope, sans-serif", margin: "0 0 10px 0", color: "#fff" }}>
                    <Link href={`/actualites/${article.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {article.title}
                    </Link>
                  </h2>

                  <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                    {article.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "14px" }}>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="orange-link"
                  >
                    Lire l'article complet ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Action Band */}
      <section className="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>L'actualité du direct</small>
            <h2>Vous souhaitez convier nos équipes sur votre événement ?</h2>
            <p>Nous couvrons vos conférences de presse, lancements et sommets d'envergure.</p>
          </div>
          <Link className="btn white" href="/contact">
            Nous contacter →
          </Link>
        </div>
      </section>
    </main>
  );
}
