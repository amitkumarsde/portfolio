// Icon plus small heading used at the top of cards.
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export default function CardTitle({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
    return (
        <div className="mb-6 flex items-center gap-2.5">
            <Icon className="h-5 w-5 text-accent" />
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted">{children}</h3>
        </div>
    );
}
