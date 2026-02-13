
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a2b5a', // B&J Navy Blue
                    light: '#2a3f7a',   // Lighter navy
                },
                secondary: {
                    DEFAULT: '#4a5568', // Gray 600
                    light: '#94a3b8',   // Slate 400
                },
                accent: {
                    DEFAULT: '#2563eb', // Blue 600
                    hover: '#3b82f6',   // Blue 500
                },
                metallic: {
                    DEFAULT: '#94a3b8',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
