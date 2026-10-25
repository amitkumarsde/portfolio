// Heading block used at the top of every section.
import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
    index,
    label,
    title,
    lead,
}: {
    index: string;
    label: string;
    title: ReactNode;
    lead: string;
}) {
    return (
        <div className="mb-12 sm:mb-16">
            <Reveal>
                <div className="flex items-center gap-4">
                    <span className="eyebrow whitespace-nowrap">
                        {index} / {label}
                    </span>
                    <span className="h-px flex-1 bg-line" />
                </div>
            </Reveal>
            <Reveal delay={80}>
                <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                    {title}
                </h2>
            </Reveal>
            <Reveal delay={140}>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
            </Reveal>
        </div>
    );
}
