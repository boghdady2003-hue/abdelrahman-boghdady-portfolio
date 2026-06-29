"use client";

const skills = [
  { name: "Adobe Photoshop", level: 98 },
  { name: "Adobe Illustrator", level: 95 },
  { name: "Adobe InDesign", level: 90 },
  { name: "Adobe After Effects", level: 75 },
  { name: "Figma", level: 85 },
  { name: "Brand Identity", level: 96 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="uppercase tracking-[6px] text-violet-400 font-semibold mb-4">
        SKILLS
      </p>

      <h2 className="text-5xl md:text-6xl font-black mb-16">
        MY EXPERTISE
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
            group
            rounded-3xl
            border
            border-violet-500/20
            bg-white/[0.04]
            backdrop-blur-xl
            p-8
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-violet-500
            hover:shadow-[0_0_40px_rgba(139,92,246,.2)]
            "
          >

            <div className="flex justify-between items-center mb-5">

              <h3 className="text-2xl font-bold">
                {skill.name}
              </h3>

              <span className="text-violet-400 text-xl font-black">
                {skill.level}%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-zinc-800 overflow-hidden">

              <div
                className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-violet-600
                via-purple-500
                to-fuchsia-500
                duration-700
                group-hover:brightness-125
                "
                style={{ width: `${skill.level}%` }}
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}