/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isProd ? "/dev-notes-blog" : "",
  assetPrefix: isProd ? "/dev-notes-blog/" : ""
};

module.exports = nextConfig;