export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
    // "^.+\\.css$": "jest-css-transform",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    // "\\.(css|scss|sass)$": "<rootDir>/jest/mock-css.js",
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  // transformIgnorePatterns: ["node_modules/(?!(jest-css-modules|@storybook))"],
};