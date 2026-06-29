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

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <p className="text-zinc-400 text-lg leading-10">
              I'm <span className="text-white font-semibold">Abdelrahman Boghdady</span>,
              a Graphic Designer specializing in <span className="text-violet-400">Branding</span>,
              <span className="text-violet-400"> Social Media Design</span>, and
              <span className="text-violet-400"> Visual Identity</span>.

              <br /><br />

              Over the past 5+ years, I've worked with businesses across Egypt
              and the Gulf, helping brands create modern, memorable, and
              conversion-focused visual experiences.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl border border-violet-500/20 bg-[#111] p-8 hover:border-violet-500 duration-300 hover:-translate-y-2">
              <h3 className="text-6xl font-black text-violet-400">
                5+
              </h3>

              <p className="mt-4 text-zinc-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-[#111] p-8 hover:border-violet-500 duration-300 hover:-translate-y-2">
              <h3 className="text-6xl font-black text-violet-400">
                200+
              </h3>

              <p className="mt-4 text-zinc-400">
                Projects Completed
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-[#111] p-8 hover:border-violet-500 duration-300 hover:-translate-y-2">
              <h3 className="text-6xl font-black text-violet-400">
                50+
              </h3>

              <p className="mt-4 text-zinc-400">
                Happy Clients
              </p>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-[#111] p-8 hover:border-violet-500 duration-300 hover:-translate-y-2">
              <h3 className="text-6xl font-black text-violet-400">
                100%
              </h3>

              <p className="mt-4 text-zinc-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}