"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* Top Right Glow */}

      <div
        className="
        absolute
        -top-40
        right-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-violet-700/20
        blur-[180px]
        "
      />

      {/* Bottom Left Glow */}

      <div
        className="
        absolute
        -bottom-40
        -left-20
        w-[600px]
        h-[600px]
        rounded-full
        bg-fuchsia-600/15
        blur-[180px]
        "
      />

      {/* Center Glow */}

      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-violet-500/10
        blur-[160px]
        "
      />
    </>
  );
}