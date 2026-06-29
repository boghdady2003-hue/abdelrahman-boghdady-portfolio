"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-4">
          ABOUT ME
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-12">
          WHO I AM
        </h2>

        <div className="max-w-4xl">

          <p className="text-zinc-400 text-lg leading-10">
            I'm{" "}
            <span className="text-white font-semibold">
              Abdelrahman Boghdady
            </span>
            , a Graphic Designer specializing in{" "}
            <span className="text-violet-400">Branding</span>,
            <span className="text-violet-400">
              {" "}Social Media Design
            </span>
            , and
            <span className="text-violet-400">
              {" "}Visual Identity
            </span>
            .

            <br />
            <br />

            Over the past <span className="text-white font-semibold">5+ years</span>,
            I've worked with businesses across Egypt and the Gulf, helping
            brands create modern, memorable, and conversion-focused visual
            experiences.

            <br />
            <br />

            My goal is to transform ideas into powerful visual identities that
            capture attention, strengthen brands, and leave a lasting impact.
          </p>

        </div>
      </section>
    </Reveal>
  );
}