// My projects with their links, images and tech used.
import type { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Veo - Video Sharing Platform",
        img: "/project/Veo.png",
        repo: "https://github.com/amitkumarsde/veo",
        demo: "https://veo-lilac.vercel.app/",
        description: "Veo is a full-stack MERN video-sharing platform where users create channels, upload videos, like, comment and subscribe, with a creator studio showing per-channel stats. The Express API uses JWT auth, Zod validation and rate limiting, MongoDB indexes and transactions keep data consistent, and media is stored in Supabase.",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Supabase"],
    },
    {
        title: "CodeAI - AI Code Review Assistant",
        img: "/project/CodeAI.png",
        repo: "https://github.com/amitkumarsde/codeai",
        demo: "https://codeai-lovat.vercel.app/",
        description: "CodeAI is a full-stack MERN code-review assistant where developers paste code into a Monaco editor supporting 10 languages and get structured feedback on bugs, security and quality with a 1-10 score. Google Gemini runs behind a backend gateway with OpenRouter fallback, and result caching keeps token costs low.",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini"],
    },
];
