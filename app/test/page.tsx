"use client";

import { supabase } from "@/lib/supabase";

export default function TestPage() {
  async function testConnection() {
    try {
      const { data, error } = await supabase.auth.getSession();

      console.log(data);
      console.log(error);

      alert(
        error
          ? `Error: ${error.message}`
          : "Supabase connection successful!"
      );
    } catch (e) {
      console.error(e);
      alert(`Fetch failed: ${String(e)}`);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <button
        onClick={testConnection}
        className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black"
      >
        Test Supabase Connection
      </button>
    </main>
  );
}
