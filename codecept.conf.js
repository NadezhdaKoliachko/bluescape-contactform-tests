exports.config = {
  tests: "./tests/*Test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://bluescapeqainterview.wordpress.com/",
      show: true,
    },
  },
  multiple: {
    basic: {
      browsers: ["chromium", "webkit", "firefox"],
    },
  },
  include: {
    I: "./steps_file.js",
    contactPage: "./pages/ContactPage.js",
    cssHelper: "./helpers/cssHelper.js",
    data: "./data.js",
  },
  plugins: {
    allure: {},
  },
  bootstrap: null,
  mocha: {},
  name: "bluescape-contact-tests",
};
