// Row of LinkedIn, GitHub and Medium icon links.
import { profile } from "@/data";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";

const links = [
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.medium, label: "Medium", Icon: MediumIcon },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {links.map(({ href, label, Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="-m-2 p-2 text-muted transition-all hover:-translate-y-0.5 hover:text-accent"
                >
                    <Icon className="h-5 w-5" />
                </a>
            ))}
        </div>
    );
}
