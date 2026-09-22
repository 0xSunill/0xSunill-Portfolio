"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { Code2, Blocks, Rocket, GraduationCap, Briefcase, Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

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

type Tile = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  grad: string;
};

const tiles: Tile[] = [
  {
    title: "Solana & DeFi Protocols",
    desc: "AMMs, prediction markets, P2P atomic swaps, escrow systems — built and deployed on-chain with Rust & Anchor.",
    icon: <Blocks size={28} />,
    grad: "linear-gradient(135deg, #9945ff, #22d3ee)",
  },
  {
    title: "Rust & On-Chain Programs",
    desc: "PDAs, CPIs, SPL tokens, ATAs, WSOL, Token-2022 — deep experience with Solana's account model and program architecture.",
    icon: <Code2 size={28} />,
    grad: "linear-gradient(135deg, #f74b00, #fbbf24)",
  },
  {
    title: "Full-Stack Web Development",
    desc: "Next.js, React, TypeScript, Node.js, PostgreSQL — end-to-end applications with modern frameworks and responsive UIs.",
    icon: <Rocket size={28} />,
    grad: "linear-gradient(135deg, #22d3ee, #34d399)",
  },
  {
    title: "Currently Exploring",
    desc: "Async Rust, Tokio, Axum, real-time market data, low-latency systems, and DEX / trading infrastructure.",
    icon: <GraduationCap size={28} />,
    grad: "linear-gradient(135deg, #f472b6, #a78bfa)",
  },
];

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "20+", label: "Solana dApps Built" },
  { value: "10+", label: "Deployed Live" },
  { value: "MCA", label: "Computer Applications" },
  { value: "3+", label: "Years Building" },
];

type TimelineItem = {
  role: string;
  org: string;
  period: string;
  desc: string;
  icon: React.ReactNode;
};

const timeline: TimelineItem[] = [
  {
    role: "Solana Developer Fellow",
    org: "100xDevs — Solana School",
    period: "2026",
    desc: "Selected for a hands-on Solana builder program focused on Rust, Anchor, and on-chain application development.",
    icon: <GraduationCap size={16} />,
  },
  {
    role: "Web3 Research Intern",
    org: "DYOR Research",
    period: "Nov 2025 – Apr 2026",
    desc: "Researched Web3 protocols, DeFi ecosystems, and crypto-market infrastructure.",
    icon: <Briefcase size={16} />,
  },
  {
    role: "Freelance Developer",
    org: "Remote",
    period: "May 2024 – Present",
    desc: "Built and delivered full-stack web applications and Web3 dApps for startups.",
    icon: <Briefcase size={16} />,
  },
];

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const socials: SocialLink[] = [
  { icon: <Github size={18} />, href: "https://github.com/0xSunill", label: "GitHub" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/0xSunill", label: "Twitter" },
  { icon: <Linkedin size={18} />, href: "https://in.linkedin.com/in/karri-sunil-reddy-209249216", label: "LinkedIn" },
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
          className="text-3xl sm:text-4xl  font-black leading-tight mb-6 text-center"
        >
          <span className="bg-gradient-to-r  from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
            About
          </span>{" "}
          <span className="text-foreground">me</span>
        </motion.h2>

        {/* Shell */}
        <div className="glass p-6 sm:p-8 relative overflow-hidden">
          {/* background blobs — replaced with CSS animation (no JS per-frame cost) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full blur-3xl opacity-25 blob-float"
            style={{ background: "linear-gradient(135deg,#7c3aed,#22d3ee)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full blur-3xl opacity-20 blob-float-reverse"
            style={{ background: "linear-gradient(135deg,#f472b6,#22d3ee)" }}
          />

          {/* Bio + Socials */}
          <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
            <motion.div
              variants={fade(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="text-lg sm:text-xl leading-relaxed text-[color:var(--muted)]">
                I&apos;m <span className="font-semibold text-foreground">Karri Sunil Reddy</span> — a{" "}
                <span className="text-foreground">Solana</span> and{" "}
                <span className="text-foreground">Rust</span> developer focused on building{" "}
                <span className="text-foreground">DeFi</span> and on-chain applications. I&apos;ve built and deployed an{" "}
                <span className="text-foreground">AMM</span>, prediction market, P2P atomic swap protocol, token launch platform, and on-chain games using{" "}
                <span className="text-foreground">Anchor</span> and Solana ecosystem tooling.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Currently expanding into async{" "}
                <span className="text-foreground">Rust</span>,{" "}
                backend systems, real-time market data, and{" "}
                <span className="text-foreground">DEX / trading infrastructure</span>.
              </p>

              {/* Social links */}
              <div className="mt-5 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="about-social-link"
                    aria-label={s.label}
                  >
                    {s.icon}
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            variants={fade(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="about-stat-card">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div
            className="mt-8 h-[2px] w-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#7c3aed66,#22d3ee99,#f472b666)",
            }}
          />

          {/* Expertise Tiles */}
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
                  <div
                    className="about-tile-icon mb-3"
                    style={{ background: t.grad }}
                  >
                    {t.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {t.desc}
                  </p>

                  {/* bottom glow — CSS animation instead of framer-motion repeat:Infinity */}
                  <span
                    aria-hidden
                    className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-20 glow-pulse"
                    style={{ background: t.grad }}
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Divider */}
          <div
            className="mt-8 h-[2px] w-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#f472b666,#22d3ee99,#7c3aed66)",
            }}
          />

          {/* Experience Timeline */}
          <motion.div
            variants={fade(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mt-8"
          >
            <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
              <Briefcase size={18} className="text-[var(--primary)]" />
              Experience
            </h3>
            <div className="about-timeline">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fade(0.18 + i * 0.06)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="about-timeline-item"
                >
                  <div className="about-timeline-dot">
                    {item.icon}
                  </div>
                  <div className="about-timeline-content">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-semibold text-foreground">{item.role}</span>
                      <span className="text-xs text-[color:var(--muted)]">@ {item.org}</span>
                    </div>
                    <span className="about-timeline-period">{item.period}</span>
                    <p className="mt-1 text-sm text-[color:var(--muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume CTA */}
          <motion.div
            variants={fade(0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mt-8 flex justify-center"
          >
            <a
              href="https://github.com/0xSunill"
              target="_blank"
              rel="noreferrer"
              className="about-cta"
            >
              <ExternalLink size={16} />
              View My Work on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
