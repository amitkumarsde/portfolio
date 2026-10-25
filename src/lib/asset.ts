// Adds the /portfolio prefix to image paths so they load on GitHub Pages.
export function asset(path: string): string {
    return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
