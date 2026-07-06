import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Events() {
  return (
    <section className="fade-up" id="events" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Ministry"
          title="Available for Ministry"
          description="Invite Kola Sounds to minister at your next event."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition hover:border-yellow-500"
            >
              <h3 className="mb-4 text-2xl font-bold text-yellow-400">
                {event.title}
              </h3>

              <p className="text-gray-300">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
