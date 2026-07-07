import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Events() {
  return (
    <section
      id="events"
      className="fade-up bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Ministry"
          title="Where We Minister"
          description="We are available to minister through worship in churches, conferences, crusades, and special events."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.events.map((event, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >
              <h3 className="mb-4 text-2xl font-bold text-yellow-400">
                {event.title}
              </h3>

              <p className="leading-7 text-gray-300">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-yellow-500/20 bg-neutral-900 p-10 text-center">
          <h3 className="text-3xl font-bold text-yellow-400">
            Invite Kola Sounds
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            We would be honoured to minister at your church service,
            conference, worship night, crusade, wedding, youth meeting or
            special Gospel event.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Invite Us
          </a>
        </div>
      </div>
    </section>
  );
}
