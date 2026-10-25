// One contact row with an icon, a label and a value.
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export default function InfoRow({
    icon: Icon,
    label,
    value,
    href,
    action,
}: {
    icon: LucideIcon;
    label: string;
    value: string;
    href?: string;
    action?: ReactNode;
}) {
    const body = (
        <>
            <Icon className="h-5 w-5 shrink-0 text-accent" />
            <span className="min-w-0">
                <span className="block font-mono text-[0.65rem] uppercase tracking-widest text-faint">{label}</span>
                <span className="block truncate text-sm text-text transition-colors group-hover:text-accent">
                    {value}
                </span>
            </span>
        </>
    );

    return (
        <div className="flex items-center justify-between gap-3 rounded-lg bg-surface-2 p-4">
            {href ? (
                <a href={href} className="group flex min-w-0 items-center gap-3">
                    {body}
                </a>
            ) : (
                <div className="flex min-w-0 items-center gap-3">{body}</div>
            )}
            {action}
        </div>
    );
}
