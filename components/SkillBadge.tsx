"use client";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import React from "react";

export default function SkillBadge({ name }: { name: string }) {
    const fileMap: Record<string, string> = {
        "c++": "cpp",           // rename file to cpp.png (recommended)
        // add mappings if your file names differ from display names
    };

    const file = fileMap[name] ?? name;
    const src = `/assets/tech/${encodeURIComponent(name)}.png`;
    const ref = React.useRef<HTMLDivElement>(null);

    // track mouse for flashlight
    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
    };

    return (
        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={900}>
            <div
                ref={ref}
                onMouseMove={onMove}
                className="skill-badge group"
            >
                <div className="skill-badge__ring" />
                <div className="skill-badge__inner">
                    {/* hover flashlight */}
                    <span className="skill-badge__flash" aria-hidden />
                    <Image
                        src={src}
                        alt={name}
                        width={64}
                        height={64}
                        className="skill-badge__img"
                        draggable={false}
                    />
                </div>
            </div>
        </Tilt>
    );
}
