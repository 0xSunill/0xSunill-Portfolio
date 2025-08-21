"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { ComputersCanvas } from "./canvas";

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: [ "Full Stack Web Developer", " A Blockchain Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated SVG background */}
     

      {/* Content row: text left, canvas right */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 sm:px-10">
        {/* top-aligned row */}
        <div className="h-full flex flex-col  items-center justify-center gap-10">
          {/* LEFT: Copy with accent line */}
          <div className="lg:flex-[0.5] w-full pt-15">
            <div className="flex items-center justify-center text-center ">


              <div className="flex flex-col gap-4">
                <h1 className="font-black text-[40px] sm:text-[56px] lg:text-[60px] leading-tight">
                  <span className="bg-gradient-to-r from-[#f59e0b] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
                    HEY I AM SUNIL REDDY
                  </span>
                </h1>

                <h1 className="font-black text-[23px] sm:text-[36px] lg:text-[40px] leading-tight">
                  {/* Aurora gradient text */}
                  <span className="bg-gradient-to-r text-center from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
                    ✨{text}
                  </span>


                </h1>

              </div>
            </div>
          </div>

          {/* RIGHT: 3D computer canvas (taller, not absolutely positioned) */}
          <div className="lg:flex-[0.5] w-full">
            <div className="relative w-full h-[460px] lg:h-[640px]">
              {/* no absolute/overflow-hidden so the model can sit high */}
              <ComputersCanvas />
            </div>
          </div>
        </div>
      </div>


      {/* Scroll cue */}
      <div className="absolute bottom-8 sm:bottom-10 w-full flex justify-center">
        <a href="#about" aria-label="Scroll to content">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 sm:border-4 border-purple-500 flex justify-center items-start p-2 bg-background/70 backdrop-blur">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-purple-500 mb-1"
            />
          </div>
        </a>


      </div>


    </section >
  );
};

export default Hero;
