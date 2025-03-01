const isProduction = process.env.NODE_ENV === "production";
const repoName = "portfolio"; // Replace with your actual repository name

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProduction ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProduction ? `/${repoName}/` : '',
  trailingSlash: true,
};

export default nextConfig;