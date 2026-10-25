// My jobs and my education.
import type { Education, Experience } from "@/types";

export const experiences: Experience[] = [
    {
        role: "Software Developer",
        org: "Soven Developer",
        img: "/about/sd.jpeg",
        link: "https://drive.google.com/file/d/13EgYuL-dt9XDeONkYvBfIE-179Izfdep/view",
        period: "Jan 2026 - Jul 2026",
        location: "Remote · Wilmington, US",
        points: [
            "Built a React and Vite app with 28 AI tools across 7 categories on a config-driven form engine, where each tool is a data object defining its fields, validation and LLM prompt.",
            "Integrated three LLM providers (OpenRouter, Eden AI, Google Vertex AI) behind a common service interface with automatic failover, so if one fails or times out after 60 seconds, the next answers without user action.",
            "Connected Google Vertex AI without an SDK by signing RS256 JWTs with the Node.js crypto module and exchanging them for OAuth 2.0 access tokens, cached in memory, and renewed when they expire.",
            "Classified provider failures (invalid key, no credits, rate limit, timeout) and showed users a clear notice for each, flagged replies cut off at the token limit, and cancelled provider calls when users leave to save credits.",
            "Protected the public API with per-IP rate limiting (10 requests/min), a 32,000-character prompt cap and a 1 MB body limit; fixed code-review bugs, including a failover loop that could skip backup providers."
        ],
    },
    {
        role: "Frontend Developer",
        org: "Unified Mentor",
        img: "/about/um.jpeg",
        link: "https://unifiedmentor.com/verify-certificate/UMID25092559377",
        period: "Oct 2025 - Jan 2026",
        location: "On-site · Gurugram, IN",
        points: [
            "Built responsive web pages from Figma designs using custom CSS, Flexbox and Grid, testing layouts across mobile, tablet and desktop screens.",
            "Developed 8 new reusable components (modal, data table, filter bar) and refactored 5 duplicate UI blocks into shared components; fixed 20+ QA-reported UI and state bugs.",
            "Optimized performance using React.memo and useCallback to reduce unnecessary re-renders by ~20%; used code splitting and lazy-loaded routes to improve initial load times."
        ],
    },
];

export const education: Education[] = [
    {
        degree: "B.Tech",
        org: "Netaji Subhas University of Technology",
        img: "/about/nsut.jpeg",
        period: "Aug 2021 - May 2025",
    },
    {
        degree: "AISSCE",
        org: "Kendriya Vidyalaya No. 2",
        img: "/about/kvs.png",
        period: "Full-time, 2019 - 2021",
    },
];
