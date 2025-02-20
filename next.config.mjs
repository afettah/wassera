/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Enable standalone output for optimized production deployment
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Target .svg files
      use: ['@svgr/webpack'], // Use @svgr/webpack to transform them into React components
    });

    return config;
  },
};

export default nextConfig;
