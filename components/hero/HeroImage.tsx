"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Main Glow */}
      <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[620px] lg:h-[620px] rounded-full bg-violet-700/20 blur-[100px] lg:blur-[160px]" />

      {/* Secondary Glow */}
      <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-fuchsia-600/20 blur-[80px] lg:blur-[120px]" />

      {/* Small Glow */}
      <div className="absolute w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-violet-500/30 blur-[60px] lg:blur-[80px]" />

      {/* Image Card */}
      <div
        className="
        relative
        overflow-hidden
        rounded-[28px]
        lg:rounded-[42px]
        border
        border-violet-500/20
        bg-[#0d0d0d]
        shadow-[0_0_60px_rgba(139,92,246,.25)]
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
          w-[240px]
          sm:w-[300px]
          md:w-[380px]
          lg:w-[430px]
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