/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,html}"],
    theme: {
        extend: {},
        minWidth:{
            'screen': '100vw'
        },
        fontSize:{
            'default': '1.4rem',
            'title': ['3.5rem', {
                lineHeight: '4.4rem'
            }],
        },
        fontFamily:{
            'mont': ['Montserrat', 'sans-serif'],
        },
        borderColor:{
            'fade': '#D8D8D8',
        }
    },
    plugins: [],
};
