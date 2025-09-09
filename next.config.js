const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  trailingSlash: true,
  output: "export",
  distDir: "dist",
  // Configure basePath and assetPrefix based on your deployment needs
  // basePath: "/changelog",
  // assetPrefix: "/changelog/",
};

module.exports = withMDX(nextConfig);
