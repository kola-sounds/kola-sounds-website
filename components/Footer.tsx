"use client";

import { useEffect, useState } from "react";
import {
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { getSettings, SiteSettings } from "@/lib/settings";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Music", href: "#music" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const data = await getSettings();
    setSettings(data);
  }

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              {settings?.ministry_name ?? "Kola Sounds"}
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              {settings?.slogan ??
                "Glorifying God through worship, music and ministry."}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="transition hover:text-yellow-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-yellow-400">
              Contact Us
            </h3>

            <div className="space-y-4">

              <a
                href={`tel:${settings?.phone ?? ""}`}
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                📞 {settings?.phone}
              </a>

              <a
                href={`mailto:${settings?.email ?? ""}`}
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                <FaEnvelope />
                {settings?.email}
              </a>

              <a
                href={`https://wa.me/${settings?.whatsapp ?? ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <p className="text-gray-400">
                📍 {settings?.address}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8">

          <div className="flex justify-center gap-8 text-3xl">

            {settings?.facebook && (
              <a
                href={settings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-125 hover:text-blue-500"
              >
                <FaFacebook />
              </a>
            )}

            {settings?.instagram && (
              <a
                href={settings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-125 hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            )}

            {settings?.youtube && (
              <a
                href={settings.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-125 hover:text-red-500"
              >
                <FaYoutube />
              </a>
            )}

            {settings?.tiktok && (
              <a
                href={settings.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-125"
              >
                <FaTiktok />
              </a>
            )}

          </div>

          <p className="mt-8 text-center text-gray-500">
            © {year} {settings?.ministry_name ?? "Kola Sounds"}.
            All Rights Reserved.
          </p>

          <p className="mt-2 text-center text-gray-600">
            Built with Next.js • Supabase • ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}
