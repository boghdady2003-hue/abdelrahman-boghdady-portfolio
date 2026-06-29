"use client";

export default function HeroContent() {
  return (
    <div className="flex-1 text-center lg:text-left">

      <h2 className="text-violet-400 text-xl sm:text-2xl md:text-3xl font-bold tracking-[8px] uppercase mb-3">
        ENG
      </h2>

      <h1 className="font-[var(--font-space)] text-5xl sm:text-6xl md:text-7xl xl:text-[105px] font-black leading-[0.9] uppercase break-words">
        ABDELRAHMAN
      </h1>

      <h1 className="font-[var(--font-space)] text-5xl sm:text-6xl md:text-7xl xl:text-[105px] font-black leading-[0.9] uppercase mb-8 break-words">
        BOGHDADY
      </h1>

      <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-8 max-w-[620px] mx-auto lg:mx-0">
        Creating impactful branding, social media campaigns, and visual
        identities that help businesses stand out, attract customers, and
        grow with confidence.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

        <a
          href="#portfolio"
          className="
          h-14
          px-8
          flex
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-violet-600
          via-purple-600
          to-fuchsia-600
          hover:scale-105
          duration-300
          font-bold
          uppercase
          shadow-[0_0_35px_rgba(139,92,246,.45)]
          "
        >
          VIEW MY WORK
        </a>

        <a
          href="#contact"
          className="
          h-14
          px-8
          flex
          items-center
          justify-center
          rounded-full
          border
          border-violet-500
          hover:bg-violet-600/20
          hover:border-violet-400
          duration-300
          uppercase
          font-bold
          "
        >
          HIRE ME
        </a>

      </div>

    </div>
  );
}