/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'cursive': "DynaPuff, cursive",
            },
            screens: {
                'xsm': '450px',
                'xmd': '600px',
                'xlg': '900px',
            },
        },
    },
    plugins: [],
}
