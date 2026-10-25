// Page shell: sets the title, applies the saved theme early and draws the background.
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Amit Kumar - Full Stack Developer";
const description = "Portfolio of Amit Kumar, a full-stack developer building secure, production-ready web applications with React, Next.js and Node.js, including LLM-powered apps with multi-provider failover.";

export const metadata: Metadata = {
    title,
    description,
    authors: [{ name: "Amit Kumar" }],
    keywords: [
        "Amit Kumar",
        "Full Stack Developer",
        "Frontend Developer",
        "LLM Applications",
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Portfolio",
    ],
    openGraph: { title, description, type: "website" },
};

const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('theme')==='light')d.classList.remove('dark');}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: bootScript }} />
            </head>
            <body className="relative min-h-screen overflow-x-hidden bg-bg font-sans text-text antialiased transition-colors duration-500">
                <div aria-hidden className="pointer-events-none fixed inset-0 -z-30 grid-bg" />
                <div
                    aria-hidden
                    className="pointer-events-none fixed inset-0 -z-30 bg-[radial-gradient(70%_50%_at_50%_-10%,var(--accent-glow),transparent_60%)] opacity-70"
                />
                <div
                    aria-hidden
                    className="pointer-events-none fixed -bottom-40 -left-40 -z-30 h-128 w-128 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] opacity-40 blur-2xl"
                />
                <div
                    aria-hidden
                    className="pointer-events-none fixed inset-0 -z-20 hidden noise opacity-5 mix-blend-overlay dark:block"
                />
                {children}
            </body>
        </html>
    );
}
