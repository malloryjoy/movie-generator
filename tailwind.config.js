export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0567c9',
        secondary: '#257f40',
        button: '#0567c9'
      },
      fontFamily: {
        sans: ['Arial', 'ui-sans-serif', 'system-ui'],
        serif: ['Times', 'ui-serif', 'Georgia'],
        amandine: ['Amandine', 'sans-serif'],
      }
    }
  },
  plugins: []
}
