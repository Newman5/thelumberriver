/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'river-blue': '#243B53',
        'cypress-green': '#3E6B48',
        'wetland-moss': '#7E8F6E',
        'sandbar-tan': '#DCC7A1',
        'driftwood-brown': '#5A4632',
        'fog-gray': '#E5E7EB',
      },
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
