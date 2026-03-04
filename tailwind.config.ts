import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f2ee',
          100: '#e7ddd1',
          500: '#8a4b2f',
          700: '#5e301f',
          900: '#2f1a14',
        },
      },
      boxShadow: {
        card: '0 12px 24px rgba(47, 26, 20, 0.08)',
      },
      backgroundImage: {
        'grain-gradient': 'radial-gradient(circle at top right, rgba(138, 75, 47, 0.18), transparent 50%), linear-gradient(160deg, #f8f5f1 0%, #f2ece4 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
