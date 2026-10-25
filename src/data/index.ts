// Hero numbers, plus one place to import all site content from.
import type { Stat } from "@/types";
import { profile } from "./profile";
import { projects } from "./projects";
import { certifications } from "./certifications";

export * from "./profile";
export * from "./experience";
export * from "./skills";
export * from "./certifications";
export * from "./projects";

export const stats: Stat[] = [
    { value: profile.experienceMonths, suffix: "mo", label: "Professional experience" },
    { value: projects.length, label: "Featured projects" },
    { value: certifications.length, label: "Certifications earned" },
    { value: 28, label: "AI tools shipped" },
];
