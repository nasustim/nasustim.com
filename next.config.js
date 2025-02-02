/** @type {import('next').NextConfig} */

const defaultConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

const analyerConfig = require("@next/bundle-analyzer")({
  enabled: true,
})({});

const config = process.env.ANALYZE === "true" ? analyerConfig : defaultConfig;
module.exports = config;
