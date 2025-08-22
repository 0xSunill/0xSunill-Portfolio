"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import Image from "next/image";
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [err, setErr] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErr(null);

        const fd = new FormData(e.currentTarget);
        if (String(fd.get("company") || "").trim().length > 0) return; // honeypot

        const name = String(fd.get("name") || "").trim();
        const email = String(fd.get("email") || "").trim();
        const kind = String(fd.get("kind") || "general");
        const message = String(fd.get("message") || "").trim();
        const budget = String(fd.get("budget") || "").trim();

        if (name.length < 2) return setErr("Please enter your full name.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setErr("Please enter a valid email.");
        if (message.length < 10) return setErr("Tell me a bit more (10+ chars).");

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, kind, message, budget }),
            });
            if (!res.ok) throw new Error("Failed to send");
            setStatus("sent");
            formRef.current?.reset();
        } catch {
            setStatus("error");
            setErr("Something went wrong. You can also email me directly.");
        }
    }

    return (
        <section id="contact" className="relative py-16 sm:py-24">
            {/* backgrounds (behind everything) */}
            <div className="absolute inset-0 -z-10 pointer-events-none select-none">
                {/* swap path if your file lives under /assets */}
                <Image
                    src="/movingparticle-bg.svg"
                    alt=""
                    fill
                    priority
                    className="w-full h-full object-cover opacity-70"
                />
            </div>
            <div className="absolute inset-0 -z-10 pointer-events-none select-none projects-aurora">
                <div className="projects-spotlight" aria-hidden />
            </div>

            {/* content grid */}
            <div className="mx-auto max-w-7xl px-6 sm:px-10">
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="text-3xl sm:text-4xl font-black leading-tight mb-10 text-center"
                >
                    <span className="bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#f472b6] bg-clip-text text-transparent">
                        Contact
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                    {/* left: form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={onSubmit}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="relative overflow-hidden rounded-2xl projects-card p-6 sm:p-8 z-10"
                    >
                        {/* visual border layer — ignore pointer events */}
                        <span aria-hidden className="projects-border pointer-events-none" />

                        {/* honeypot (hidden) */}
                        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Name" id="name">
                                <input
                                    id="name" name="name" required
                                    className="w-full px-3 py-2 rounded-md border bg-transparent"
                                    style={{ borderColor: "var(--border)" }}
                                    placeholder="Your name"
                                />
                            </Field>

                            <Field label="Email" id="email">
                                <input
                                    id="email" name="email" type="email" required
                                    className="w-full px-3 py-2 rounded-md border bg-transparent"
                                    style={{ borderColor: "var(--border)" }}
                                    placeholder="you@example.com"
                                />
                            </Field>
                        </div>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Project Type" id="kind">
                                <div className="relative">
                                    <select
                                        id="kind"
                                        name="kind"
                                        defaultValue="web3"
                                        className="w-full px-3 py-2 rounded-md border bg-[rgba(255,255,255,0.05)] text-sm text-[color:var(--foreground)] appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/40"
                                        style={{ borderColor: "var(--border)" }}
                                    >
                                        <option value="web3" className="bg-[#0b0f1a] text-white">Web3 / Smart Contracts</option>
                                        <option value="web" className="bg-[#0b0f1a] text-white">Web Development</option>
                                        <option value="general" className="bg-[#0b0f1a] text-white">General</option>
                                    </select>

                                    {/* custom arrow */}
                                    <svg
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--muted)]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.25a.75.75 0 01-1.06 0l-4.24-4.25a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </Field>

                            <Field label="Budget (optional)" id="budget" hint="USD">
                                <input
                                    id="budget" name="budget" inputMode="numeric"
                                    className="w-full px-3 py-2 rounded-md border bg-transparent"
                                    style={{ borderColor: "var(--border)" }}
                                    placeholder="e.g. 3k–5k"
                                />
                            </Field>
                        </div>

                        <Field className="mt-4" label="Message" id="message">
                            <textarea
                                id="message" name="message" required rows={6}
                                className="w-full px-3 py-2 rounded-md border bg-transparent resize-y"
                                style={{ borderColor: "var(--border)" }}
                                placeholder="Tell me about your project, goals, timeline…"
                            />
                        </Field>

                        {/* status / actions */}
                        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between">
                            <div className="min-h-[1.25rem] text-sm">
                                {err && <span className="text-red-400">{err}</span>}
                                {status === "sent" && <span className="text-emerald-400">Thanks! I’ll get back to you soon.</span>}
                            </div>

                            <div className="flex items-center gap-3">
                                <a href="mailto:you@example.com" className="text-sm underline opacity-90 hover:opacity-100">
                                    or email directly
                                </a>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="relative px-5 py-2 rounded-lg border transition hover:bg-white/5 disabled:opacity-60"
                                    style={{ borderColor: "var(--border)" }}
                                >
                                    {status !== "sending" ? "Send message" : (
                                        <span className="inline-flex items-center gap-2">
                                            <Spinner /> Sending…
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* bottom glow pulse */}
                        <motion.span
                            aria-hidden
                            className="pointer-events-none absolute -bottom-14 -right-12 w-40 h-40 rounded-full blur-2xl opacity-20"
                            style={{ background: "linear-gradient(135deg, #7c3aed, #22d3ee, #f472b6)" }}
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.form>

                    {/* right: earth canvas (sticky on large screens) */}
                    <div className="relative">
                        <div className=""
                            style={{ borderColor: "var(--border)" }}>
                            <div className="h-[320px] sm:h-[420px] lg:h-[540px]">
                                <EarthCanvas />
                            </div>
                        </div>
                        {/* optional caption or contact info */}
                        {/* <p className="mt-3 text-sm text-[color:var(--muted)] text-center">Let’s build something stellar.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- helpers ---------------- */

function Field({
    label, id, hint, children, className = "",
}: { label: string; id: string; hint?: string; children: React.ReactNode; className?: string }) {
    return (
        <label className={`block ${className}`} htmlFor={id}>
            <div className="mb-1 text-sm opacity-80">
                {label}{hint ? <span className="opacity-60"> — {hint}</span> : null}
            </div>
            {children}
        </label>
    );
}

function Spinner() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" fill="none" />
            <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
    );
}
