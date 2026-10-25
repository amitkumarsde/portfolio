// Moving strip of tech names; the list is shown twice so it loops smoothly.
import { techMarquee } from "@/data";

export default function Marquee() {
    const items = [...techMarquee, ...techMarquee];

    return (
        <div className="relative border-y border-line bg-surface/40 py-4">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
            />
            <div className="group flex overflow-hidden">
                <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                    {items.map((t, i) => (
                        <li
                            key={i}
                            aria-hidden={i >= techMarquee.length || undefined}
                            className="flex items-center gap-8 whitespace-nowrap"
                        >
                            <span className="font-mono text-sm text-muted transition-colors hover:text-text">{t}</span>
                            <span aria-hidden className="text-accent">✦</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
