// Round skill chart that fills up when it scrolls into view.
"use client";

import type { CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import type { Skill } from "@/types";

export default function AnimatedRing({ name, level }: Skill) {
    const [ref, inView] = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div
                className="skill-ring grid h-24 w-24 place-items-center rounded-full"
                style={{ "--p": inView ? Math.round(level * 3.6) : 0 } as CSSProperties}
            >
                <div className="grid h-19 w-19 place-items-center rounded-full bg-surface font-mono text-sm font-semibold text-text">
                    {level}%
                </div>
            </div>
            <p className="mt-3 max-w-32 text-center text-xs leading-tight text-muted">
                {name}
            </p>
        </div>
    );
}
