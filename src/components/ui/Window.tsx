// Box that looks like an app window with three colored dots.
import type { ReactNode } from "react";

export default function Window({
    title,
    children,
    className = "",
    barRight,
}: {
    title: ReactNode;
    children: ReactNode;
    className?: string;
    barRight?: ReactNode;
}) {
    return (
        <div className={`card overflow-hidden ${className}`}>
            <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
                <span className="win-dot bg-[#ff5f57]" />
                <span className="win-dot bg-[#febc2e]" />
                <span className="win-dot bg-[#28c840]" />
                <span className="ml-3 min-w-0 flex-1 truncate font-mono text-xs text-faint">{title}</span>
                {barRight}
            </div>
            {children}
        </div>
    );
}
