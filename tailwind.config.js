/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textDescription: 'var(--text-description)',
        textPrimary: 'var(--text-primary)',
        textSecundary: 'var(--text-secondary)',
        textThird: 'var(--text-third)',
      },
      backgroundColor: {
        backgroundPrimary: 'var(--background-primary)',
        backgroundSecundary: 'var(--background-secundary)',
        backgroundThird: 'var(--background-third)',
        backgroundShadow: 'var(--background-shadow)',
        backgroundBlack: 'var(--background-black)',
        backgroundMobileOne: 'var(--background-mobile-one)',
        backgroundMobileTwo: 'var(--background-mobile-two)',
        backgroundModalShadow: 'var(--background-modal-shadow)',
      },
      borderColor: {
        borderPrimary: 'var(--border-primary)',
      },
      maxWidth: {
        'custom': 'var(--max-width)',
      }
    },
  },
  plugins: [],
}
