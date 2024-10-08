import TailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: {
                    default: "hsl(var(--background))",
                    400: "#FF6060",
                    500: "#FF7C44",
                    600: "#FF2525",
                    700: "#B20000",
                    800: "#8D0101", 
                    900: "#4C0000",
                },
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "#f4f4f4",
                    100: "#e8e8e8",
                    200: "#c6c6c6",
                    300: "#a3a3a3",
                    400: "#5e5e5e",
                    500: "#191919",
                    600: "#171717",
                    700: "#131313",
                    800: "#0f0f0f",
                    900: "#0c0c0c",
                },
                highlight: {
                    50: "#f4f3f4",
                    100: "#eae7ea",
                    200: "#cac4ca",
                    300: "#a9a0ab",
                    400: "#69586b",
                    500: "#29112c",
                    600: "#250f28",
                    700: "#1f0d21",
                    800: "#190a1a",
                    900: "#140816",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                    50: "#fef2ff",
                    100: "#fde6ff",
                    200: "#fbbfff",
                    300: "#f899ff",
                    400: "#f34dff",
                    500: "#ee00ff",
                    600: "#d600e6",
                    700: "#b300bf",
                    800: "#8f0099",
                    900: "#75007d",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                gray: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#e6e6e6",
                    300: "#d6d6d6",
                    400: "#b8b8b8",
                    500: "#999999",
                    600: "#8a8a8a",
                    700: "#737373",
                    800: "#5c5c5c",
                    900: "#4b4b4b",
                },
                secondary1: {
                    50: "#fcf2ff",
                    100: "#fae6ff",
                    200: "#f2bfff",
                    300: "#eb99ff",
                    400: "#db4dff",
                    500: "#cc00ff",
                    600: "#b800e6",
                    700: "#9900bf",
                    800: "#7a0099",
                    900: "#64007d",
                },
                text: {
                    500: "#ffffff",
                    600: "#e6e6e6",
                    700: "#bfbfbf",
                    800: "#999999",
                    900: "#7d7d7d",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [TailwindScrollbar({ nocompatible: true }), require("tailwindcss-animate")],
};
