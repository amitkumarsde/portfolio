// Certificates in a sideways scrolling row with arrow buttons.
"use client";

import { useRef } from "react";
import { asset } from "@/lib/asset";
import { certifications } from "@/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";

const GAP = 16;

export default function Certifications() {
    const track = useRef<HTMLDivElement>(null);

    const scroll = (dir: 1 | -1) => {
        const el = track.current;
        const card = el?.firstElementChild as HTMLElement | null | undefined;
        if (!el || !card) return;
        el.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: "smooth" });
    };

    const arrowClass = "-m-2 p-2 text-muted transition-colors hover:text-accent";

    return (
        <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionHeading
                index="03"
                label="certifications"
                title={
                    <>
                        Credentials &amp; <span className="text-accent">continuous learning.</span>
                    </>
                }
                lead="Verified certifications across full-stack development, algorithms, and emerging tech — each links to its issuer for verification."
            />

            <div className="mb-5 flex justify-end gap-4">
                <button onClick={() => scroll(-1)} aria-label="Scroll certificates left" className={arrowClass}>
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <button onClick={() => scroll(1)} aria-label="Scroll certificates right" className={arrowClass}>
                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>

            <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-2">
                {certifications.map((c, i) => (
                    <Reveal key={c.title} delay={(i % 3) * 70} className="w-68 shrink-0 snap-start sm:w-80">
                        <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card group flex h-full flex-col overflow-hidden"
                        >
                            <div className="relative aspect-4/3 overflow-hidden border-b border-line bg-surface-2">
                                <img
                                    src={asset(c.img)}
                                    alt={c.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[0.65rem] text-muted backdrop-blur">
                                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                                    {c.issuer}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-[0.95rem] font-semibold leading-snug text-text">{c.title}</h3>
                                <span className="link-arrow mt-auto pt-4 font-mono text-xs">
                                    verify credential
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </span>
                            </div>
                        </a>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
