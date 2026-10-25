// Email row with a button that copies the address.
"use client";

import { useEffect, useState } from "react";
import InfoRow from "@/components/ui/InfoRow";
import { Check, Copy, Mail } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(id);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch {}
    };

    return (
        <InfoRow
            icon={Mail}
            label="Email"
            value={email}
            href={`mailto:${email}`}
            action={
                <button
                    onClick={copy}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    className="-m-2 shrink-0 p-2 text-muted transition-colors hover:text-accent"
                >
                    {copied ? <Check className="h-5 w-5 text-accent" /> : <Copy className="h-5 w-5" />}
                </button>
            }
        />
    );
}
