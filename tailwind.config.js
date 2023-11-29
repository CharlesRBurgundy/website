/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        colors: {
            'silver': '#DBDBDB',
            'pink': '#BB2AAF',
            'brown': '#73493c',
            'dark-silver': '#717171',
            'dark-purple': '#800020',
            'dark-green': '#008060',
            'dark-blue': '#253c80',
            'dark-brown': '#211306',
            'dark-grey': '#1A2024',
        },
        fontFamily: {
            cursive: ['Dancing Script', 'cursive'],
            serif: ['Playfair Display', 'serif'],
        },
        extend: {
            backgroundImage: {
                'noise': "url('/noise.png')",
                'gradient': "radial-gradient(circle, rgba(33,19,6,0) 75%, rgba(33,19,6,0.66) 100%);",
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

