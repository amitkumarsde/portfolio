// Contact section: contact details and a message form sent by FormSubmit.
import { profile } from "@/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import CardTitle from "@/components/ui/CardTitle";
import CopyEmail from "@/components/ui/CopyEmail";
import InfoRow from "@/components/ui/InfoRow";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowUpRight, MapPin, Phone, Send } from "lucide-react";

const inputClass =
    "w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-text placeholder:text-faint outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/25";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <SectionHeading
                index="05"
                label="contact"
                title={
                    <>
                        Let&apos;s build something{" "}
                        <span className="text-accent">great together.</span>
                    </>
                }
                lead="I'm open to full-time roles, freelance work, and collaborations. Drop a message and I'll get back to you soon."
            />

            <div className="grid gap-4 lg:grid-cols-2">
                <Reveal dir="left">
                    <div className="card flex h-full flex-col p-7 sm:p-9">
                        <AvailabilityBadge />

                        <p className="mt-6 text-lg leading-relaxed text-muted">
                            Prefer email or a quick call? Reach me directly through any
                            of the channels below.
                        </p>

                        <div className="mt-6 space-y-3">
                            <CopyEmail email={profile.email} />

                            <InfoRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
                            <InfoRow icon={MapPin} label="Location" value={profile.location} />
                        </div>

                        <SocialLinks className="mt-auto pt-6" />
                    </div>
                </Reveal>

                <Reveal dir="right" delay={80}>
                    <form
                        action={profile.formEndpoint}
                        method="POST"
                        className="card flex h-full flex-col gap-4 p-7 sm:p-9"
                    >
                        <CardTitle icon={Send}>Send a message</CardTitle>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-1.5 block font-mono text-xs text-muted">
                                    Name
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    className={inputClass}
                                />
                            </label>
                            <label className="block">
                                <span className="mb-1.5 block font-mono text-xs text-muted">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className={inputClass}
                                />
                            </label>
                        </div>

                        <label className="block">
                            <span className="mb-1.5 block font-mono text-xs text-muted">
                                LinkedIn / Website{" "}
                                <span className="text-faint">(optional)</span>
                            </span>
                            <input
                                type="url"
                                name="url"
                                placeholder="https://linkedin.com/in/you"
                                className={inputClass}
                            />
                        </label>

                        <label className="block flex-1">
                            <span className="mb-1.5 block font-mono text-xs text-muted">
                                Message
                            </span>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project or role…"
                                required
                                className={`${inputClass} h-full resize-none`}
                            />
                        </label>

                        <input type="hidden" name="_subject" value="New message from portfolio" />
                        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

                        <button type="submit" className="btn btn-primary mt-4 w-full">
                            Send message
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
