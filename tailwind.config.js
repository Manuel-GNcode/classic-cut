import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "background": "#131313",
                "on-surface": "#e5e2e1",
                "primary-container": "#d4af37",
                "outline-variant": "#4d4635",
                "on-primary-fixed": "#241a00",
                "surface-container": "#201f1f",
                "surface-container-low": "#1c1b1b",
                "on-primary": "#3c2f00",
                "primary": "#f2ca50",
                "on-surface-variant": "#d0c5af",
                "surface-container-high": "#2a2a2a"
            },
            fontFamily: {
                "headline": ["Manrope"],
                "body": ["Inter"],
                "label": ["Inter"]
            },
            borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
        },
    },
    plugins: [formsPlugin, containerQueriesPlugin],
}
