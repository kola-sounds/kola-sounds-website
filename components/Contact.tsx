"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import { getSettings, SiteSettings } from "@/lib/settings";
import { sendMessage } from "@/lib/messages";

export default function Contact() {
  const [settings, setSettings] =useState<SiteSettings | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const data = await getSettings();
    setSettings(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Please enter your name and message.");
      return;
    }

    try {
      setSending(true);

      await sendMessage({
        name,
        email,
        phone,
        subject,
        message,
      });

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  }

  if (!settings) {
    return (
      <FadeUp>
        <section
          id="contact"
          className="bg-neutral-950 px-6 py-24 text-white"
        >
          <div className="mx-auto max-w-6xl text-center text-gray-400">
            Loading contact information...
          </div>
        </section>
      </FadeUp>
    );
  }

  return (
    <FadeUp>
      <section
        id="contact"
        className="bg-neutral-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            label="Contact"
            title="Invite Kola Sounds"
            description="We would be honoured to minister at your church, conference, worship night, crusade, wedding or special event."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <ScaleIn>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-lg">

                <h3 className="mb-6 text-2xl font-bold text-yellow-400">
                  Contact Information
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Phone
                    </p>

                    <a
                      href={`tel:${settings.phone}`}
                      className="text-lg font-semibold text-white hover:text-yellow-400"
                    >
                      {settings.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Email
                    </p>

                    <a
                      href={`mailto:${settings.email}`}
                      className="text-lg font-semibold text-white hover:text-yellow-400"
                    >
                      {settings.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Address
                    </p>

                    <p className="text-lg">
                      {settings.address}
                    </p>
                  </div>

                </div>

              </div>

            </ScaleIn>

            <ScaleIn>

              <div className="rounded-2xl border border-yellow-500/20 bg-neutral-900 p-8 shadow-lg">

                <h3 className="mb-6 text-2xl font-bold text-yellow-400">
                  Book the Ministry
                </h3>

                <p className="leading-8 text-gray-300">
                  We are available for church services,
                  conferences, worship nights,
                  crusades, youth meetings,
                  weddings and Gospel events.
                </p>

                <a
                  href={`https://wa.me/${settings.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-500"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </ScaleIn>

          </div>

          <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900 p-8">

            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Send Us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4"
            >

              <input
                className="rounded-lg bg-black p-3"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="rounded-lg bg-black p-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="rounded-lg bg-black p-3"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                className="rounded-lg bg-black p-3"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />

              <textarea
                rows={6}
                className="rounded-lg bg-black p-3"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={sending}
                className="rounded-lg bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}
