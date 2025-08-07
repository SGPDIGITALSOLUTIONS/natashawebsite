/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Pantone Branding Pack
        brand: {
          navy: '#271d7a',      // Pantone 2372c - Dark blue
          cyan: '#00c2de',      // Pantone 3115c - Cyan/turquoise  
          purple: '#a15ec2',    // Pantone 2583c - Purple
          yellow: '#ffc762',    // Pantone 135c - Yellow
          white: '#ffffff',     // White
        },
        // Keep purple as alias for brand purple for compatibility
        purple: {
          50: '#f9f5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a15ec2',     // Pantone 2583c
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21b6',
          900: '#271d7a',     // Pantone 2372c
        },
        // Add cyan as primary accent
        cyan: {
          50: '#f0fdff',
          100: '#ccfbff',
          200: '#99f6ff',
          300: '#66d9ef',
          400: '#22d3ee',
          500: '#00c2de',     // Pantone 3115c
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Roca One', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 