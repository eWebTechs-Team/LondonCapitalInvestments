import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C5A572',
          night: '#0D1117',
          slate: '#1F2937',
          mist: '#F5F5F4'
        }
      },
      boxShadow: {
        elegant: '0 20px 45px rgba(13, 17, 23, 0.08)'
      }
    }
  },
  plugins: []
} satisfies Config;
