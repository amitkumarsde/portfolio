// Builds a static site for GitHub Pages; REPO must match the repository name.
import type { NextConfig } from "next";

const REPO = "portfolio";
const basePath = process.env.NODE_ENV === "production" && REPO ? `/${REPO}` : "";

const nextConfig: NextConfig = {
    output: "export",
    basePath,
    images: { unoptimized: true },
    trailingSlash: true,
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
