"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Music", href: "#music" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#home" className="flex items-center gap-3">

          <Image
            src={siteConfig.theme.logo}
            alt={siteConfig.ministry.name}
            width={55}
            height={55}
            priority
            className="rounded-full"
          />

          <div>

            <h1 className="text-xl font-bold text-yellow-400">
              {siteConfig.ministry.name}
            </h1>

            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              {siteConfig.ministry.slogan}
            </p>

          </div>

        </a>

        <ul className="hidden gap-8 md:flex">

          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition hover:text-yellow-400"
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400 md:block"
        >
          Book Ministry
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-yellow-400 md:hidden"
        >
          ☰
        </button>

      </nav>

      {open && (
        <div className="border-t border-neutral-800 bg-black md:hidden">

          <div className="flex flex-col px-6 py-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}
