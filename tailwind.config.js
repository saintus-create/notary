/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Primary blue gradient
				'primary-blue-light': '#ADD8E6',
				'primary-blue-dark': '#87CEEB',
				
				// Neutral colors
				'neutral-0': '#FFFFFF',
				'neutral-50': '#F8F9FA',
				'neutral-700': '#495057',
				'neutral-900': '#212529',
				
				// UI colors
				'border-subtle': '#E9ECEF',
				'success': '#28A745',
				'error': '#DC3545',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			spacing: {
				'xs': '8px',
				'sm': '16px',
				'md': '24px',
				'lg': '32px',
				'xl': '48px',
				'2xl': '64px',
				'3xl': '96px',
				'4xl': '128px',
			},
			boxShadow: {
				'brand': '0px 8px 24px rgba(33, 37, 41, 0.08)',
			},
			borderRadius: {
				'xl': '16px',
			},
			animation: {
				'fade-in': 'fadeIn 0.2s ease-out',
				'scale-in': 'scaleIn 0.2s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.98)' },
					'100%': { transform: 'scale(1)' },
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};