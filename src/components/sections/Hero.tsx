// First screen: name, changing role, code card and count-up numbers.
"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { profile, stats } from "@/data";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import CountUp from "@/components/ui/CountUp";
import SocialLinks from "@/components/ui/SocialLinks";
import Window from "@/components/ui/Window";
import { ArrowUpRight, Download, MapPin } from "lucide-react";

function RotatingRole() {
    const [i, setI] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2400);
        return () => clearInterval(id);
    }, []);

    return (
        <span key={i} className="text-accent" style={{ animation: "float 0.6s ease" }}>
            {profile.roles[i]}
        </span>
    );
}

export default function Hero() {
    return (
        <section id="home" className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <div>
                    <AvailabilityBadge />

                    <p className="eyebrow mt-6">{"// "}{profile.role}</p>

                    <h1 className="mt-3 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                        {profile.name}
                    </h1>

                    <p className="mt-4 text-2xl font-medium tracking-tight text-muted sm:text-3xl">
                        I&apos;m a <RotatingRole />
                    </p>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                        {profile.intro}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a href="#projects" className="btn btn-primary">
                            View my work
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                            <Download className="h-4 w-4" />
                            Resume
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                        <SocialLinks />
                        <span className="flex items-center gap-1.5 font-mono text-xs text-faint">
                            <MapPin className="h-4 w-4" />
                            {profile.location}
                        </span>
                    </div>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute -inset-6 -z-10 rounded-4xl bg-[radial-gradient(circle_at_50%_40%,var(--accent-glow),transparent_70%)] opacity-60 blur-2xl" />

                    <Window
                        title="amit@portfolio: ~"
                        className="animate-[float_7s_ease-in-out_infinite] motion-reduce:animate-none"
                        barRight={
                            <img
                                src={asset("/profile.png")}
                                alt={profile.name}
                                width={28}
                                height={28}
                                className="h-7 w-7 rounded-full object-cover"
                            />
                        }
                    >
                        <pre className="overflow-x-auto p-5 font-mono text-[0.82rem] leading-relaxed sm:text-sm">
                            <code>
                                <span className="text-faint">$</span> <span className="text-accent">who am i</span>
                                {"\n\n"}
                                <span className="text-faint">const</span> <span className="text-text">dev</span>{" "}
                                <span className="text-faint">=</span> {"{"}
                                {"\n  "}
                                <span className="text-muted">name</span>:{" "}
                                <span className="text-accent">&quot;{profile.name}&quot;</span>,
                                {"\n  "}
                                <span className="text-muted">role</span>:{" "}
                                <span className="text-accent">&quot;{profile.role}&quot;</span>,
                                {"\n  "}
                                <span className="text-muted">stack</span>: [
                                <span className="text-accent">&quot;React&quot;</span>,{" "}
                                <span className="text-accent">&quot;Next.js&quot;</span>,{" "}
                                <span className="text-accent">&quot;Node&quot;</span>],
                                {"\n  "}
                                <span className="text-muted">focus</span>:{" "}
                                <span className="text-accent">&quot;production-ready web&quot;</span>,
                                {"\n  "}
                                <span className="text-muted">available</span>:{" "}
                                <span className="text-text">{String(profile.available)}</span>,
                                {"\n"}
                                {"};"}
                                {"\n\n"}
                                <span className="text-faint">$</span>
                            </code>
                        </pre>
                    </Window>

                    <div className="absolute -left-4 bottom-8 hidden rounded-lg bg-surface/90 px-3 py-2 shadow-lg backdrop-blur sm:block">
                        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-faint">Experience</p>
                        <p className="text-lg font-bold">{profile.experienceMonths} months</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 lg:grid-cols-4">
                {stats.map((s) => (
                    <div key={s.label} className="bg-surface px-5 py-6 text-center sm:py-7">
                        <p className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                            <CountUp value={s.value} suffix={s.suffix} />
                        </p>
                        <p className="mt-1 font-mono text-xs text-muted">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
