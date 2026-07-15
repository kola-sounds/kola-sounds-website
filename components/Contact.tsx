"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import { getSettings, SiteSettings } from "@/lib/settings";

export default function Contact() {
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
      <FadeUp>
        <section
          id="contact"
          className="bg-neutral-950 px-6 py-24 text-white"
        >
          <div className="mx-auto max-w-6xl text-center text-gray-400">
            Loading contact information...
          </div>
        </section>
      </FadeUp>
    );
  }

  return (
    <FadeUp>
      <section
        id="contact"
        className="bg-neutral-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            label="Contact"
            title="Invite Kola Sounds"
            description="We would be honoured to minister at your church, conference, worship night or special event."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <ScaleIn>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-lg">

                <h3 className="mb-6 text-2xl font-bold text-yellow-400">
                  Contact Information
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Phone
                    </p>

                    <a
                      href={`tel:${settings.phone}`}
                      className="text-lg font-semibold text-white hover:text-yellow-400"
                    >
                      {settings.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <a
                      href={`mailto:${settings.email}`}
                      className="text-lg font-semibold text-white hover:text-yellow-400"
                    >
                      {settings.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Address
                    </p>

                    <p className="text-lg">
                      {settings.address}
                    </p>
                  </div>

                </div>

              </div>

            </ScaleIn>

            <ScaleIn>

              <div className="rounded-2xl border border-yellow-500/20 bg-neutral-900 p-8 shadow-lg">

                <h3 className="mb-6 text-2xl font-bold text-yellow-400">
                  Book the Ministry
                </h3>

                <p className="leading-8 text-gray-300">
                  We are available for church services, conferences,
                  worship nights, crusades, youth meetings,
                  weddings and other Gospel events.
                </p>

                <a
                  href={`https://wa.me/${settings.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-500"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </ScaleIn>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}
