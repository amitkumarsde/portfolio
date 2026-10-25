// Projects section: each project with a screenshot, details and links.
import { asset } from "@/lib/asset";
import { projects } from "@/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Window from "@/components/ui/Window";
import { ArrowUpRight, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

function hostOf(url: string) {
    try {
        return new URL(url).host;
    } catch {
        return url;
    }
}

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionHeading
                index="04"
                label="projects"
                title={
                    <>
                        Things I&apos;ve <span className="text-accent">designed &amp; shipped.</span>
                    </>
                }
                lead="A selection of full-stack builds — from a MERN video platform to an AI code-review assistant."
            />

            <div className="space-y-20 sm:space-y-28">
                {projects.map((p, i) => {
                    const flip = i % 2 === 1;
                    return (
                        <div key={p.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                            <Reveal dir={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                                <div className="group relative">
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute -inset-4 -z-10 rounded-4xl bg-[radial-gradient(circle_at_50%_30%,var(--accent-glow),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                    <Window
                                        className="transition-transform duration-300 group-hover:-translate-y-1"
                                        title={
                                            <span className="flex items-center gap-1.5 text-[0.7rem]">
                                                <Lock className="h-3.5 w-3.5 shrink-0 text-accent" />
                                                <span className="truncate">{hostOf(p.demo ?? p.repo)}</span>
                                            </span>
                                        }
                                    >
                                        <div className="relative aspect-16/10 bg-gradient-to-br from-surface-2 to-surface">
                                            <img
                                                src={asset(p.img)}
                                                alt={p.title}
                                                loading="lazy"
                                                className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-103 sm:p-10"
                                            />
                                        </div>
                                    </Window>
                                </div>
                            </Reveal>

                            <Reveal dir={flip ? "left" : "right"} delay={80} className={flip ? "lg:order-1" : ""}>
                                <span className="font-mono text-sm text-faint">{`/ 0${i + 1}`}</span>
                                <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
                                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{p.description}</p>

                                <div className="mt-6 flex flex-wrap gap-2.5">
                                    {p.stack.map((s) => (
                                        <span key={s} className="chip">
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                                        <GithubIcon className="h-4 w-4" />
                                        Source
                                    </a>
                                    {p.demo && (
                                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Live
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </Reveal>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
