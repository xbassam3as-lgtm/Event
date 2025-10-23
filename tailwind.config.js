module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006D5B", // teal
          50: "#E6F6F3",
          100: "#CCEDE7",
          200: "#99DBD0",
          300: "#66C9B8",
          400: "#33B7A1",
          500: "#006D5B",
          600: "#005A4B",
          700: "#00483C",
          800: "#00352C",
          900: "#00231D",
        },
        secondary: {
          DEFAULT: "#7B1FA2", // purple
          50: "#F3E5F5",
          100: "#E1BEE7",
          200: "#CE93D8",
          300: "#BA68C8",
          400: "#AB47BC",
          500: "#7B1FA2",
          600: "#6A1B9A",
          700: "#4A148C",
          800: "#3A1078",
          900: "#2A0C64",
        },
        accent: {
          DEFAULT: "#FFB300", // amber
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFC107",
          500: "#FFB300",
          600: "#FFA000",
          700: "#FF8F00",
          800: "#FF6F00",
          900: "#E65100",
        },
        background: "#FFFFFF", // pure white
        surface: "#F5F5F5", // light gray
        text: {
          primary: "#212121", // near black
          secondary: "#757575", // medium gray
        },
        success: "#228B22", // olive-green
        warning: "#DAA520", // saffron-gold
        error: "#B22222", // burgundy-red
      },
      fontFamily: {
        headlines: ['Amiri', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Poppins', 'sans-serif'],
        accent: ['Tajawal', 'sans-serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Amiri', 'serif'],
      },
      boxShadow: {
        'warm': '0 4px 12px rgba(193, 123, 71, 0.15)',
        'warm-lg': '0 8px 24px rgba(193, 123, 71, 0.2)',
        'warm-sm': '0 2px 6px rgba(193, 123, 71, 0.1)',
      },
      transitionDuration: {
        'cultural': '300ms',
      },
      transitionTimingFunction: {
        'cultural': 'ease-out',
      },
      spacing: {
        'cultural': '1.5rem', // 24px - generous spacing for cultural hospitality
      },
    },
  },
  plugins: [],
}