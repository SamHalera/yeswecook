import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#4CAF50",
                "on-primary": "#ffffff",
                "primary-container": "#e8f5e9",
                "on-primary-container": "#1b5e20",
                "surface": "#ffffff",
                "on-surface": "#0f172a",
                "surface-container": "#f1f5f9",
                "surface-container-high": "#e2e8f0",
                "on-surface-variant": "#64748b",
                "outline": "#cbd5e1",
                "outline-variant": "#94a3b8",
                "secondary": "#334155",
                "on-secondary": "#ffffff",
                "secondary-container": "#f8fafc",
                "tertiary": "#0f172a",
            },
            fontFamily: {
                "headline": ["Epilogue", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
                "label": ["Manrope", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
                "full": "9999px",
            },
        },
    },
    plugins: [],
}

export default config
