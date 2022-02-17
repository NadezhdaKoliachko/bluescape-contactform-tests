
exports.config = {
  tests: './tests/*Test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://bluescapeqainterview.wordpress.com/',
      show: true,
      waitForAction: 500
    },
    AssertWrapper : {
      require: "codeceptjs-assert"
    }
  },
  multiple: {
    basic: {
      browsers: ['chromium', 'webkit', 'firefox']
    },
  },
  include: {
    I: './steps_file.js',
    contactPage: './pages/ContactPage.js',
  },
  plugins: {
    allure: {}
  },
  bootstrap: null,
  mocha: {},
  name: 'bluescape-contact-tests'
}