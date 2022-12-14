module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  "automock": false,
  "setupFiles": [
    "./setupJest.js"
  ]
};