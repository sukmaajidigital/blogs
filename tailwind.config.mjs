// tailwind.config.mjs

import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
    // Pastikan path ini sesuai dengan struktur proyek Anda
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            // Kustomisasi tema dari header/footer Anda
            colors: {
                dark: {
                    100: "#1E293B",
                    200: "#172033",
                    300: "#0F172A",
                    400: "#0A0F1C",
                },
                accent: {
                    DEFAULT: "#6366F1",
                    light: "#818CF8",
                    dark: "#4F46E5",
                },
                slate: {
                    light: "#F1F5F9",
                    dark: "#94A3B8",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },

    // Pastikan plugin didaftarkan dengan benar di sini
    plugins: [
        typography,
    ],
};

export default config;