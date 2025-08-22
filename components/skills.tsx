"use client";
import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const tech = [
    "solana", "rust", "anchor", "nextjs", "html", "css", "javascript", "typescript", "reactjs",
    "redux", "tailwind", "nodejs", "mongodb", "git", "solidity", "c++", "docker",
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-16 sm:py-24">
            {/* background svg */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/skills-bg.svg"  // <-- make sure this file is in /public/assets/
                    alt=""
                    className="hero-bg w-full h-full object-cover opacity-90 pointer-events-none select-none"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 sm:px-10">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-black leading-tight mb-12 text-center"
                >
                    <span className="bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
                        Skills
                    </span>
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {tech.map((name, i) => (
                        <motion.div key={name}
                            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .45, delay: i * 0.04 }} viewport={{ once: true }}
                            className="flex flex-col items-center gap-2"
                        >
                            <SkillBadge name={name} />
                            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
