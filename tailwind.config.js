/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/@shadcn/svelte/dist/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Custom ChatGPT Atlas colors
        'primary-blue-light': '#ADD8E6',
        'primary-blue-dark': '#87CEEB',
        'neutral-0': '#FFFFFF',
        'neutral-50': '#F8F9FA',
        'neutral-700': '#495057',
        'neutral-900': '#212529',
        'border-subtle': '#E9ECEF',
        'success': '#28A745',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Accessibility colors for contrast testing
        "primary-foreground": "hsl(var(--primary-foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      fontFamily: {
        sans: [
          '"Inter var"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      // Typography scale following 1.250 ratio from checklist
      fontSize: {
        // custom values following modular scale
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.55" }],
        xl: ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.65" }],
        "3xl": ["1.875rem", { lineHeight: "1.7" }],
        "4xl": ["2.25rem", { lineHeight: "1.75" }],
        "5xl": ["3rem", { lineHeight: "1.8" }],
        "6xl": ["3.75rem", { lineHeight: "1.85" }],
      },
      // Spacing system following 4px base unit from checklist
      spacing: {
        0: "0px",
        1: "0.25rem",   // 4px
        2: "0.5rem",    // 8px
        3: "0.75rem",   // 12px
        4: "1rem",      // 16px
        5: "1.25rem",   // 20px
        6: "1.5rem",    // 24px
        8: "2rem",      // 32px
        10: "2.5rem",   // 40px
        12: "3rem",     // 48px
        16: "4rem",     // 64px
        20: "5rem",     // 80px
        24: "6rem",     // 96px
        32: "8rem",     // 128px
        40: "10rem",    // 160px
        48: "12rem",    // 192px
        56: "14rem",    // 224px
        64: "16rem",    // 256px
      },
      // Border radius following checklist specifications
      borderRadius: {
        none: "0px",
        sm: "0.125rem", // 2px
        md: "0.375rem", // 6px
        lg: "0.5rem",   // 8px
        xl: "0.75rem",  // 12px
        "2xl": "1rem",  // 16px
        full: "9999px",
      },
      // Shadow system from checklist
      boxShadow: {
        sm: "0 1px 2px hsl(var(--shadow) / 0.12)",
        md: "0 4px 6px -1px hsl(var(--shadow) / 0.1), 0 2px 4px -2px hsl(var(--shadow) / 0.1)",
        lg: "0 10px 15px -3px hsl(var(--shadow) / 0.1), 0 4px 6px -4px hsl(var(--shadow) / 0.1)",
        'brand': '0px 8px 24px rgba(33, 37, 41, 0.08)',
      },
      // Letter spacing utilities
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      // Line height utilities
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      // Aspect ratio utilities
      aspectRatio: {
        square: "1 / 1",
        video: "16 / 9",
        photo: "4 / 3",
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
      // Z-index scale from checklist
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in': 'fadeIn 0.2s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for text-shadow utilities
    function({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": "text-shadow: 0 1px 2px hsl(var(--shadow) / 0.12);",
        ".text-shadow-md": "text-shadow: 0 2px 4px hsl(var(--shadow) / 0.15);",
        ".text-shadow-lg": "text-shadow: 0 4px 8px hsl(var(--shadow) / 0.2);",
      });
    },
    // Custom plugin for focus-visible utilities
    function({ addUtilities }) {
      addUtilities({
        ".focus-ring": "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        ".focus-ring-inset": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
      });
    },
  ],
}