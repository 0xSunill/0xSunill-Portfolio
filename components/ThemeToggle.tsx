"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (light) html.setAttribute("data-theme", "light");
    else html.removeAttribute("data-theme");
  }, [light]);

  return (
    <button
      className="btn btn-ghost"
      onClick={() => setLight(v => !v)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {light ? "Dark" : "Light"} mode
    </button>
  );
}
