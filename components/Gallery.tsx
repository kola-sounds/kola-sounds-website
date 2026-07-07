import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="fade-up bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Gallery"
          title="Ministry Moments"
          description="Capturing God's faithfulness through worship and ministry."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg"
            >
              <Image
                src={image}
                alt={`Kola Sounds ${index + 1}`}
                width={800}
                height={600}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
