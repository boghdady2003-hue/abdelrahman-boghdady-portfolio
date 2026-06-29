"use client";

import { useEffect, useState } from "react";

const links = [
  { title: "ABOUT", href: "#about" },
  { title: "SERVICES", href: "#services" },
  { title: "PORTFOLIO", href: "#portfolio" },
  { title: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-violet-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 px-8 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#"
          className="flex items-center gap-3 group shrink-0"
        >
          <span className="text-violet-500 font-black tracking-[7px] text-xl group-hover:text-fuchsia-400 duration-300">
            ENG
          </span>

          <div className="w-px h-6 bg-zinc-700"></div>

          <span className="text-white font-bold tracking-[2px] uppercase text-sm xl:text-base whitespace-nowrap">
            ABDELRAHMAN BOGHDADY
          </span>
        </a>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-12">

          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="
              relative
              uppercase
              tracking-[3px]
              text-sm
              text-zinc-400
              hover:text-violet-400
              duration-300

              after:absolute
              after:left-0
              after:-bottom-2
              after:w-0
              after:h-[2px]
              after:bg-violet-500
              after:duration-300

              hover:after:w-full
              "
            >
              {link.title}
            </a>
          ))}

        </nav>

        {/* Button */}

        <a
          href="#contact"
          className="
          hidden
          md:flex
          items-center
          justify-center
          px-8
          h-14
          rounded-full
          font-semibold
          uppercase
          bg-gradient-to-r
          from-violet-600
          via-purple-600
          to-fuchsia-600
          hover:scale-105
          duration-300
          shadow-[0_0_30px_rgba(139,92,246,.4)]
          "
        >
          LET'S TALK
        </a>

      </div>
    </header>
  );
}