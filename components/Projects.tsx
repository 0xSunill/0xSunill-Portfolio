"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../constants/projects";
type Project = {
    id: string;
    type: "web3" | "web";
    title: string;
    blurb: string;
    tags: string[];
    image: string;
    live?: string;
    repo?: string;
};


const EASE = [0.22, 1, 0.36, 1] as const;
const PAGE_SIZE = 9;
const TABS: Array<{ key: "web3" | "web"; label: string }> = [
    { key: "web3", label: "Web3 Projects" },
    { key: "web", label: "Web Dev Projects" },
];

export default function Projects() {
    const [active, setActive] = useState<"web3" | "web">("web3");
    const [visible, setVisible] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(true); // skeleton on first paint + tab changes
    const [hoverXY, setHoverXY] = useState({ x: 0, y: 0 });
    const spotRef = useRef<HTMLDivElement>(null);

    // Spotlight mouse tracker (+ a tiny parallax hint)
    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = spotRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const xPct = ((e.clientX - r.left) / r.width) * 100;
        const yPct = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${xPct}%`);
        el.style.setProperty("--my", `${yPct}%`);
        setHoverXY({ x: (xPct - 50) / 50, y: (yPct - 50) / 50 });
    };

    // filter by tab
    const filtered = useMemo(() => projects.filter(p => p.type === active), [active]);

    // show a skeleton for a brief moment on initial load and when tab switches
    useEffect(() => {
        setLoading(true);
        const t = setTimeout(() => setLoading(false), 500); // feel free to tweak duration
        return () => clearTimeout(t);
    }, [active]);

    // reset pagination when tabs change
    const onChangeTab = (t: "web3" | "web") => {
        setActive(t);
        setVisible(PAGE_SIZE);
    };

    const list = filtered.slice(0, visible);
    const canLoadMore = visible < filtered.length;

    const fadeUp = (i = 0) => ({
        hidden: { opacity: 0, y: 18 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: EASE, delay: i * 0.04 },
        },
    });

    return (
        <section id="projects" className="relative py-16 sm:py-24">
            {/* aurora + spotlight */}
            <div
                ref={spotRef}
                onMouseMove={onMove}
                className="absolute inset-0 -z-10 pointer-events-none select-none projects-aurora"
            >
                <div className="projects-spotlight" aria-hidden />
            </div>

            <div className="mx-auto max-w-7xl px-6 sm:px-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="text-3xl sm:text-4xl font-black leading-tight mb-8 text-center"
                    style={{ transform: `perspective(800px) rotateX(${hoverXY.y * 1.2}deg)` }}
                >
                    <span className="bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
                        Projects
                    </span>
                </motion.h2>

                {/* Tabs with animated indicator */}
                <div className="flex items-center justify-center mb-8">
                    <div
                        className="relative inline-flex p-1 rounded-xl border bg-white/[0.03]"
                        style={{ borderColor: "var(--border)" }}
                    >
                        {TABS.map((t) => {
                            const selected = active === t.key;
                            return (
                                <button
                                    key={t.key}
                                    onClick={() => onChangeTab(t.key)}
                                    className={`relative px-4 py-2 rounded-lg text-sm sm:text-base transition focus:outline-none ${selected ? "text-white" : "opacity-80 hover:opacity-100"
                                        }`}
                                >
                                    {selected && (
                                        <motion.span
                                            layoutId="tab-indicator"
                                            className="absolute inset-0 rounded-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, rgba(124,58,237,.18), rgba(34,211,238,.18))",
                                                boxShadow:
                                                    "0 6px 24px rgba(124,58,237,.18), 0 0 0 1px rgba(255,255,255,.06) inset",
                                            }}
                                        />
                                    )}
                                    <span className="relative">{t.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key={`sk-${active}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {Array.from({ length: Math.min(PAGE_SIZE, filtered.length || PAGE_SIZE) }).map(
                                (_, i) => <SkeletonCard key={i} i={i} />
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key={`grid-${active}-${visible}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {list.map((p, i) => (
                                <motion.article
                                    key={p.id}
                                    variants={fadeUp(i)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ y: -6, scale: 1.01, rotateX: hoverXY.y * 0.6, rotateY: -hoverXY.x * 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                                    className="group relative overflow-hidden rounded-2xl projects-card"
                                >
                                    {/* glow border */}
                                    <span aria-hidden className="projects-border" />

                                    {/* media */}
                                    <div className="aspect-[16/10] relative overflow-hidden rounded-t-2xl">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                            priority={false}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* shine sweep */}
                                        <span aria-hidden className="projects-shine" />
                                    </div>

                                    {/* content */}
                                    <div className="p-5 relative">
                                        <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                                        <p className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                                            {p.blurb}
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-1 rounded-md border/60"
                                                    style={{ borderColor: "var(--border)" }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-4 flex items-center gap-3">
                                            {p.live && (
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm underline hover:opacity-100 opacity-90"
                                                >
                                                    Live
                                                </a>
                                            )}
                                            {p.repo && (
                                                <a
                                                    href={p.repo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm underline hover:opacity-100 opacity-90"
                                                >
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* bottom glow pulse */}
                                    <motion.span
                                        aria-hidden
                                        className="pointer-events-none absolute -bottom-14 -right-12 w-40 h-40 rounded-full blur-2xl opacity-20"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #7c3aed, #22d3ee, #f472b6)",
                                        }}
                                        animate={{ scale: [1, 1.06, 1] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Show more */}
                {!loading && canLoadMore && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => setVisible((v) => v + PAGE_SIZE)}
                            className="px-5 py-2 rounded-lg border hover:bg-white/5 transition"
                            style={{ borderColor: "var(--border)" }}
                        >
                            Show more
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

/* ---------- Skeleton Card ---------- */
function SkeletonCard({ i }: { i: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="overflow-hidden rounded-2xl projects-card"
        >
            <span aria-hidden className="projects-border" />
            <div className="aspect-[16/10] skeleton" />
            <div className="p-5">
                <div className="h-5 w-2/3 skeleton rounded-md" />
                <div className="mt-3 h-4 w-full skeleton rounded-md" />
                <div className="mt-2 h-4 w-5/6 skeleton rounded-md" />
                <div className="mt-4 flex gap-2">
                    <span className="h-6 w-16 skeleton rounded-md" />
                    <span className="h-6 w-14 skeleton rounded-md" />
                    <span className="h-6 w-20 skeleton rounded-md" />
                </div>
            </div>
        </motion.div>
    );
}
