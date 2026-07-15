"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/admin/dashboard", label: "📊 Dashboard" },
    { href: "/admin/gallery", label: "🖼 Gallery" },
    { href: "/admin/music", label: "🎵 Music" },
    { href: "/admin/events", label: "📅 Events" },
    { href: "/admin/updates", label: "📢 Updates" },
    { href: "/admin/contact", label: "📞 Contact" },
    { href: "/admin/settings", label: "⚙ Settings" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Mobile Header */}

      <header className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-5 py-4 md:hidden">
        <h1 className="text-2xl font-bold text-yellow-400">
          Kola Sounds
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </header>

      {/* Dark Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 border-r border-neutral-800 bg-neutral-950 p-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="mb-10 hidden md:block">
          <h1 className="text-3xl font-bold text-yellow-400">
            Kola Sounds
          </h1>

          <p className="mt-2 text-gray-400">
            Admin Dashboard
          </p>
        </div>

        <nav className="space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 transition hover:bg-neutral-800 hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 border-t border-neutral-800 pt-6">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}

      <main className="p-6 md:ml-64">
        {children}
      </main>
    </div>
  );
}
