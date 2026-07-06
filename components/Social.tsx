export default function Social() {
  return (
    <section className="fade-up" className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl text-center">

        <p className="uppercase tracking-[0.4em] text-yellow-400">
          Connect With Us
        </p>

        <h2 className="mt-4 text-4xl font-extrabold">
          Follow Kola Sounds
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Stay connected for worship videos, ministry updates,
          live sessions and upcoming events.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          <a
            href="https://youtube.com/@soundsofgrace-d5r?si=l4GIw_IF5JXw5JY3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-red-600 p-8 transition hover:bg-red-600"
          >
            <h3 className="text-2xl font-bold">
              ▶ Subscribe on YouTube
            </h3>

            <p className="mt-3 text-gray-300">
              Watch worship sessions, praise songs and ministry videos.
            </p>
          </a>

          <a
            href="https://www.tiktok.com/@kolasoundsofgrace?_r=1&_t=ZS-97npULfD81l"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-yellow-500 p-8 transition hover:bg-yellow-500 hover:text-black"
          >
            <h3 className="text-2xl font-bold">
              🎵 Follow us on TikTok
            </h3>

            <p className="mt-3 font-semibold">
              @kolasoundsofgrace
            </p>

            <p className="mt-4">
              Worship moments, behind-the-scenes content,
              ministry updates and short inspirational videos.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
