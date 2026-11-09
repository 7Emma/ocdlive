import { redirect } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Radio,
  CalendarCheck,
  Briefcase,
  FolderKanban,
  Newspaper,
  Film,
  Settings,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { verifyAdminSession, getAdminUser } from "@/lib/auth";
import { getLiveBroadcast, getReservations, getAdminStore } from "@/lib/admin-store";
import { logoutAction } from "@/app/actions/auth";
import "../admin.css";

export const metadata = {
  title: "Console Régie & Administration | OCD Live",
  description: "Espace de gestion des lives, réservations, opportunités et contenus d'OCD Live.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    redirect("/admin/login");
  }

  const user = await getAdminUser();
  const live = await getLiveBroadcast();
  const reservations = await getReservations();
  const store = await getAdminStore();

  const newReservationsCount = reservations.filter((r) => r.status === "NOUVEAU").length;
  const newApplicantsCount = store.applicants.filter((a) => a.status === "NOUVEAU").length;

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <Link href="/admin" className="admin-brand-link">
            <div className="admin-brand-logo-badge">OCD</div>
            <div>
              <div className="admin-brand-title">OCD Live</div>
              <div className="admin-brand-sub">Console Régie</div>
            </div>
          </Link>
        </div>

        {/* Live Broadcast Indicator */}
        <div className="admin-sidebar-monitor">
          <div>
            <div style={{ fontSize: "11px", color: "var(--adm-text-muted)", marginBottom: "2px" }}>
              Signal Sortant
            </div>
            <div className={`monitor-status-pill ${live.isLive ? "is-live" : "is-offline"}`}>
              {live.isLive ? (
                <>
                  <span className="pulsing-dot" />
                  <span>En Direct ({live.viewersCount} viewers)</span>
                </>
              ) : (
                <>
                  <span className="dot-offline" />
                  <span>Régie Hors-Ligne</span>
                </>
              )}
            </div>
          </div>
          <Link
            href="/admin/lives"
            style={{
              fontSize: "11px",
              color: "var(--adm-orange)",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Piloter →
          </Link>
        </div>

        {/* Navigation */}
        <nav className="admin-nav">
          <div className="admin-nav-category">Pilotage Opérationnel</div>

          <Link href="/admin" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <LayoutDashboard size={18} />
              <span>Vue d'ensemble</span>
            </div>
          </Link>

          <Link href="/admin/lives" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <Radio size={18} />
              <span>Régie & Direct</span>
            </div>
            {live.isLive && (
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ff3333",
                  boxShadow: "0 0 6px #ff3333",
                }}
              />
            )}
          </Link>

          <Link href="/admin/reservations" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <CalendarCheck size={18} />
              <span>Devis & Réservations</span>
            </div>
            {newReservationsCount > 0 && (
              <span className="admin-nav-badge">{newReservationsCount}</span>
            )}
          </Link>

          <Link href="/admin/opportunites" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <Briefcase size={18} />
              <span>Mouvement #OCD</span>
            </div>
            {newApplicantsCount > 0 && (
              <span className="admin-nav-badge">{newApplicantsCount}</span>
            )}
          </Link>

          <div className="admin-nav-category">Contenus & Médias</div>

          <Link href="/admin/realisations" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <FolderKanban size={18} />
              <span>Portfolio / Projets</span>
            </div>
          </Link>

          <Link href="/admin/actualites" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <Newspaper size={18} />
              <span>Actualités & Presse</span>
            </div>
          </Link>

          <Link href="/admin/mouvement-bovan" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <Film size={18} />
              <span>Vidéos Bovan & Galerie</span>
            </div>
          </Link>

          <div className="admin-nav-category">Système</div>

          <Link href="/admin/parametres" className="admin-nav-link">
            <div className="admin-nav-item-left">
              <Settings size={18} />
              <span>Paramètres & Quotas</span>
            </div>
          </Link>
        </nav>

        {/* User Card & Logout */}
        <div className="admin-sidebar-footer">
          <div className="admin-user-card">
            <div className="admin-user-info">
              <div className="admin-user-avatar">BV</div>
              <div>
                <div className="admin-user-name">{user?.name || "Bovan (Direction)"}</div>
                <div className="admin-user-role">{user?.role || "Régie Master"}</div>
              </div>
            </div>

            <form action={logoutAction}>
              <button type="submit" className="admin-logout-btn" title="Se déconnecter">
                <LogOut size={18} />
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main Panel */}
      <div className="admin-main">
        {/* Top Header */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <div className="admin-quota-chip">
              <span className="quota-indicator" />
              <span>Règle d'or : <strong>Max 4 lives / jour</strong> (Qualité garantie)</span>
            </div>
          </div>

          <div className="admin-topbar-right">
            <Link href="/" target="_blank" className="site-preview-btn">
              <span>Voir le site public</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-page-body">{children}</main>
      </div>
    </div>
  );
}
