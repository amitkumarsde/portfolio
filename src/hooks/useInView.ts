// Tells you when an element first shows up on screen.
"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(threshold = 0.4, rootMargin = "0px") {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, inView] as const;
}
