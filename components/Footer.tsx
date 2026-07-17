"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getSettings, SiteSettings } from "@/lib/settings";

export default function Footer() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const data = await getSettings();
    setSettings(data);
  }

  if (!settings) return null;

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-black text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        {/* Ministry */}

        <div>

          {settings.logo_url && (
            <img
              src={settings.logo_url}
              alt={settings.ministry_name}
              className="mb-5 h-20 w-20 rounded-full bg-white p-2"
            />
          )}

          <h2 className="text-3xl font-bold text-yellow-400">
            {settings.ministry_name}
          </h2>

          <p className="mt-3 text-gray-400">
            {settings.slogan}
          </p>

          <p className="mt-4 leading-7 text-gray-500">
            {settings.tagline}
          </p>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-xl font-bold text-yellow-400">
            Contact
          </h3>

          <div className="space-y-3 text-gray-300">

            <p>📞 {settings.phone}</p>

            <p>📧 {settings.email}</p>

            <p>📍 {settings.address}</p>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="mb-5 text-xl font-bold text-yellow-400">
            Follow Us
          </h3>

          <div className="space-y-3">

            {settings.facebook && (
              <Link
                href={settings.facebook}
                target="_blank"
                className="block hover:text-yellow-400"
              >
                Facebook
              </Link>
            )}

            {settings.instagram && (
              <Link
                href={settings.instagram}
                target="_blank"
                className="block hover:text-yellow-400"
              >
                Instagram
              </Link>
            )}

            {settings.youtube && (
              <Link
                href={settings.youtube}
                target="_blank"
                className="block hover:text-yellow-400"
              >
                YouTube
              </Link>
            )}

            {settings.tiktok && (
              <Link
                href={settings.tiktok}
                target="_blank"
                className="block hover:text-yellow-400"
              >
                TikTok
              </Link>
            )}

          </div>

        </div>

      </div>

      <div className="border-t border-neutral-800 py-6 text-center text-sm text-gray-500">

        <p>
          © {year} {settings.ministry_name}. All Rights Reserved.
        </p>

        {settings.footer_text && (
          <p className="mt-2">
            {settings.footer_text}
          </p>
        )}

      </div>

    </footer>
  );
}
