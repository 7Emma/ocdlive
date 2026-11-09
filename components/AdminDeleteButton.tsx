"use client";

import React from "react";
import { Trash2 } from "lucide-react";

interface AdminDeleteButtonProps {
  confirmMessage?: string;
  title?: string;
  className?: string;
}

export default function AdminDeleteButton({
  confirmMessage = "Confirmer la suppression ?",
  title = "Supprimer",
  className = "admin-logout-btn",
}: AdminDeleteButtonProps) {
  return (
    <button
      type="submit"
      className={className}
      title={title}
      onClick={(e) => {
        if (!window.confirm(confirmMessage)) {
          e.preventDefault();
        }
      }}
    >
      <Trash2 size={16} />
    </button>
  );
}
