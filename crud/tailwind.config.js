/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#ffc1e8",
                
        "secondary": "#88e83e",
                
        "accent": "#93ffff",
                
        "neutral": "#282c34",
                
        "base-100": "#f3eef7",
                
        "info": "#8cc7de",
                
        "success": "#7de3c8",
                
        "warning": "#e28718",
                
        "error": "#ee2061",
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
