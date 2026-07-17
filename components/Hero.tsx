"use client";

import { useEffect, useState } from "react";
import { getSettings, SiteSettings } from "@/lib/settings";

export default function Hero() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const data = await getSettings();
    setSettings(data);
  }

  if (!settings) {
    return (
      <section className="flex h-screen items-center justify-center bg-black text-white">
        Loading...
      </section>
    );
  }

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: settings.hero_image
          ? `url(${settings.hero_image})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        {settings.logo_url && (
          <img
            src={settings.logo_url}
            alt={settings.ministry_name}
            className="mx-auto mb-8 h-28 w-28 rounded-full border-4 border-yellow-400 bg-white object-contain shadow-xl"
          />
        )}

        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          {settings.ministry_name}
        </h1>

        <p className="mt-6 text-2xl font-semibold text-yellow-400">
          {settings.slogan}
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
          {settings.tagline}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="#contact"
            className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
          >
            Book the Ministry
          </a>

          <a
            href="#music"
            className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Listen Now
          </a>

        </div>

      </div>
    </section>
  );
}
