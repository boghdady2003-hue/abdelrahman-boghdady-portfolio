"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Personal Brand",
    category: "Branding",
    image: "/projects/project1.png",
  },
  {
    title: "Creative Campaign",
    category: "Social Media",
    image: "/projects/project2.png",
  },
  {
    title: "Shammalah Real Estate",
    category: "Real Estate",
    image: "/projects/project3.png",
  },
  {
    title: "Hollywood Smile",
    category: "Medical",
    image: "/projects/project4.png",
  },
  {
    title: "Innovative Marketing",
    category: "Logo Design",
    image: "/projects/project5.png",
  },
  {
    title: "Luxury Real Estate",
    category: "Social Media",
    image: "/projects/project6.png",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="portfolio"
        className="max-w-7xl mx-auto px-8 py-32"
      >
        <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-4">
          Portfolio
        </p>

        <h2 className="text-5xl font-black mb-16">
          FEATURED PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <Reveal key={project.title}>

              <div
                onClick={() => setSelectedImage(project.image)}
                className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-3xl
                bg-[#111]
                border
                border-zinc-800
                hover:border-violet-500/50
                duration-500
                hover:-translate-y-2
                "
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={700}
                  className="
                  w-full
                  h-[420px]
                  object-cover
                  duration-700
                  group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  duration-500
                  flex
                  flex-col
                  justify-end
                  p-8
                  "
                >

                  <span className="text-violet-400 uppercase tracking-[4px] text-sm">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold mt-2">
                    {project.title}
                  </h3>

                  <button
                    className="
                    mt-6
                    w-fit
                    px-6
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-600
                    font-semibold
                    uppercase
                    shadow-[0_0_30px_rgba(139,92,246,.4)]
                    "
                  >
                    View Project
                  </button>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
          fixed
          inset-0
          z-50
          bg-black/95
          backdrop-blur-lg
          flex
          items-center
          justify-center
          p-10
          "
        >

          <Image
            src={selectedImage}
            alt="Project"
            width={1400}
            height={1400}
            className="
            max-h-[90vh]
            w-auto
            rounded-3xl
            border
            border-violet-500/30
            shadow-[0_0_80px_rgba(139,92,246,.3)]
            "
          />

        </div>
      )}
    </>
  );
}