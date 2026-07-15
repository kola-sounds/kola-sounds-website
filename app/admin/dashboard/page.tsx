"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import AnalyticsCard from "@/components/admin/AnalyticsCard";
import DashboardChart from "@/components/admin/DashboardChart";
import RecentActivity from "@/components/admin/RecentActivity";
import SystemStatus from "@/components/admin/SystemStatus";
import StorageCard from "@/components/admin/StorageCard";

export default function Dashboard() {
  const [galleryCount, setGalleryCount] = useState(0);
  const [musicCount, setMusicCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [updatesCount, setUpdatesCount] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const { count: gallery } = await supabase
      .from("gallery")
      .select("*", { count: "exact", head: true });

    const { count: music } = await supabase
      .from("music")
      .select("*", { count: "exact", head: true });

    const { count: events } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true });

    const { count: updates } = await supabase
      .from("updates")
      .select("*", { count: "exact", head: true });

    setGalleryCount(gallery ?? 0);
    setMusicCount(music ?? 0);
    setEventsCount(events ?? 0);
    setUpdatesCount(updates ?? 0);
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Welcome to the Kola Sounds Content Management System.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <AnalyticsCard
          title="Gallery"
          value={galleryCount}
          icon="🖼️"
        />

        <AnalyticsCard
          title="Music"
          value={musicCount}
          icon="🎵"
        />

        <AnalyticsCard
          title="Events"
          value={eventsCount}
          icon="📅"
        />

        <AnalyticsCard
          title="Updates"
          value={updatesCount}
          icon="📢"
        />

      </div>

      <DashboardChart
        gallery={galleryCount}
        music={musicCount}
        events={eventsCount}
        updates={updatesCount}
      />

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <h2 className="mb-5 text-2xl font-bold text-yellow-400">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/admin/gallery"
            className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            Upload Photo
          </Link>

          <Link
            href="/admin/music"
            className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            Add Music
          </Link>

          <Link
            href="/admin/events"
            className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            New Event
          </Link>

          <Link
            href="/admin/updates"
            className="rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black hover:bg-yellow-300"
          >
            Publish Update
          </Link>

        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentActivity />

        <SystemStatus />

      </div>

      <StorageCard />

    </div>
  );
}
