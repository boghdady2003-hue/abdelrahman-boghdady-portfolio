import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Skills />

      <Portfolio />

      <Contact />

      <Footer />

    </main>
  );
}