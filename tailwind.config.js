/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: 'var(--color-steel)',
        sage: 'var(--color-sage)',
        cream: 'var(--color-cream)',
        sky: 'var(--color-sky)',
        periwinkle: 'var(--color-periwinkle)',
      },
    },
  },
  plugins: [],
};
