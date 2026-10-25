// Number that counts up from 0 when it scrolls into view.
"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const DURATION = 1400;

export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [ref, inView] = useInView<HTMLSpanElement>(0.5);
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let frame: number;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            frame = requestAnimationFrame(() => setN(value));
            return () => cancelAnimationFrame(frame);
        }

        const start = performance.now();
        const tick = (t: number) => {
            const p = Math.min((t - start) / DURATION, 1);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {n}
            {suffix}
        </span>
    );
}
