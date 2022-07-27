/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,html}"],
    theme: {
        extend: {
            minWidth:{
                'screen': '100vw'
            },
            minHeight:{
                'home': '80vh'
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
                'menu_close': '1.7rem',
                'menu_field': '2.0rem',
                'detail_name': ['2.0rem', {
                    fontWeight: '600',
                    lineHeight: '2.7rem',
                }],
                'detail_title': ['3.5rem', {
                    lineHeight: '4.4rem',
                    fontWeight: '600',
                }],
                'detail_sub': ['2.0rem', {
                    lineHeight: '2.7rem',
                    fontWeight: '600',
                }],
                'detail_desc':['1.6rem', {
                    lineHeight: '2.7rem',
                    fontWeight: '400'
                }]

            },
            borderWidth:{
                'default': '1px',
            },
            fontFamily:{
                'mont': ['Montserrat', 'sans-serif'],
            },
            borderColor:{
                'fade': '#D8D8D8',
            },
            backgroundColor:{
                'fade': '#EFEEEF',
            },
            textColor:{
                'detail_name': '#373737',
                'detail_sub': '#373737',
                'detail_title': '#191919',
            }
        },
        
    },
    plugins: [],
};
