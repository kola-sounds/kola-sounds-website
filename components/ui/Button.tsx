"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",
    secondary: "bg-neutral-700 text-white hover:bg-neutral-600",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  return (
    <button
      {...props}
      className={`rounded-lg px-4 py-2 font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
