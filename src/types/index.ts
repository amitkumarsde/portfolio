// Shapes of the data used across the site.
export type NavLink = { label: string; href: string };

export type Experience = {
    role: string;
    org: string;
    img: string;
    link?: string;
    period: string;
    location: string;
    points: string[];
};

export type Education = {
    degree: string;
    org: string;
    img: string;
    period: string;
};

export type Tech = { name: string; short: string };

export type Skill = { name: string; level: number };

export type Certificate = {
    title: string;
    issuer: string;
    url: string;
    img: string;
};

export type Project = {
    title: string;
    img: string;
    repo: string;
    demo?: string;
    description: string;
    stack: string[];
};

export type Stat = { value: number; suffix?: string; label: string };
