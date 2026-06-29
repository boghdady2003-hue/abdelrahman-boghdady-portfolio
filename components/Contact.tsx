"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="uppercase tracking-[6px] text-violet-400 font-semibold mb-4">
        CONTACT
      </p>

      <h2 className="text-5xl md:text-6xl font-black mb-16">
        LET'S WORK TOGETHER
      </h2>

      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT */}

        <div>

          <p className="text-zinc-400 text-lg leading-9 mb-12">
            Have a project in mind? Let's create something unique together.
            I'm always available for freelance work, branding,
            social media design, visual identity, and creative marketing.
          </p>

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center">
                <Mail className="text-violet-400" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-zinc-400">
                  boghdady2003@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center">
                <Phone className="text-violet-400" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-zinc-400">
                  +20 120 830 0287
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center">
                <MapPin className="text-violet-400" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-zinc-400">
                  Ismailia, Egypt
                </p>
              </div>

            </div>

          </div>

          {/* SOCIAL */}

          <div className="flex gap-5 mt-14">

            <a
              href="https://www.instagram.com/boghdady.gfx?igsh=MWZybWpocHl3MmMwNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_25px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/abdelrhman-boghdady-929b662b5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_25px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://www.behance.net/f504b205"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_25px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
            >
              <FaBehance size={22} />
            </a>

            <a
              href="https://wa.me/2001208300287?text=Hello%20Abdelrahman%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_25px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
            >
              <FaWhatsapp size={22} />
            </a>

          </div>

        </div>

        {/* FORM */}

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl bg-[#111] border border-zinc-800 p-5 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl bg-[#111] border border-zinc-800 p-5 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          <textarea
            rows={7}
            placeholder="Your Message"
            className="w-full rounded-2xl bg-[#111] border border-zinc-800 p-5 resize-none outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />

          <button
            className="
            w-full
            py-5
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            via-purple-600
            to-fuchsia-600
            font-bold
            uppercase
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_50px_rgba(139,92,246,.45)]
            "
          >
            SEND MESSAGE
          </button>

        </form>

      </div>

    </section>
  );
}