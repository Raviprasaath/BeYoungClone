/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      colors: {
        primaryColor1: '#FF6AC2',
        primaryColor2: '#EAD7BB',
        primaryColor3: '#9EDDFF',
        
      },
      fontSize: {
        primarySize1: '24px',
      },
      screens: {
        'sm1': '360px',
        'sm2': '480px',
        'sm3': '600px',
        'sm4': '680px',
        // => @media (min-width: 640px) { ... }  
        'md1': '768px',
        'md2': '960px',
        // => @media (min-width: 768px) { ... }  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }

    },
  },
  plugins: [],
}

