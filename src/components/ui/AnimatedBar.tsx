// Skill bar that fills up when it scrolls into view.
"use client";

import { useInView } from "@/hooks/useInView";
import type { Skill } from "@/types";

export default function AnimatedBar({ name, level }: Skill) {
    const [ref, inView] = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className="w-full">
            <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-medium text-text">{name}</span>
                <span className="font-mono text-xs text-muted">{level}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div
                    className="h-full rounded-full bg-accent-fill transition-[width] duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ width: inView ? `${level}%` : "0%" }}
                />
            </div>
        </div>
    );
}
