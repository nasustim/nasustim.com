/** @type {import('next').NextConfig} */

const defaultConfig = {
  images: {
    unoptimized: true,
  },
  // GA_MEASUREMENT_ID is used from a client component; without this (or a
  // NEXT_PUBLIC_ prefix) Next.js does not inline it into the browser bundle.
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID ?? "",
  },
  output: "export",
  reactStrictMode: true,
};

const analyerConfig = require("@next/bundle-analyzer")({
  enabled: true,
})({});

const config = process.env.ANALYZE === "true" ? analyerConfig : defaultConfig;
module.exports = config;
