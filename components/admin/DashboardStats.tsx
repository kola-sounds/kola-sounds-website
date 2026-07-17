"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Stats {
  gallery: number;
  music: number;
  events: number;
  updates: number;
  messages: number;
}

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    gallery: 0,
    music: 0,
    events: 0,
    updates: 0,
    messages: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function count(table: string) {
    const { count } = await supabase
      .from(table)
      .select("*", {
        count: "exact",
        head: true,
      });

    return count ?? 0;
  }

  async function loadStats() {
    const gallery = await count("gallery");
    const music = await count("music");
    const events = await count("events");
    const updates = await count("updates");
    const messages = await count("messages");

    setStats({
      gallery,
      music,
      events,
      updates,
      messages,
    });
  }

  const cards = [
    {
      title: "Gallery",
      value: stats.gallery,
      color: "bg-blue-600",
    },
    {
      title: "Music",
      value: stats.music,
      color: "bg-green-600",
    },
    {
      title: "Events",
      value: stats.events,
      color: "bg-purple-600",
    },
    {
      title: "Updates",
      value: stats.updates,
      color: "bg-yellow-500 text-black",
    },
    {
      title: "Messages",
      value: stats.messages,
      color: "bg-red-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-2xl p-6 shadow-lg ${card.color}`}
        >
          <p className="text-sm uppercase opacity-80">
            {card.title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
