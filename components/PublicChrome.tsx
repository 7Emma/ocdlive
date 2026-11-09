"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function PublicNavbar() {
  const pathname = usePathname();

  // On masque complètement le header public sur toutes les pages de l'admin
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <Suspense fallback={<div className="h-20" />}>
      <Navbar />
    </Suspense>
  );
}

export function PublicFooter() {
  const pathname = usePathname();

  // On masque complètement le footer public sur toutes les pages de l'admin
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  );
}
