import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Social() {
  return (
    <section
      id="social"
      className="fade-up bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl text-center">
        <SectionTitle
          label="Follow Us"
          title="Connect With Kola Sounds"
          description="Stay connected through our latest worship videos, ministry updates and inspiring content."
        />

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            ▶ Visit YouTube
          </a>

          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            🎵 Follow us on TikTok
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-yellow-500/20 bg-neutral-900 p-8">
          <p className="text-lg text-gray-300">
            {siteConfig.footer.followText}
          </p>
        </div>
      </div>
    </section>
  );
}
