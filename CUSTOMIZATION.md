# Customization Guide

This guide will help you customize the changelog template for your specific project needs.

## Essential Customizations

### 1. Project Branding

**Update Project Name and Description**

In `pages/index.tsx`, replace:

```typescript
<h1>Your Project Name</h1>
<p>Your Project Description - Release History</p>
```

**Update Page Titles**

In `components/Layout.tsx`, update:

```typescript
<title>
  {meta.version} - {meta.title} - Your Project Name
</title>
```

**Update Footer**

In both `pages/index.tsx` and `components/Layout.tsx`:

```typescript
<p>Your Project Name</p>
```

### 2. Links and URLs

**Navigation Links**

Update action buttons in `pages/index.tsx`:

```typescript
<a href="https://your-docs-url.com">
  <FiCode className="w-4 h-4 mr-2" />
  Documentation
</a>
<a href="https://github.com/your-username/your-repo">
  <FiGithub className="w-4 h-4 mr-2" />
  GitHub
</a>
```

**External Documentation Link**

In `components/Layout.tsx`:

```typescript
<a href="https://your-docs-url.com">
  <FiExternalLink className="w-4 h-4 mr-2" />
  Documentation
</a>
```

### 3. Release Data

**Update Sample Releases**

In `pages/index.tsx`, replace the `releases` array:

```typescript
const releases = [
  {
    version: "v1.2.0",
    title: "Your Latest Release",
    date: "January 15, 2025",
    status: "Live", // "Live" or "Released"
    description: "Brief description of changes",
    contributors: ["@yourusername", "@teammate"],
  },
  // Add your actual releases...
];
```

## Visual Customization

### Color Scheme

**Primary Colors**

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: "#f0f9ff",   // Very light
    500: "#3b82f6",  // Main brand color
    600: "#2563eb",  // Slightly darker
    700: "#1d4ed8",  // Dark
  },
  // Add your brand colors
  brand: {
    500: "#your-brand-color",
  }
}
```

**Status Colors**

To customize status badges, edit the colors in `pages/index.tsx` and `components/Layout.tsx`:

```typescript
// For "Live" status
<div className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
// Change to your preferred colors:
<div className="bg-blue-500/20 text-blue-400 border-blue-500/30">
```

### Typography

**Font Family**

Update in `styles/globals.css`:

```css
html {
  font-family: "Your Font", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
}
```

**Font Sizes**

Adjust heading sizes in `styles/globals.css`:

```css
.prose-invert h1 {
  @apply text-white text-3xl sm:text-4xl font-bold mb-6;
}
```

## Feature Customization

### Status Types

**Add New Status Types**

You can add different status types beyond "Live" and "Released":

```typescript
// In your release data
status: "Beta"; // or "Alpha", "RC", "Deprecated", etc.

// Then add styling in your components
{
  meta.status === "Beta" && (
    <div className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
      <RiSparklingFill className="w-3 h-3" />
      <span>Beta</span>
    </div>
  );
}
```

### Additional Metadata

**Add More Fields to Releases**

Extend the release object structure:

```typescript
const releases = [
  {
    version: "v1.2.0",
    title: "Feature Release",
    date: "January 15, 2025",
    status: "Live",
    description: "Brief description",
    contributors: ["@dev1", "@dev2"],
    // Add custom fields
    category: "feature", // "feature", "bugfix", "security"
    breaking: false,
    downloadUrl: "https://releases.example.com/v1.2.0",
  },
];
```

**Display Additional Fields**

Then display them in your components:

```typescript
{
  release.breaking && (
    <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">
      Breaking Changes
    </div>
  );
}
```

### Navigation Enhancements

**Add Version Filtering**

Add filter buttons to `pages/index.tsx`:

```typescript
const [filter, setFilter] = useState("all");

// Filter releases
const filteredReleases = releases.filter((release) => {
  if (filter === "all") return true;
  return release.status.toLowerCase() === filter;
});

// Add filter UI
<div className="mb-8 flex gap-2">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("live")}>Live</button>
  <button onClick={() => setFilter("released")}>Released</button>
</div>;
```

**Add Search Functionality**

```typescript
const [search, setSearch] = useState("");

const searchedReleases = filteredReleases.filter(
  (release) =>
    release.title.toLowerCase().includes(search.toLowerCase()) ||
    release.description.toLowerCase().includes(search.toLowerCase())
);

// Add search input
<input
  type="text"
  placeholder="Search releases..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full p-3 bg-white/5 border border-white/10 rounded-xl"
/>;
```

## Layout Customization

### Card Layout

**Change Card Design**

Modify the release card structure in `pages/index.tsx`:

```typescript
<article className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
  {/* Customize the internal layout */}
  <div className="flex items-center justify-between mb-4">
    {/* Your custom header */}
  </div>
  {/* Your custom content */}
</article>
```

## Advanced Customization

### Custom Components

**Create Reusable Components**

Add new components in `components/`:

```typescript
// components/StatusBadge.tsx
export function StatusBadge({ status }: { status: string }) {
  const colors = {
    Live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Beta: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    // Add more status types
  };

  return (
    <div
      className={`px-3 py-1.5 rounded-xl text-xs font-medium ${colors[status]}`}
    >
      {status}
    </div>
  );
}
```

### MDX Components

**Add Custom MDX Components**

Create custom components for your changelog entries:

```typescript
// components/FeatureHighlight.tsx
export function FeatureHighlight({ title, children }) {
  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 my-4">
      <h4 className="text-blue-400 font-semibold mb-2">{title}</h4>
      {children}
    </div>
  );
}
```

Use in your MDX files:

```mdx
import { FeatureHighlight } from "../components/FeatureHighlight";

<FeatureHighlight title="New Feature">
  This is a highlighted feature description.
</FeatureHighlight>
```

### Analytics Integration

**Add Analytics Tracking**

```typescript
// Add to _app.tsx or individual pages
useEffect(() => {
  // Google Analytics
  gtag("config", "GA_MEASUREMENT_ID");

  // Or other analytics
  analytics.track("Changelog Viewed", {
    version: meta?.version,
  });
}, []);
```

## SEO Optimization

### Meta Tags

**Enhanced Meta Tags**

In `components/Layout.tsx`:

```typescript
<Head>
  <title>
    {meta.version} - {meta.title} - Your Project
  </title>
  <meta name="description" content={`${meta.title} - ${meta.description}`} />
  <meta property="og:title" content={`${meta.version} - ${meta.title}`} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={`${meta.version} - ${meta.title}`} />
</Head>
```

### Structured Data

**Add JSON-LD Structured Data**

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Your Project Name",
  version: meta.version,
  datePublished: meta.date,
  description: meta.title,
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>;
```