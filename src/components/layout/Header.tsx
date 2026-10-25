// Top bar with menu links, theme switch and scroll progress line.
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { navLinks, profile } from "@/data";
import { Menu, Moon, Sun, X } from "lucide-react";

function subscribeTheme(callback: () => void) {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
}

function useIsDark() {
    return useSyncExternalStore(
        subscribeTheme,
        () => document.documentElement.classList.contains("dark"),
        () => true,
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState("home");
    const isDark = useIsDark();

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(y > 12);
            setProgress(max > 0 ? Math.min(y / max, 1) : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    useEffect(() => {
        const sections = ["home", ...navLinks.map((l) => l.href.slice(1))]
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {}
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
                scrolled || menuOpen ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent"
            }`}
        >
            <div
                aria-hidden
                className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent-fill transition-transform duration-150 ease-out"
                style={{ transform: `scaleX(${progress})` }}
            />

            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
                <a href="#home" className="font-mono text-lg font-bold tracking-tight text-accent">
                    {profile.handle}
                </a>

                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link, i) => {
                        const isActive = active === link.href.slice(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                aria-current={isActive ? "true" : undefined}
                                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
                                    isActive ? "text-text" : "text-muted hover:text-text"
                                }`}
                            >
                                <span className={`text-[0.65rem] ${isActive ? "text-accent" : "text-faint"}`}>
                                    0{i + 1}
                                </span>
                                {link.label.toLowerCase()}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="hidden rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs text-text transition-colors hover:border-accent hover:text-accent lg:inline-flex"
                    >
                        let&apos;s talk
                    </a>
                    <button
                        onClick={toggleTheme}
                        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                        className="-m-2 p-2 text-muted transition-all hover:rotate-12 hover:text-accent"
                    >
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        className="-m-2 p-2 text-muted transition-colors hover:text-accent md:hidden"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <nav
                id="mobile-nav"
                inert={!menuOpen}
                className={`overflow-hidden bg-bg/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
                    menuOpen ? "max-h-96 border-t border-line" : "max-h-0"
                }`}
            >
                <div className="flex flex-col px-5 py-2">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 border-b border-line py-3 font-mono text-sm text-muted transition-colors last:border-none hover:pl-1 hover:text-accent"
                        >
                            <span className="text-xs text-faint">0{i + 1}</span>
                            {link.label.toLowerCase()}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
