module.exports = {
  extends: "airbnb-base",
  plugins: ["import", "prettier"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "arrow-body-style": "off",
    "prettier/prettier": "error",
  },
};
