const production = !process.env.ROLLUP_WATCH;
const colors = require('tailwindcss/colors')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/**/*.html"
    ],
    css: ["./public/**/*.css"],
    enabled: production // disable purge in dev
  },
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Noto Sans JP', 'sans-serif']
    },
    extend: {
      colors: {
        coolGray: colors.coolGray,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      fontWeight: ['hover', 'focus']
    }
  },
  plugins: [],
};
