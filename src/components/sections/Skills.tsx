// Skills section: language tiles, framework bars, toolbox and concept rings.
import { additionalSkills, concepts, frameworks, languages } from "@/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CardTitle from "@/components/ui/CardTitle";
import AnimatedBar from "@/components/ui/AnimatedBar";
import AnimatedRing from "@/components/ui/AnimatedRing";
import { Code, Layers, Terminal } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionHeading
                index="02"
                label="skills"
                title={
                    <>
                        The tools I <span className="text-accent">reach for.</span>
                    </>
                }
                lead="A pragmatic full-stack toolkit — strong on the JavaScript/TypeScript ecosystem, comfortable across databases and APIs."
            />

            <Reveal>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {languages.map((t) => (
                        <div
                            key={t.name}
                            className="card flex flex-col items-center justify-center gap-2.5 px-3 py-5 text-center transition-transform hover:-translate-y-1"
                        >
                            <span className="font-mono text-lg font-bold text-accent">
                                {t.short}
                            </span>
                            <span className="text-xs font-medium text-muted">{t.name}</span>
                        </div>
                    ))}
                </div>
            </Reveal>

            <div className="mt-5 grid gap-5 lg:grid-cols-3">
                <Reveal className="lg:col-span-2" delay={60}>
                    <article className="card h-full p-8 sm:p-10">
                        <CardTitle icon={Code}>Frameworks &amp; Libraries</CardTitle>
                        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                            {frameworks.map((s) => (
                                <AnimatedBar key={s.name} name={s.name} level={s.level} />
                            ))}
                        </div>
                    </article>
                </Reveal>

                <Reveal delay={120}>
                    <article className="card h-full p-8">
                        <CardTitle icon={Terminal}>Toolbox</CardTitle>
                        <div className="flex flex-wrap gap-2.5">
                            {additionalSkills.map((s) => (
                                <span key={s} className="chip">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </article>
                </Reveal>
            </div>

            <Reveal delay={80}>
                <article className="mt-5 card p-8 sm:p-10">
                    <CardTitle icon={Layers}>Core Concepts</CardTitle>
                    <div className="grid grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
                        {concepts.map((c) => (
                            <AnimatedRing key={c.name} name={c.name} level={c.level} />
                        ))}
                    </div>
                </article>
            </Reveal>
        </section>
    );
}
