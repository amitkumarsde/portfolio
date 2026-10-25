// My name, intro, contact details, social links and menu links.
import type { NavLink } from "@/types";

export const profile = {
    name: "Amit Kumar",
    handle: "amitkumar",
    role: "Full Stack Developer",
    location: "New Delhi, India",
    available: true,
    availabilityText: "Available for full-stack roles",
    tagline: "Full Stack Developer | React · Next.js · Node.js",
    experienceMonths: 10,
    roles: ["Full Stack Developer", "React Engineer", "Next.js Developer", "LLM App Builder"],
    intro: "I build web applications with React, Next.js and Node - including LLM-powered apps with multi-provider failover and secure server-side API handling.",
    about: [
        "I am a Full Stack Developer and a B.Tech graduate in Instrumentation and Control Engineering from Netaji Subhas University of Technology. I build web applications with React and Next.js on the frontend, and Node.js, Express, REST APIs, MongoDB and MySQL on the backend.",
        "Most recently I built LLM-powered applications with automatic failover across multiple providers, keeping API keys on the server and protecting public APIs with rate limits and input caps. I use AI coding assistants to speed up development, and I review and debug all generated code before shipping it.",
    ],
    resumeUrl: "https://drive.google.com/file/d/1ArQ259qAu08xpJmdUiHamPiR68LjBuFS/view?usp=sharing",
    email: "amit.kumar.270523@gmail.com",
    phone: "+919205280247",
    formEndpoint: "https://formsubmit.co/amit.kumar.270523@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/in/amitkumarsde",
        github: "https://github.com/amitkumarsde",
        medium: "https://medium.com/@amitkumarsde",
    },
};

export const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const quickFacts = [
    { label: "Based in", value: "New Delhi, IN" },
    { label: "Focus", value: "Full Stack" },
    { label: "Degree", value: "B.Tech, NSUT" },
    { label: "Open to", value: "Full time roles" },
];
