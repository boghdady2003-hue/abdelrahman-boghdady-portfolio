"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 lg:pt-36">

      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          <div>

            <HeroContent />

            <HeroStats />

          </div>

          <HeroImage />

        </div>

      </div>

    </section>
  );
}