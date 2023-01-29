/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundColor: {
          'custom': '#c0a58e',
        },
      },
    },
    // ...
  
  
  purge: {
    // Specify the paths or glob patterns to analyze
    content: ['./src/**/*.{html,js}'],
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
    process.env.NODE_ENV === 'production' ? 'cssnano' : '',
  ],
}
