# Modern Changelog Template

A beautiful, modern, and responsive changelog template built with **Next.js**, **MDX**, **Tailwind CSS**, and **React Icons**. Features a stunning dark theme with glass morphism effects and smooth animations.

## Features

- **Modern Dark Theme** - Beautiful dark UI with glass morphism effects
- **MDX Support** - Write changelog entries in Markdown with React components
- **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- **TypeScript Ready** - Full TypeScript support for better development
- **SEO Optimized** - Dynamic page titles and meta descriptions
- **Static Export** - Deploy anywhere with static file hosting
- **React Icons** - Beautiful icons from Feather and Remix Icon sets
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Clean Code** - Well-structured, commented, and maintainable code

## Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or download this template**

   ```bash
   git clone https://github.com/FardinHash/changelog-template
   cd changelog-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## Customization

### 1. Update Project Information

Edit `pages/index.tsx` to customize:

```typescript
// Update these values
<h1>Your Project Name</h1>
<p>Your Project Description - Release History</p>

// Update action buttons
<a href="https://your-docs-url.com">Documentation</a>
<a href="https://github.com/your-username/your-repo">GitHub</a>
```

### 2. Update Layout Component

Edit `components/Layout.tsx`:

```typescript
// Update page title format
<title>{meta.version} - {meta.title} - Your Project Name</title>

// Update footer
<p>Your Project Name</p>

// Update external link
<a href="https://your-docs-url.com">Documentation</a>
```

### 3. Add Your Changelog Entries

Create new MDX files in the `pages/` directory:

```bash
pages/
  v3.0.mdx    # Your latest release
  v2.9.mdx    # Previous release
  v2.8.mdx    # And so on...
```

### 4. Update Release Data

Edit the `releases` array in `pages/index.tsx`:

```typescript
const releases = [
  {
    version: "v3.0",
    title: "Your Latest Release Title",
    date: "January 15, 2025",
    status: "Live", // or "Released"
    description: "Brief description of what's new",
    contributors: ["@yourusername", "@teammate"],
  },
  // Add more releases...
];
```

## Creating Changelog Entries

### MDX File Structure

Each changelog entry should be an MDX file with this structure:

````mdx
import Layout from "../components/Layout";

export const meta = {
  version: "v2.1",
  title: "Your Release Title",
  date: "December 15, 2024",
  status: "Live", // or "Released"
  contributors: ["@contributor1", "@contributor2"],
};

# Your Release Title

Your changelog content goes here. You can use:

## Headings

### Subheadings

- Bullet points
- **Bold text**
- _Italic text_
- `Code snippets`

```javascript
// Code blocks
const example = "Hello World";
```
````

## Tables

| Feature | Before | After |
| ------- | ------ | ----- |
| Speed   | Slow   | Fast  |

> Blockquotes for important notes

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

````

### Supported Markdown Features

- Headers (H1-H6)
- Bold and italic text
- Code blocks with syntax highlighting
- Tables
- Lists (ordered and unordered)
- Links
- Blockquotes
- Horizontal rules

## Styling & Theming

### Color Customization

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: "#f0f9ff",   // Light accent
        500: "#3b82f6",  // Main accent
        600: "#2563eb",  // Darker accent
        700: "#1d4ed8",  // Darkest accent
      },
    },
  },
},
````

### Custom Styles

Add custom styles in `styles/globals.css`. The template uses Tailwind's `@layer` directive for organization:

```css
@layer components {
  .your-custom-class {
    @apply bg-white/10 rounded-xl p-4;
  }
}
```

## Deployment

### Static Export (Recommended)

1. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy the `dist/` folder** to any static hosting service:
   - Netlify
   - Vercel
   - DO
   - GitHub Pages
   - AWS S3
   - Any CDN or web server

### Custom Base Path

If deploying to a subdirectory, update `next.config.js`:

```javascript
const nextConfig = {
  basePath: "/changelog",
  assetPrefix: "/changelog/",
  // ... other config
};
```

### Integration with Existing Projects

To integrate with an existing application:

1. **Build the changelog**

   ```bash
   npm run build
   ```

2. **Serve the `dist/` folder** from your main application
   - Copy `dist/` contents to your server's static directory
   - Configure your server to serve these files at `/changelog/`
   - Update routing to handle changelog URLs

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Build and export static files

### Adding New Features

The template is designed to be easily extensible:

1. **Add new React components** in the `components/` directory
2. **Create new pages** in the `pages/` directory
3. **Add custom styles** in `styles/globals.css`
4. **Install additional dependencies** as needed

## Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Use a different port
   npm run dev -- -p 3002
   ```

2. **Build errors**

   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [MDX documentation](https://mdxjs.com/)
- Browse [Tailwind CSS documentation](https://tailwindcss.com/docs)

## License

This template is released under the MIT License. Feel free to use it in your projects, both personal and commercial.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

**Happy changelog writing!**
