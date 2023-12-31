/** @type {import('next').NextConfig} */
const path = require("path");
// const withSWC = require("@next/swc");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {},
  images: {
    domains: ["apod.nasa.gov", "images-assets.nasa.gov"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
