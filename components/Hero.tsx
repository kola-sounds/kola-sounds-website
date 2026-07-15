"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import { getSettings, SiteSettings } from "@/lib/settings";

export default function Hero() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getSettings();
      setSettings(data);
    }

    load();
  }, []);

  return (
    <FadeUp>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${
            settings?.hero_image_url || "/hero.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
            {settings?.tagline}
          </p>

          <h1 className="text-5xl font-extrabold md:text-7xl">
            {settings?.ministry_name}
          </h1>

          <p className="mt-8 text-xl text-gray-300">
            Worship • Music • Ministry
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <Link
              href="#music"
              className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black"
            >
              Listen Now
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}
