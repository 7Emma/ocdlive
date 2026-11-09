import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "ocd_admin_session";
// Default credentials for OCD Live Administration
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@ocdlive.com";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Bovan2026!";
const SESSION_TOKEN = "ocd_admin_token_authenticated_2026";

export interface AdminUser {
  email: string;
  role: string;
  name: string;
}

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return token === SESSION_TOKEN;
}

export async function setAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, SESSION_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}

export async function getAdminUser(): Promise<AdminUser | null> {
  const isAuth = await verifyAdminSession();
  if (!isAuth) return null;
  return {
    email: ADMIN_EMAIL,
    role: "Super Admin · Régie Master",
    name: "Direction OCD Live (Bovan)",
  };
}
