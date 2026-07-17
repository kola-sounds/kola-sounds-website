"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  }

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Admin Profile
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your administrator account.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">

        <div className="flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-4xl font-bold text-black">
            {user?.email?.charAt(0).toUpperCase() ?? "A"}
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {user?.email ?? "Administrator"}
            </h2>

            <p className="text-gray-400">
              Kola Sounds CMS Administrator
            </p>
          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-black p-5">
            <p className="text-sm text-gray-400">
              Email
            </p>

            <p className="mt-2 font-semibold">
              {user?.email}
            </p>
          </div>

          <div className="rounded-xl bg-black p-5">
            <p className="text-sm text-gray-400">
              User ID
            </p>

            <p className="mt-2 break-all text-sm">
              {user?.id}
            </p>
          </div>

        </div>

        <button
          onClick={signOut}
          className="mt-10 rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-500"
        >
          Sign Out
        </button>

      </div>

    </div>
  );
}
