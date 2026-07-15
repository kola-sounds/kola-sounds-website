"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import SectionTitle from "@/components/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import { getGallery } from "@/lib/gallery";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {
      const data = await getGallery();
      setGallery(data);
    } catch (error) {
      console.error("Failed to load gallery:", error);
    } finally {
      setLoading(false);
    }
  }

  const slides = gallery.map((item) => ({
    src: item.image_url,
  }));

  return (
    <FadeUp>
      <section
        id="gallery"
        className="bg-neutral-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            label="Gallery"
            title="Ministry Moments"
            description="Capturing God's faithfulness through worship, outreach, conferences and ministry."
          />

          {loading ? (
            <div className="mt-16 text-center text-gray-400">
              Loading gallery...
            </div>
          ) : gallery.length === 0 ? (
            <div className="mt-16 text-center text-gray-500">
              No gallery images yet.
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, i) => (
                <ScaleIn key={item.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className="group w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
                  >
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="p-5 text-left">
                      <h3 className="text-lg font-bold text-yellow-400">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </button>
                </ScaleIn>
              ))}
            </div>
          )}

        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={slides}
        />
      </section>
    </FadeUp>
  );
}
