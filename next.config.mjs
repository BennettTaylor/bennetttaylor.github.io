/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Next.js to produce a static export
  output: 'export',

  // Optional: Add a basePath if your site is served from a subdirectory.
  // Since your repository is BennettTaylor.github.io, you likely don't need this.
  // basePath: '/your-repo-name',

  // Optional: Change the asset prefix for the same reason as basePath.
  // assetPrefix: '/your-repo-name/',
  
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
