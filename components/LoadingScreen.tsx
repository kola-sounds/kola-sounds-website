"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1800);

    const finishTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute h-52 w-52 rounded-full bg-yellow-400/20 blur-3xl" />

        <Image
          src="/logo.png"
          alt="Kola Sounds"
          width={150}
          height={150}
          priority
          className="animate-pulse"
        />

        <h1 className="mt-8 text-5xl font-black tracking-wide text-yellow-400">
          KOLA SOUNDS
        </h1>

        <p className="mt-3 uppercase tracking-[0.35em] text-gray-300">
          Sounding Beyond Borders
        </p>

        <div className="mt-12 h-2 w-64 overflow-hidden rounded-full bg-neutral-800">
          <div className="h-full animate-pulse rounded-full bg-yellow-400" />
        </div>

        <p className="mt-6 text-sm tracking-widest text-gray-500">
          Preparing Worship Experience...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
