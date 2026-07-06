"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="fade-up" id="gallery" className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Gallery"
          title="Ministry Moments"
          description="Capturing worship moments and God's faithfulness."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.map((photo) => (
            <button
              key={photo}
              onClick={() => setSelected(photo)}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={photo}
                alt="Kola Sounds"
                className="h-80 w-full object-cover transition duration-500 hover:scale-110"
              />
            </button>
          ))}
        </div>

        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          >
            <img
              src={selected}
              alt="Selected"
              className="max-h-[90vh] rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
