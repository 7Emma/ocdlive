"use server";

import { redirect } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD, setAdminSession, clearAdminSession } from "@/lib/auth";

export interface AuthActionState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function loginAction(
  _prevState: AuthActionState | null,
  formData: FormData
): Promise<AuthActionState> {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  const errors: Record<string, string[]> = {};

  if (!email) {
    errors.email = ["Veuillez renseigner votre email administrateur."];
  }

  if (!password) {
    errors.password = ["Le mot de passe est obligatoire."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs.",
      errors,
    };
  }

  // Verify credentials
  const emailMatch = email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  const passwordMatch = password === ADMIN_PASSWORD;

  if (!emailMatch || !passwordMatch) {
    return {
      success: false,
      message: "Identifiants invalides. Vérifiez l'email et le mot de passe administrateur.",
      errors: {
        credentials: ["Email ou mot de passe incorrect."],
      },
    };
  }

  // Create session
  await setAdminSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await clearAdminSession();
  redirect("/admin/login");
}
