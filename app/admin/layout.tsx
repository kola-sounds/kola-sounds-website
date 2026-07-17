"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Image,
  Music,
  Calendar,
  Bell,
  Settings,
  Mail,
  Globe,
} from "lucide-react";

import LogoutButton from "@/components/admin/LogoutButton";
import NotificationBell from "@/components/admin/NotificationBell";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/gallery",
      label: "Gallery",
      icon: Image,
    },
    {
      href: "/admin/music",
      label: "Music",
      icon: Music,
    },
    {
      href: "/admin/events",
      label: "Events",
      icon: Calendar,
    },
    {
      href: "/admin/updates",
      label: "Updates",
      icon: Bell,
    },
    {
      href: "/admin/contact",
      label: "Messages",
      icon: Mail,
    },
    {
      href: "/admin/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Mobile Header */}

      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-5 py-4 md:hidden">

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-neutral-800"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <h1 className="text-xl font-bold text-yellow-400">
          Kola Sounds
        </h1>

        <NotificationBell />

      </header>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-neutral-800 bg-neutral-950 transition-transform duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}

        md:translate-x-0`}
      >
        <div className="border-b border-neutral-800 p-6">

          <h1 className="text-3xl font-bold text-yellow-400">
            Kola Sounds
          </h1>

          <p className="mt-2 text-gray-400">
            Content Management System
          </p>

        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto p-5">

          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition

                ${
                  pathname === item.href
                    ? "bg-yellow-400 text-black"
                    : "hover:bg-neutral-800 hover:text-yellow-400"
                }`}
              >
                <Icon size={20} />

                {item.label}
              </Link>
            );
          })}

        </nav>

        <div className="space-y-3 border-t border-neutral-800 p-5">

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-yellow-400 px-4 py-3 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            <Globe size={18} />

            View Website
          </Link>

          <LogoutButton />

        </div>

      </aside>

      {/* Desktop Header */}

      <header className="sticky top-0 z-30 hidden h-20 items-center justify-between border-b border-neutral-800 bg-neutral-950 px-8 md:ml-72 md:flex">

        <div>

          <h2 className="text-2xl font-bold">
            Admin Dashboard
          </h2>

          <p className="text-sm text-gray-400">
            Manage Kola Sounds website
          </p>

        </div>

        <div className="flex items-center gap-5">

          <NotificationBell />

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-black">
            A
          </div>

        </div>

      </header>

      {/* Main */}

      <main className="p-6 md:ml-72">
        {children}
      </main>

    </div>
  );
}
