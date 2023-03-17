module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: [
    "<rootDir>/test/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
