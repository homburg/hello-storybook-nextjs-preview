const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  // assetPrefix: "/app/assets", // Only works for scripts, not public folder
  webpack: config => {
    config.resolve.alias["~"] = path.resolve(__dirname);
    return config;
  }
});
