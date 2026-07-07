import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="fade-up bg-neutral-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Contact"
          title="Invite Kola Sounds"
          description="We'd love to minister at your church or event. Reach out to us using the details below."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-yellow-400 hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-yellow-400 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Location</p>
                <p>{siteConfig.contact.location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-neutral-900 p-8">
            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Book the Ministry
            </h3>

            <p className="mb-8 leading-8 text-gray-300">
              Whether it's a church service, worship night, conference,
              crusade, youth meeting, wedding or any Gospel event, Kola Sounds
              is available to minister and glorify God through worship.
            </p>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Invite Us via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
