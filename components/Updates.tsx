import { siteConfig } from "@/data/siteConfig";

export default function Updates() {
  return (
    <section className="border-y border-yellow-500 bg-yellow-500 py-5 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row">

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            LIVE MINISTRY UPDATE
          </p>

          <h2 className="mt-1 text-2xl font-extrabold">
            {siteConfig.latestUpdate.title}
          </h2>

          <p className="mt-2">
            {siteConfig.latestUpdate.message}
          </p>

        </div>

        <a
          href={siteConfig.latestUpdate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-black px-6 py-3 font-bold text-white hover:bg-neutral-800"
        >
          {siteConfig.latestUpdate.button}
        </a>

      </div>
    </section>
  );
}	

