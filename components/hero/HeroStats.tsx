"use client";

const stats = [
  {
    number: "5+",
    title: "Years",
    subtitle: "Experience",
  },
  {
    number: "200+",
    title: "Projects",
    subtitle: "Completed",
  },
  {
    number: "50+",
    title: "Clients",
    subtitle: "Worldwide",
  },
  {
    number: "100%",
    title: "Passion",
    subtitle: "Every Project",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-7 mt-16 max-w-2xl">

      {stats.map((item) => (
        <div
          key={item.title}
          className="
          group
          rounded-3xl
          border
          border-violet-500/20
          bg-white/[0.04]
          backdrop-blur-xl
          p-5 sm:p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-violet-500/50
          hover:bg-white/[0.06]
          hover:shadow-[0_0_45px_rgba(139,92,246,.25)]
          "
        >

          <h2
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            text-violet-400
            transition
            duration-300
            group-hover:text-fuchsia-400
            "
          >
            {item.number}
          </h2>

          <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base lg:text-lg text-zinc-400">
            {item.subtitle}
          </p>

        </div>
      ))}

    </div>
  );
}