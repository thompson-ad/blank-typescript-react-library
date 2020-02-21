module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/stories/**/*.{js,jsx,ts,tsx}"
  ],
  coverageThreshold: {
    global: {
      lines: 70,
      statements: 70
    }
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ["./src/setupTests.ts"]
};
