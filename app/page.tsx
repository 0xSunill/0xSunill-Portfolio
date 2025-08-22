import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/aurora-waves.svg"
          alt=""
          className="hero-bg w-full h-full object-cover opacity-90 pointer-events-none select-none"
        />
      </div>
      <Hero />
      <About />
      <Skills />

      <Projects />
      <Contact />
      <Footer />
      {/* later sections: wrap with <section className="container-pg mt-10"><div className="card p-6 sm:p-10">...</div></section> */}

    </main>
  );
}
