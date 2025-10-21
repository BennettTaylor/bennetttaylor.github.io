module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Ensure this line is present
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['var(--font-roboto-slab)', 'serif'],
        'chicle': ['var(--font-chicle)', 'serif'],
      },
    },
  },
  plugins: [],
}