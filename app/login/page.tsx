"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      console.log("Email:", email);

      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("Supabase result:", result);

      if (result.error) {
        alert(result.error.message);
        return;
      }

      alert("Login successful!");

      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      alert(`Unexpected error: ${String(error)}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-yellow-400">
          Kola Sounds Admin
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-black p-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-black p-3 text-white"
          />

          <button
            onClick={signIn}
            disabled={loading}
            className="w-full rounded-lg bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </div>
    </main>
  );
}
