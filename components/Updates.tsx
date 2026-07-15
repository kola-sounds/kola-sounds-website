"use client";

import { useEffect, useState } from "react";
import { getLatestUpdate, UpdateItem } from "@/lib/updates";

export default function Updates() {
  const [update, setUpdate] = useState<UpdateItem | null>(null);

  useEffect(() => {
    loadUpdate();
  }, []);

  async function loadUpdate() {
    const data = await getLatestUpdate();
    setUpdate(data);
  }

  if (!update) return null;

  return (
    <section className="border-y border-yellow-500 bg-yellow-500 py-5 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row">

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            LIVE MINISTRY UPDATE
          </p>

          <h2 className="mt-1 text-2xl font-extrabold">
            {update.title}
          </h2>

          <p className="mt-2">
            {update.message}
          </p>

        </div>

        {update.link && (
          <a
            href={update.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-6 py-3 font-bold text-white transition hover:bg-neutral-800"
          >
            {update.button || "Learn More"}
          </a>
        )}

      </div>
    </section>
  );
}
