/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        colors: {
            'gold': '#a27b33',
            'silver': '#DBDBDB',
            'dark-silver': '#83888a',
            'light-grey': '#373b3b',
            'dark-grey': '#1A2024',
            'dark-purple': '#312851',
            'dark-red': '#8a0b03',
        },
        fontFamily: {
            cursive: ['Dancing Script', 'cursive'],
            serif: ['Playfair Display', 'serif'],
        },
        extend: {
            backgroundImage: {
                'noise': "url('/noise.webp')",
                'gradient': "radial-gradient(circle, rgba(33,19,6,0) 75%, rgba(33,19,6,0.66) 100%);",
            },
            animation: {
                fade: 'fadeIn 1s ease-in-out',
                'pulse-slow': 'pulse 8s linear infinite',
                'float-left': 'floatLeft 8s ease-in-out infinite',
                'float-right': 'floatRight 11s ease-in-out infinite',
            },
            zIndex: {
                '15': '15',
            },
            keyframes: theme => ({
                fadeIn: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                },
                floatLeft: {
                    '0%, 100%': { transform: 'translate(-32px, 0)', opacity: 0.75 },
                    '50%': { transform: 'translate(0px, 22px)', opacity: 0.81 },
                },
                floatRight: {
                    '0%, 100%': { transform: 'translate(26px, 0px)', opacity: 0.81 },
                    '50%': { transform: 'translate(0px, 50px)', opacity: 0.75 },
                }
            }),
        }
    },
    plugins: [],
}

