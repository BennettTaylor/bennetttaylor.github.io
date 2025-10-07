// postcss.config.js (or .cjs) - USE THIS
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- This is the new, correct package name for v4
    'autoprefixer': {},
  },
}