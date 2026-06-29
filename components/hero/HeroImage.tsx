"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Main Glow */}
      <div className="absolute w-[620px] h-[620px] rounded-full bg-violet-700/20 blur-[160px]" />

      {/* Secondary Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

      {/* Small Glow */}
      <div className="absolute w-[220px] h-[220px] rounded-full bg-violet-500/30 blur-[80px]" />

      {/* Image Card */}
      <div
        className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-violet-500/20
        bg-[#0d0d0d]
        shadow-[0_0_90px_rgba(139,92,246,.28)]
        transition-all
        duration-500
        hover:scale-[1.03]
        "
      >
        <Image
          src="/profile.jpg"
          alt="Abdelrahman Boghdady"
          width={600}
          height={750}
          priority
          className="
          w-[430px]
          md:w-[500px]
          xl:w-[540px]
          h-auto
          object-cover
          select-none
          "
        />
      </div>

    </div>
  );
}