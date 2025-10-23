module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C17B47", // warm-stone
          50: "#FDF8F4", // warm-stone-50
          100: "#F9EDE1", // warm-stone-100
          200: "#F2D9C3", // warm-stone-200
          300: "#E8C19F", // warm-stone-300
          400: "#D59D73", // warm-stone-400
          500: "#C17B47", // warm-stone-500
          600: "#A86538", // warm-stone-600
          700: "#8B522C", // warm-stone-700
          800: "#6D4023", // warm-stone-800
          900: "#4A2B16", // warm-stone-900
        },
        secondary: {
          DEFAULT: "#8B4513", // cedar-wood
          50: "#F7F2ED", // cedar-wood-50
          100: "#EDE1D1", // cedar-wood-100
          200: "#D9BFA0", // cedar-wood-200
          300: "#C19A6E", // cedar-wood-300
          400: "#A67142", // cedar-wood-400
          500: "#8B4513", // cedar-wood-500
          600: "#73380F", // cedar-wood-600
          700: "#5C2D0C", // cedar-wood-700
          800: "#452209", // cedar-wood-800
          900: "#2E1706", // cedar-wood-900
        },
        accent: {
          DEFAULT: "#D4AF37", // golden-dome
          50: "#FEFCF5", // golden-dome-50
          100: "#FDF7E6", // golden-dome-100
          200: "#FAECBF", // golden-dome-200
          300: "#F5DD8F", // golden-dome-300
          400: "#EFCC5F", // golden-dome-400
          500: "#D4AF37", // golden-dome-500
          600: "#B8942E", // golden-dome-600
          700: "#967825", // golden-dome-700
          800: "#735C1D", // golden-dome-800
          900: "#4F3F14", // golden-dome-900
        },
        background: "#FDFCF8", // warm-parchment
        surface: "#F5F2ED", // sand-texture
        text: {
          primary: "#2C1810", // earth-brown
          secondary: "#5D4E37", // muted-bronze
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