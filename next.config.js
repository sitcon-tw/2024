/** @type {import('next').NextConfig} */
console.log("🥞    - url:", "http://localhost:3000/2024");
const nextConfig = {
  output: "export",
  // https://nextjs.org/docs/pages/api-reference/next-config-js/basePath
  basePath: "/2024",
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
};

module.exports = nextConfig;
