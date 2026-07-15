"use client";

import { useEffect, useState } from "react";
import FadeUp from "@/components/animations/FadeUp";
import SectionTitle from "@/components/SectionTitle";
import { getMusic, MusicItem } from "@/lib/music";

export default function Music() {
  const [music, setMusic] = useState<MusicItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMusic();
  }, []);

  async function loadMusic() {
    const data = await getMusic();
    setMusic(data);
    setLoading(false);
  }

  return (
    <FadeUp>
      <section
        id="music"
        className="bg-black px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            label="Music"
            title="Latest Worship Music"
            description="Listen to our latest worship songs and watch our ministry on YouTube."
          />

          {loading ? (
            <p className="mt-10 text-center text-gray-400">
              Loading music...
            </p>
          ) : music.length === 0 ? (
            <p className="mt-10 text-center text-gray-500">
              No music uploaded yet.
            </p>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {music.map((song) => (

                <div
                  key={song.id}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
                >

                  <h3 className="text-xl font-bold text-yellow-400">
                    {song.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {song.artist}
                  </p>

                  <p className="mt-4 text-sm text-gray-300">
                    {song.description}
                  </p>

                  {song.audio_url && (
                    <audio
                      controls
                      className="mt-5 w-full"
                      src={song.audio_url}
                    />
                  )}

                  {song.youtube_url && (
                    <a
                      href={song.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black"
                    >
                      Watch on YouTube
                    </a>
                  )}

                </div>

              ))}

            </div>
          )}

        </div>
      </section>
    </FadeUp>
  );
}
