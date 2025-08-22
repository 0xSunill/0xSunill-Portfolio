"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
    {
        name: "GitHub",
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/0xSunill",
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://linkedin.com/in/karri-sunil-reddy",
    },
    {
        name: "X",
        icon: <Twitter className="w-5 h-5" />,
        href: "https://twitter.com/0xSunill",
    },
    {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:suday7637@gmail.com",
    },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-[var(--border)] py-10 mt-20">
            <div className="mx-auto max-w-6xl px-6 sm:px-10 flex flex-col items-center gap-6">

                {/* Social Links */}
                <div className="flex items-center gap-5">
                    {socials.map((s) => (
                        <motion.a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -3 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="p-3 rounded-full border border-[var(--border)] 
                         bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.06)] 
                         text-[color:var(--muted)] hover:text-[color:var(--foreground)] 
                         transition-colors"
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>

                {/* Gradient text */}
                <p className="text-sm text-center opacity-70">
                    <span className="bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent font-medium">
                        © {new Date().getFullYear()} Sunil Reddy
                    </span>{" "}
                    — All rights reserved.
                </p>
            </div>

            {/* subtle glow */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl opacity-20"
                style={{
                    background: "linear-gradient(90deg,#7c3aed,#22d3ee,#f472b6)",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </footer>
    );
}
