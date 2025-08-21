"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav(){
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="container-pg py-4">
        <div className="glass px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg"
                 style={{ background: "linear-gradient(135deg, var(--success), var(--secondary))" }}/>
            <span className="text-lg sm:text-xl font-extrabold h-aurora">Sunil</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6">
            <a href="#projects" className="link">Projects</a>
            <a href="#about" className="link">About</a>
            <a href="#contact" className="link">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary">CV 📜</a>
          </div>
        </div>
      </div>
    </header>
  );
}
