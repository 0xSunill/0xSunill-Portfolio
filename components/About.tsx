"use client";

import { motion, type Variants, type Transition } from "framer-motion";

type Tile = {
  title: string;
  desc: string;
  emoji: string;
  grad: string;
};

/** Framer-compatible easing (cubic-bezier) */
const EASE: Transition["ease"] = [0.22, 1, 0.36, 1]; // easeOut-ish

const fade = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  },
});

const tiles: Tile[] = [
  {
    title: "Web3 & Smart Contracts",
    desc: "Solana-ready dApps and secure, testable contract architectures.",
    emoji: "🧠",
    grad: "linear-gradient(135deg, var(--grad-a), var(--grad-c))",
  },
  {
    title: "Rust",
    desc: "Fast, memory-safe systems and on-chain programs.",
    emoji: "🦀",
    grad: "linear-gradient(135deg, var(--grad-a), var(--grad-b))",
  },
  {
    title: "Solana Development",
    desc: "Scalable programs, clients, and seamless crypto UX.",
    emoji: "⚡",
    grad: "linear-gradient(135deg, var(--grad-b), var(--grad-c))",
  },
  {
    title: "Web Development",
    desc: "Full-stack apps with Next.js & TypeScript, built for speed.",
    emoji: "💻",
    grad: "linear-gradient(135deg, var(--grad-a), var(--grad-c))",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Title */}
        <motion.h2
          variants={fade(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-black leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
            About
          </span>{" "}
          <span className="text-foreground">me</span>
        </motion.h2>

        {/* Shell */}
        <div className="glass p-6 sm:p-8 relative overflow-hidden">
          {/* background blobs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full blur-3xl opacity-30"
            style={{ background: "linear-gradient(135deg,#7c3aed,#22d3ee)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full blur-3xl opacity-25"
            style={{ background: "linear-gradient(135deg,#f472b6,#22d3ee)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Bio */}
          <motion.p
            variants={fade(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative text-lg sm:text-xl leading-relaxed text-[color:var(--muted)]"
          >
            I’m <span className="font-semibold text-foreground">Sunil Reddy</span> — a full-stack{" "}
            <span className="text-foreground">web</span> and{" "}
            <span className="text-foreground">blockchain</span> developer. I build scalable{" "}
            <span className="text-foreground">Solana</span> dApps, write secure{" "}
            <span className="text-foreground">Rust</span> programs, and create smooth{" "}
            <span className="text-foreground">Web3</span> experiences. I’m equally passionate about
            modern <span className="text-foreground">full-stack web development</span> with{" "}
            <span className="text-foreground">Next.js</span> and contributing to{" "}
            <span className="text-foreground">open-source</span> projects that push the crypto
            ecosystem forward.
          </motion.p>

          {/* Divider */}
          <div
            className="mt-8 h-[2px] w-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#7c3aed66,#22d3ee99,#f472b666)",
            }}
          />

          {/* Tiles */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[1fr]">
            {tiles.map((t, i) => (
              <motion.article
                key={t.title}
                variants={fade(0.08 + i * 0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-xl border flex flex-col h-full transition-transform"
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {/* top shimmer line */}
                <span
                  aria-hidden
                  className="absolute -top-px left-6 right-6 h-[2px] rounded-full"
                  style={{ background: t.grad }}
                />

                <div className="p-7 flex flex-col grow">
                  <div className="text-3xl mb-3">{t.emoji}</div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {t.desc}
                  </p>

                  {/* bottom glow */}
                  <motion.span
                    aria-hidden
                    className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-25"
                    style={{ background: t.grad }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
