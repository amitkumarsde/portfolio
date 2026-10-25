// About section: short bio, work experience, quick facts and education.
import { asset } from "@/lib/asset";
import { profile, experiences, education, quickFacts } from "@/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CardTitle from "@/components/ui/CardTitle";
import { Briefcase, GraduationCap, MapPin, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionHeading
                index="01"
                label="about"
                title={
                    <>
                        Building the web,{" "}
                        <span className="text-accent">end to end.</span>
                    </>
                }
                lead="A full-stack developer who cares about clean architecture, secure APIs, and interfaces that feel effortless."
            />

            <div className="grid gap-5 lg:grid-cols-3">
                <div className="flex flex-col gap-5 lg:col-span-2">
                    <Reveal>
                        <article className="card ticks p-8 sm:p-10">
                            <span className="chip">
                                <span className="h-1.5 w-1.5 rounded-full bg-accent-fill" />
                                who i am
                            </span>
                            <div className="mt-6 space-y-4 text-[0.97rem] leading-relaxed text-muted sm:text-base">
                                {profile.about.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </article>
                    </Reveal>

                    <Reveal delay={80}>
                        <article className="card p-8 sm:p-10">
                            <CardTitle icon={Briefcase}>Experience</CardTitle>

                            <ol className="space-y-9 border-l border-line pl-7">
                                {experiences.map((exp) => (
                                    <li key={exp.org} className="relative">
                                        <span className="absolute left-[-2.05rem] top-2 h-2.5 w-2.5 rounded-full bg-accent-fill ring-4 ring-surface" />

                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                                            <img
                                                src={asset(exp.img)}
                                                alt=""
                                                width={30}
                                                height={30}
                                                className="h-[1.9rem] w-[1.9rem] rounded-md object-cover"
                                            />
                                            <h4 className="text-base font-semibold text-text">
                                                {exp.role}
                                            </h4>
                                            <span className="text-sm font-medium text-accent">{exp.org}</span>
                                            {exp.link && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Verify experience at ${exp.org}`}
                                                    title="Verify experience"
                                                    className="-m-2 p-2 text-muted transition-colors hover:text-accent"
                                                >
                                                    <ShieldCheck className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>

                                        <p className="mt-1.5 flex flex-wrap gap-x-3 font-mono text-xs text-faint">
                                            <span>{exp.period}</span>
                                            <span aria-hidden>·</span>
                                            <span>{exp.location}</span>
                                        </p>

                                        <ul className="mt-4 space-y-2.5">
                                            {exp.points.map((pt, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-3 text-sm leading-relaxed text-muted"
                                                >
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ol>
                        </article>
                    </Reveal>
                </div>

                <div className="flex flex-col gap-5">
                    <Reveal delay={120}>
                        <article className="card p-8">
                            <CardTitle icon={MapPin}>At a glance</CardTitle>
                            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
                                {quickFacts.map((f) => (
                                    <div key={f.label} className="bg-surface p-4">
                                        <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-faint">
                                            {f.label}
                                        </dt>
                                        <dd className="mt-1.5 text-sm font-semibold text-text">
                                            {f.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    </Reveal>

                    <Reveal delay={160}>
                        <article className="card flex-1 p-8">
                            <CardTitle icon={GraduationCap}>Education</CardTitle>
                            <ul className="space-y-6">
                                {education.map((ed) => (
                                    <li key={ed.org} className="flex gap-3.5">
                                        <img
                                            src={asset(ed.img)}
                                            alt=""
                                            width={44}
                                            height={44}
                                            className="h-11 w-11 shrink-0 rounded-lg object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-text">
                                                {ed.degree}
                                            </p>
                                            <p className="text-sm text-muted">{ed.org}</p>
                                            <p className="mt-1 font-mono text-xs text-faint">
                                                {ed.period}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
