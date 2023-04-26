/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    screens: {
      'br320': '320px',
      // => @media (min-width: 320px) { ... }

      'br360': '360px',
      // => @media (min-width: 360px) { ... }

      'br480': '480px',
      // => @media (min-width: 480px) { ... }

      'br600': '600px',
      // => @media (min-width: 600px) { ... }

      'br768': '768px',
      // => @media (min-width: 768px) { ... }

      'br1024': '1024px',
      // => @media (min-width: 1024px) { ... }

      'br1220': '1220px',
      // => @media (min-width: 1220px) { ... }

      'br1440': '1440px',
      // => @media (min-width: 1440px) { ... }

      'br1660': '1660px',
      // => @media (min-width: 1660px) { ... }

      'br1920': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [],
}

