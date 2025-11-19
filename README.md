# 🎨 ChatGPT Atlas - SvelteKit Website

A modern, accessible SvelteKit website featuring shadcn/ui components, built with TypeScript and Tailwind CSS. Designed to replicate the ChatGPT Atlas interface with professional typography and comprehensive accessibility features.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface matching ChatGPT Atlas
- ⚡ **SvelteKit**: Fast, reactive framework with server-side rendering
- 🎯 **Accessibility First**: WCAG AA compliant with comprehensive accessibility features
- 🎨 **Typography Excellence**: Professional typography with Inter font and systematic spacing
- 📱 **Responsive Design**: Mobile-first approach with responsive breakpoints
- 🛠️ **TypeScript**: Full type safety and developer experience
- 🎨 **shadcn/ui**: Modern component library built on Tailwind CSS
- 🚀 **Production Ready**: Optimized for deployment with Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chatgpt-atlas-shadcn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking
- `npm run lint` - Run linting
- `npm run format` - Format code
- `npm run test` - Run tests

## 📁 Project Structure

```
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   ├── Header.svelte
│   │   │   ├── Hero.svelte
│   │   │   └── ...
│   │   └── utils.js             # Utility functions
│   ├── routes/                  # SvelteKit routes
│   ├── app.html                 # HTML template
│   ├── app.css                  # Global styles
│   └── main.js                  # Entry point
├── static/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── svelte.config.js             # SvelteKit configuration
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel deployment config
└── package.json                 # Dependencies and scripts
```

## 🎨 Design System

### Typography
- **Font**: Inter var with system fallbacks
- **Scale**: 1.250 ratio modular scale
- **Line Height**: 1.5 for body, 1.25 for headings
- **Letter Spacing**: tracking-tight for headings, tracking-normal for body
- **Max Line Length**: 65 characters for optimal readability

### Spacing
- **Base Unit**: 4px grid system
- **Consistent Rhythm**: gap-4 between sections
- **Responsive**: 4px mobile padding, 8px desktop

### Colors
- **Primary**: ChatGPT Atlas blue theme
- **Accessibility**: WCAG AA compliant color contrasts
- **Dark Mode**: Full dark mode support with CSS variables

### Components
- **Button**: Multiple variants with accessibility features
- **Card**: Configurable padding, shadow, and rounded variants
- **Typography**: Heading and Paragraph components
- **Focus Management**: Focus-visible rings on all interactive elements

## 🌐 Deployment

### Vercel Deployment (Recommended)

#### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set environment variables in Vercel dashboard**
   - Go to your project settings
   - Add environment variables:
     - `VITE_PUBLIC_APP_NAME=ChatGPT Atlas`
     - `VITE_PUBLIC_SITE_URL=https://your-domain.vercel.app`

#### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect it's a SvelteKit project
   - Add environment variables in Vercel dashboard
   - Deploy

#### Environment Variables for Production

Set these in your Vercel project settings:

```
VITE_PUBLIC_APP_NAME=ChatGPT Atlas
VITE_PUBLIC_SITE_URL=https://your-domain.vercel.app
NODE_ENV=production
```

### Alternative: GitHub Pages

1. **Update `svelte.config.js`**
   ```javascript
   import adapter from '@sveltejs/adapter-static';
   
   const config = {
     kit: {
       adapter: adapter({
         pages: 'build',
         assets: 'build',
         fallback: null,
         precompress: false,
         strict: true
       })
     }
   };
   ```

2. **Build and deploy**
   ```bash
   npm run build
   # Deploy the 'build' folder to GitHub Pages
   ```

### Environment Variables

Create `.env.local` for local development:

```env
VITE_PUBLIC_APP_NAME=ChatGPT Atlas
VITE_PUBLIC_SITE_URL=http://localhost:5173
```

For production, set these in your deployment platform.

## 🛠️ Development

### Adding New Components

1. **Create component in `src/lib/components/ui/`**
   ```svelte
   <script lang="ts">
     import { cn } from '$lib/utils.js';
     export let className = '';
   </script>
   
   <div class={cn('base-classes', className)}>
     <slot />
   </div>
   ```

2. **Follow shadcn/ui patterns**
   - Use CSS variables for theming
   - Include accessibility features
   - Support dark mode
   - Use Tailwind utility classes

### Styling Guidelines

- Use utility-first approach with Tailwind CSS
- Follow the 4px base spacing system
- Maintain consistent typography scale
- Ensure WCAG AA color contrast
- Include focus-visible styles

### Accessibility Features

- ✅ Minimum 44px touch targets
- ✅ Focus-visible rings on interactive elements
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast compliance

## 📊 Performance

- ⚡ **Optimized Bundle**: Tree-shaking and code splitting
- 🚀 **Fast Loading**: Font-display: swap for fonts
- 📱 **Mobile Optimized**: Responsive images and breakpoints
- 🔧 **SEO Ready**: Meta tags and semantic HTML

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
npm run test

# Type checking
npm run check

# Linting
npm run lint

# Format checking
npm run format
```

## 📦 Dependencies

### Core Dependencies
- **SvelteKit**: Modern web framework
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library
- **Lucide Svelte**: Icon library

### Development Dependencies
- **Vite**: Build tool and development server
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Svelte Check**: Type checking
- **Vitest**: Unit testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for the component system
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Vercel](https://vercel.com/) for seamless deployment
- Open source community for inspiration and tools

## 📞 Support

If you have any questions or need help with deployment:

1. Check the [Issues](https://github.com/your-username/chatgpt-atlas/issues) page
2. Create a new issue with detailed information
3. Contact: [your-email@example.com](mailto:your-email@example.com)

---

**Built with ❤️ by MiniMax Agent**

Happy coding! 🚀