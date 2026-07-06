import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Music() {
  return (
    <section className="fade-up" id="music" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Music"
          title="Latest Worship Videos"
          description="Watch our latest worship sessions and subscribe to our YouTube channel."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {siteConfig.social.youtubeVideos.map((video) => (
            <div
              key={video}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
            >
              <iframe
                src={video}
                title="Kola Sounds Worship"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <div className="p-4 text-center">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-yellow-400 hover:text-yellow-300"
                >
                  Visit our YouTube Channel
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
