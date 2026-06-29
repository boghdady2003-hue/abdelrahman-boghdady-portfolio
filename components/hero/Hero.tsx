"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32 lg:pt-36">

      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          <div className="order-2 lg:order-1">

            <HeroContent />

            <HeroStats />

          </div>

          <div className="order-1 lg:order-2 flex justify-center">

            <HeroImage />

          </div>

        </div>

      </div>

    </section>
  );
}