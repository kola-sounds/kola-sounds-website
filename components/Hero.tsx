import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="fade-up relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${siteConfig.theme.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          {siteConfig.ministry.slogan}
        </p>

        <h1 className="text-5xl font-extrabold md:text-7xl">
          {siteConfig.hero.title}
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          {siteConfig.hero.subtitle}
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          {siteConfig.hero.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={siteConfig.hero.primaryButton.link}
            className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            {siteConfig.hero.primaryButton.text}
          </Link>

          <Link
            href={siteConfig.hero.secondaryButton.link}
            className="rounded-full border border-yellow-400 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            {siteConfig.hero.secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
