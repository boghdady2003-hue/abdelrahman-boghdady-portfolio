"use client";

import Reveal from "./Reveal";

const services = [
  {
    title: "Brand Identity",
    desc: "Creating memorable visual identities that make brands stand out and build trust.",
    icon: "🎨",
  },
  {
    title: "Social Media Design",
    desc: "Creative content designed to increase engagement and strengthen your online presence.",
    icon: "📱",
  },
  {
    title: "Advertising Design",
    desc: "High-converting advertisements crafted for digital marketing and paid campaigns.",
    icon: "🚀",
  },
  {
    title: "Print Design",
    desc: "Professional print materials including brochures, business cards, packaging and more.",
    icon: "🖨️",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <Reveal>

        <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-4">
          SERVICES
        </p>

        <h2 className="text-5xl md:text-6xl font-black mb-16">
          WHAT I DO
        </h2>

      </Reveal>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {services.map((service) => (
          <Reveal key={service.title}>

            <div
              className="
              group
              h-full
              rounded-3xl
              border
              border-violet-500/20
              bg-[#111]
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-violet-500
              hover:shadow-[0_0_40px_rgba(139,92,246,.2)]
              "
            >

              <div className="text-6xl">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-5 text-zinc-400 leading-8">
                {service.desc}
              </p>

              <div
                className="
                mt-8
                text-violet-400
                uppercase
                tracking-[3px]
                font-semibold
                opacity-0
                group-hover:opacity-100
                duration-300
                "
              >
                Learn More →
              </div>

            </div>

          </Reveal>
        ))}

      </div>
    </section>
  );
}