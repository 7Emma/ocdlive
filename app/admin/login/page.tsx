"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ShieldCheck, Radio } from "lucide-react";
import { loginAction, type AuthActionState } from "@/app/actions/auth";
import "../admin.css";

const initialState: AuthActionState = {
  success: false,
  message: "",
};

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-box">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, var(--adm-orange), var(--adm-orange-light))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 25px var(--adm-orange-glow)",
              }}
            >
              <Radio size={24} color="#170e08" />
            </div>
          </div>

          <h1 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "6px" }}>
            OCD Live · Console Régie
          </h1>
          <p style={{ fontSize: "13px", color: "var(--adm-text-muted)" }}>
            Accès sécurisé réservé à la direction & à l’équipe de production
          </p>
        </div>

        {/* Feedback message */}
        {state.message && (
          <div
            style={{
              padding: "12px 16px",
              borderRadius: "10px",
              background: state.success ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
              border: `1px solid ${state.success ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
              color: state.success ? "#34d399" : "#f87171",
              fontSize: "13px",
              marginBottom: "24px",
            }}
          >
            {state.message}
          </div>
        )}

        {/* Form */}
        <form action={formAction}>
          <div className="admin-form-group">
            <label className="admin-label" htmlFor="email">
              Identifiant Administrateur
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue="admin@ocdlive.ci"
                placeholder="admin@ocdlive.ci"
                className="admin-input"
                style={{ paddingLeft: "42px" }}
              />
              <Mail
                size={18}
                color="var(--adm-text-muted)"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
            {state.errors?.email && (
              <span style={{ color: "#f87171", fontSize: "12px", marginTop: "4px", display: "block" }}>
                {state.errors.email[0]}
              </span>
            )}
          </div>

          <div className="admin-form-group">
            <label className="admin-label" htmlFor="password">
              Mot de passe sécurisé
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="password"
                name="password"
                type="password"
                required
                defaultValue="Bovan2026!"
                placeholder="••••••••••••"
                className="admin-input"
                style={{ paddingLeft: "42px" }}
              />
              <Lock
                size={18}
                color="var(--adm-text-muted)"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
            {state.errors?.password && (
              <span style={{ color: "#f87171", fontSize: "12px", marginTop: "4px", display: "block" }}>
                {state.errors.password[0]}
              </span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: "var(--adm-text-muted)",
              marginBottom: "24px",
            }}
          >
            <ShieldCheck size={16} color="var(--adm-orange)" />
            <span>Session chiffrée avec contrôle des 4 lives/jour</span>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="admin-btn admin-btn-primary"
            style={{ width: "100%", padding: "14px", fontSize: "14px" }}
          >
            {isPending ? "Connexion à la régie..." : "Accéder à l'administration"}
            <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link
            href="/"
            style={{
              fontSize: "12.5px",
              color: "var(--adm-text-muted)",
              textDecoration: "none",
            }}
          >
            ← Revenir au site public OCD Live
          </Link>
        </div>
      </div>
    </div>
  );
}
