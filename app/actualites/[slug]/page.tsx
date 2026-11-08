import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { ARTICLES_DATA } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Article non trouvé" };

  return {
    title: `${article.title} — Actualités OCD Live`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      {/* Back button */}
      <div className="container" style={{ marginBottom: "32px" }}>
        <Link
          href="/actualites"
          className="orange-link"
        >
          ← Retour aux actualités
        </Link>
      </div>

      <header className="container" style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "12px", color: "var(--muted)", marginBottom: "16px" }}>
          <span
            style={{
              background: "var(--orange)",
              color: "#170e08",
              fontSize: "10px",
              fontWeight: 800,
              padding: "4px 12px",
              borderRadius: "50px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {article.category}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Calendar className="w-3.5 h-3.5 text-[#f36b0b]" />
            <span>{article.date}</span>
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Clock className="w-3.5 h-3.5 text-[#aaa]" />
            <span>{article.readTime}</span>
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(32px, 4.5vw, 50px)", lineHeight: 1.15, margin: "0 0 16px 0", letterSpacing: "-2px" }}>
          {article.title}
        </h1>

        <p style={{ color: "#d0ceca", fontSize: "17px", lineHeight: 1.7, maxWidth: "780px", margin: 0 }}>
          {article.excerpt}
        </p>
      </header>

      {/* Featured Image */}
      <div className="container" style={{ marginBottom: "50px" }}>
        <div
          style={{
            position: "relative",
            aspectRatio: "16 / 9",
            maxHeight: "500px",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid var(--line)",
            background: "#111",
          }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container" style={{ maxWidth: "820px", marginBottom: "80px" }}>
        <div style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.85, display: "flex", flexDirection: "column", gap: "24px" }}>
          <p>{article.content}</p>

          <p>
            Pour toute question sur la mise en place de ce type de dispositif pour
            votre organisation, nos équipes techniques sont à votre écoute pour un
            diagnostic complet de vos besoins.
          </p>
        </div>

        <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ color: "var(--light)", fontSize: "13px", fontWeight: 700 }}>
            Partager cet article sur vos réseaux
          </span>
          <Link href="/contact" className="btn orange">
            Demander un cadrage live ↗
          </Link>
        </div>
      </div>

      {/* Action Band */}
      <section className="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Directement auprès de l'administrateur</small>
            <h2>Prêt à passer à l'action avec OCD Live ?</h2>
            <p>4 créneaux de direct maximum par jour pour une concentration totale sur votre projet.</p>
          </div>
          <Link className="btn white" href="/contact">
            Réserver un créneau live →
          </Link>
        </div>
      </section>
    </article>
  );
}
