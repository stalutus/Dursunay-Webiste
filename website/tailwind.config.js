/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F2D7D5', // Soft Pink
                    dark: '#E6B0AA',
                },
                secondary: {
                    DEFAULT: '#D1F2EB', // Soft Mint
                    dark: '#A3E4D7',
                },
                accent: '#FAF9F6', // Off White
                text: '#2C3E50',   // Soft Black
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'breathe': 'breathe 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                breathe: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
                    '50%': { transform: 'scale(1.05)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
