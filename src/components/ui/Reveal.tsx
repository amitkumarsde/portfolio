// Fades and slides its content in the first time it scrolls into view.
"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Dir = "up" | "left" | "right";

export default function Reveal({
    children,
    className = "",
    delay = 0,
    dir = "up",
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    dir?: Dir;
}) {
    const [ref, inView] = useInView<HTMLDivElement>(0, "0px 0px -10% 0px");

    return (
        <div
            ref={ref}
            data-dir={dir}
            className={`reveal ${inView ? "is-visible" : ""} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
