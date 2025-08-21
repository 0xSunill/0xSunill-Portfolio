import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col relative z-0 bg-amber-100">
      <div className="hero bg-cover bg-no-repeat bg-center">
        {/* <Navbar /> */}
        <Hero />
      </div>

      {/* <About />
      <Skills />
      <Projects /> */}
      {/* <Experience /> */}

      <div>
        {/* <Contact /> */}
        {/* <StarsCanvas /> */}
        {/* <Links /> */}
      </div>
    </div>
  );
}
