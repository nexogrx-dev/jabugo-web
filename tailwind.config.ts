import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', "'Times New Roman'", 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#faf7f3',  // paper  — warm white of bellota fat and bodega walls
          100: '#ede5d8',  // parchment — aged paper, linen
          200: '#d4c4b0',  // bone — neutral tan, dividers
          500: '#7a3d24',  // clay — the Jabugo granate-terracota
          600: '#b84d1a',  // ember — copper accent, seals and highlights
          700: '#6b5248',  // smoke — secondary text, muted mauve-brown
          900: '#1c100c',  // ink — near-black, aged leather
        },
      },
      boxShadow: {
        card: '0 1px 4px rgba(28, 16, 12, 0.08)',
      },
      backgroundImage: {
        'grain-gradient': 'linear-gradient(168deg, #faf7f3 0%, #f0e8d8 60%, #e8dccb 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
