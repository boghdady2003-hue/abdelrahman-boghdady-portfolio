import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10 pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-20">

        {/* Left */}
        <div>
          <p className="text-cyan-400 font-semibold mb-3">
            HELLO, I'M
          </p>

          <h1 className="text-7xl font-extrabold leading-tight">
            ENG. Abdelrahman
            <br />
            Boghdady
          </h1>

          <p className="text-xl text-gray-400 mt-6">
            Graphic Designer specializing in Branding,
            Social Media Design and Creative Visual Content.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 duration-300">
              View My Work
            </button>

            <button className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-black duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={450}
            height={450}
            priority
            className="rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}