// Small blinking badge that says I am open to work.
import { profile } from "@/data";

export default function AvailabilityBadge() {
    if (!profile.available) return null;

    return (
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-fill opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-fill" />
            </span>
            {profile.availabilityText}
        </span>
    );
}
