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
            'card_title': ['2.8rem', {
                lineHeight: '3rem',
            }],
            'card_price': ['1.4rem', {
                lineHeight: '1.7rem',
            }],
            'title': ['3.5rem', {
                lineHeight: '4.4rem'
            }],

        },
        borderWidth:{
            'default': '1px',
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
