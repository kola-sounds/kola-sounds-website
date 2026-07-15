"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSettings, SiteSettings } from "@/lib/settings";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Music", href: "#music" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    loadSettings();

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function loadSettings() {
    const data = await getSettings();
    setSettings(data);
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {settings?.hero_image && (
            <img
              src={settings.hero_image}
              alt={settings.ministry_name}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}

          <span className="text-2xl font-extrabold tracking-wide text-yellow-400">
            {settings?.ministry_name ?? "Kola Sounds"}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="text-3xl text-yellow-400 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

      </div>

      {menuOpen && (
        <div className="border-t border-neutral-800 bg-black md:hidden">

          <nav className="flex flex-col py-4">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 text-white transition hover:bg-neutral-900 hover:text-yellow-400"
              >
                {item.name}
              </a>
            ))}

          </nav>

        </div>
      )}
    </header>
  );
}
