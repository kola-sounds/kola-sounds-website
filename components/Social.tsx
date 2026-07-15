import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";

export default function Social() {
  return (
    <FadeUp>
      <section
        id="social"
        className="bg-black px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            label="Stay Connected"
            title="Follow Kola Sounds"
            description="Join us online for worship sessions, ministry updates and inspiring Gospel content."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ScaleIn>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-red-600 bg-neutral-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-red-500"
              >
                <h3 className="text-2xl font-bold text-red-500">
                  ▶ YouTube
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  Watch our latest worship videos, subscribe to the channel,
                  and share the message of Christ with others.
                </p>

                <span className="mt-6 inline-block font-semibold text-yellow-400">
                  Visit Channel →
                </span>
              </a>
            </ScaleIn>

            <ScaleIn>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-neutral-700 bg-neutral-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
              >
                <h3 className="text-2xl font-bold text-yellow-400">
                  🎵 TikTok
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  Follow us for short worship clips, encouragement,
                  behind-the-scenes moments and ministry updates.
                </p>

                <span className="mt-6 inline-block font-semibold text-yellow-400">
                  Follow Us →
                </span>
              </a>
            </ScaleIn>
          </div>

          <div className="mt-16 rounded-2xl border border-yellow-500/20 bg-neutral-900 p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-400">
              Stay Connected
            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              {siteConfig.footer.followText}
            </p>
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
