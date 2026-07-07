import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Music() {
  return (
    <section
      id="music"
      className="fade-up bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Music"
          title="Latest Worship Videos"
          description="Be blessed through our worship sessions and subscribe for more."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.social.youtubeVideos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg"
            >
              <div className="aspect-video">
                <iframe
                  src={video}
                  title={`Kola Sounds Video ${index + 1}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
