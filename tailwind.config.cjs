import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config}*/
const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}'
    ],
    darkMode: 'class',
    /* https://tailwindcss.com/docs/theme */
    theme: {
        extend: {
        }
    },

};

module.exports = config;
