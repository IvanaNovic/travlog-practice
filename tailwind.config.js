/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#5D50C6',
            secondary: '#F85E9F',
            tertiary: '#191825',
            orange: '#FF5722',
            neutral: { 100: '#19182580', 200: '#1918251A' },
            gray: {
                100: '#EEEEEE',
            },
            white: '#FFFFFF',
        },
        fontFamily: {
            roboto: ['"Roboto"', 'sans-serif'],
        },
        extend: {
            screens: {
                xsm: '480px',
            },
            boxShadow: {
                buttonShadow: ' 4px 15px 20px 1px rgba(0,0,0,0.15)',
                customShadow: '-2px -10px 20px 1px rgba(0,0,0,0.15)',
            },
        },
    },
    plugins: [],
};
