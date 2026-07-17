"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function NotificationBell() {
  const [count, setCount] = useState(0);

  async function loadUnread() {
    const { count, error } = await supabase
      .from("messages")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("is_read", false);

    if (!error) {
      setCount(count ?? 0);
    }
  }

  useEffect(() => {
    loadUnread();

    // Use a unique channel name every time
    const channel = supabase
      .channel(`notification-bell-${Math.random()}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        () => {
          loadUnread();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <Link
      href="/admin/contact"
      className="relative flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800"
    >
      🔔

      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
