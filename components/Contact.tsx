import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="fade-up"
      id="contact"
      className="bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle
          label="Contact"
          title="Invite Kola Sounds"
          description="We would love to worship with your church or ministry."
        />

        <div className="grid gap-8 md:grid-cols-2">

          <div className="space-y-6 rounded-2xl border border-neutral-800 bg-black p-8">

            <div>
              <h3 className="text-xl font-bold text-yellow-400">
                Phone
              </h3>

              <p className="mt-2">
                {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400">
                WhatsApp
              </h3>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="mt-2 block text-green-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400">
                Email
              </h3>

              <p className="mt-2">
                {siteConfig.contact.email}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400">
                Location
              </h3>

              <p className="mt-2">
                {siteConfig.contact.location}
              </p>
            </div>

          </div>

          <div className="flex items-center justify-center rounded-2xl border border-yellow-500 bg-yellow-500 p-8 text-center text-black">

            <div>

              <h3 className="text-3xl font-bold">
                Book Kola Sounds
              </h3>

              <p className="mt-4">
                For worship services, conferences,
                crusades, weddings, youth meetings,
                and special events.
              </p>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                className="mt-8 inline-block rounded-lg bg-black px-8 py-4 font-bold text-white"
              >
                Book via WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
