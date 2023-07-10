/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
  
          "primary": "#e8a4e0",
          
          "secondary": "#0252cc",
                   
          "accent": "#37f21a",
                   
          "neutral": "#171627",
                   
          "base-100": "#e6dcef",
                   
          "info": "#459bd9",
                   
          "success": "#1fdbc8",
                   
          "warning": "#e9a03a",
                   
          "error": "#f1323f",
        },
      },
    ],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],

}
