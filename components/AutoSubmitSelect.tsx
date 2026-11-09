"use client";

import React from "react";

export interface AutoSubmitSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export default function AutoSubmitSelect({
  children,
  className = "admin-select",
  onChange,
  ...props
}: AutoSubmitSelectProps) {
  return (
    <select
      className={className}
      {...props}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        e.currentTarget.form?.requestSubmit();
      }}
    >
      {children}
    </select>
  );
}
