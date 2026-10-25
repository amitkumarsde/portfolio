// Bottom of the page with a WhatsApp button, quick links and copyright.
import { navLinks, profile, projects } from "@/data";
import SocialLinks from "@/components/ui/SocialLinks";
import { WhatsappIcon } from "@/components/ui/icons";

const whatsappUrl = `https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Amit, I came across your portfolio and would like to connect.",
)}`;

export default function Footer() {
    return (
        <footer className="mt-10 border-t border-line">
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
                <p className="eyebrow">{"// "}available for work</p>
                <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                    <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                        Have a project in mind, or a role to fill?
                    </h2>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary shrink-0"
                    >
                        <WhatsappIcon className="h-4 w-4" />
                        Start a conversation
                    </a>
                </div>
            </div>

            <div className="border-t border-line">
                <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div>
                        <a href="#home" className="font-mono text-lg font-bold tracking-tight text-accent">
                            {profile.handle}
                        </a>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{profile.tagline}</p>
                        <SocialLinks className="mt-5" />
                    </div>

                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-faint">Navigate</h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="link-arrow text-muted hover:text-accent">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-faint">Projects</h3>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {projects.map((p) => (
                                <li key={p.title}>
                                    <a
                                        href={p.demo ?? p.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-arrow text-muted hover:text-accent"
                                    >
                                        {p.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-line">
                <p className="mx-auto max-w-6xl px-5 py-6 text-center font-mono text-xs text-faint sm:px-8">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
