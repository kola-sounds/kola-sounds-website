"use client";

import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import ScaleIn from "@/components/animations/ScaleIn";
import { getEvents, EventItem } from "@/lib/events";

export default function Events() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch (error) {
      console.error("Failed to load events:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FadeUp>
      <section
        id="events"
        className="bg-black px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            label="Upcoming Events"
            title="Join Us in Worship"
            description="Stay updated with our upcoming worship services, concerts, conferences and ministry events."
          />

          {loading ? (
            <div className="mt-16 text-center text-gray-400">
              Loading events...
            </div>
          ) : events.length === 0 ? (
            <div className="mt-16 text-center text-gray-500">
              No upcoming events.
            </div>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {events.map((event) => (

                <ScaleIn key={event.id}>

                  <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg transition hover:-translate-y-2 hover:border-yellow-400">

                    {event.banner_url && (
                      <img
                        src={event.banner_url}
                        alt={event.title}
                        className="h-56 w-full object-cover"
                      />
                    )}

                    <div className="p-6">

                      {event.featured && (
                        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                          Featured Event
                        </span>
                      )}

                      <h3 className="mt-4 text-2xl font-bold text-yellow-400">
                        {event.title}
                      </h3>

                      <p className="mt-4 text-gray-300">
                        {event.description}
                      </p>

                      <div className="mt-6 space-y-2 text-sm text-gray-400">

                        <p>
                          📍 <strong>Venue:</strong> {event.venue}
                        </p>

                        <p>
                          📅 <strong>Date:</strong> {event.event_date}
                        </p>

                        <p>
                          🕒 <strong>Time:</strong> {event.event_time}
                        </p>

                      </div>

                    </div>

                  </div>

                </ScaleIn>

              ))}

            </div>
          )}

          <div className="mt-16 rounded-2xl border border-yellow-500/20 bg-neutral-900 p-10 text-center">

            <h3 className="text-3xl font-bold text-yellow-400">
              Invite Kola Sounds
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Planning a worship service, conference, crusade, youth meeting,
              wedding or any Gospel event? We'd be honoured to minister with
              you.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Invite Us
            </a>

          </div>

        </div>
      </section>
    </FadeUp>
  );
}
