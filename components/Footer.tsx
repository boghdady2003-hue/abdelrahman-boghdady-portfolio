"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/10 mt-32 bg-[#050505]">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Left */}

          <div>

            <h2 className="text-4xl md:text-5xl font-black uppercase">
              ABDELRAHMAN BOGHDADY
            </h2>

            <p className="text-zinc-400 mt-5 max-w-lg leading-8">
              Graphic Designer specializing in Branding,
              Social Media Design, Visual Identity,
              and Creative Marketing Solutions.
            </p>

          </div>

          {/* Social */}

          <div>

            <h3 className="uppercase tracking-[4px] text-violet-400 font-semibold mb-6">
              FOLLOW ME
            </h3>

            <div className="flex gap-4">

              <a
                href="https://www.instagram.com/boghdady.gfx?igsh=MWZybWpocHl3MmMwNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_30px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdelrhman-boghdady-929b662b5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_30px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.behance.net/f504b205"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_30px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
              >
                <FaBehance size={22} />
              </a>

              <a
                href="https://wa.me/2001208300287?text=Hello%20Abdelrahman%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[#111] border border-zinc-800 hover:border-violet-500 hover:bg-violet-600/20 hover:shadow-[0_0_30px_rgba(139,92,246,.35)] flex items-center justify-center duration-300 hover:scale-110"
              >
                <FaWhatsapp size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} ABDELRAHMAN BOGHDADY. All Rights Reserved.
          </p>

          <p className="text-zinc-500 text-center md:text-right">
            Designed & Developed by ABDELRAHMAN BOGHDADY
          </p>

        </div>

      </div>

    </footer>
  );
}