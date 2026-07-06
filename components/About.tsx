import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="fade-up bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="About Us"
          title={siteConfig.about.title}
          description={siteConfig.about.description}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-lg leading-8 text-gray-300">
              {siteConfig.about.content}
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-neutral-900 p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-300">
              {siteConfig.about.mission}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {siteConfig.about.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-neutral-800 bg-black p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-yellow-500"
                >
                  <p className="font-semibold text-yellow-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
