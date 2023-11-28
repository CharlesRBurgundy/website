/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        colors: {
            'silver': '#DBDBDB',
            'light-grey': '#686868',
            'medium-grey': '#4B4B4B',
            'dark-purple': '#800020',
            'dark-brown': '#211306',
            'dark-grey': '#1A2024',
        },
        fontFamily: {
            cursive: ['Dancing Script', 'cursive'],
            serif: ['Playfair Display', 'serif'],
        },
        extend: {
            backgroundImage: {
                'noise': "url('/noise.png')"
            },
            animation: {
                fade: 'fadeIn 1s ease-in-out',
            },
            keyframes: theme => ({
                fadeIn: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                },
            }),
        }
    },
    plugins: [],
}

