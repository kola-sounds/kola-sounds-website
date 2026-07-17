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
    <section className="border-y border-yellow-500 bg-yellow-400 py-8 text-black">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em]">
          Latest Ministry Update
        </p>

        <h2 className="mt-3 text-3xl font-extrabold">
          {update.title}
        </h2>

        {update.image_url && (
          <img
            src={update.image_url}
            alt={update.title}
            className="mx-auto mt-6 max-h-80 rounded-xl shadow-lg"
          />
        )}

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          {update.content}
        </p>

      </div>
    </section>
  );
}
