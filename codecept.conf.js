exports.config = {
  tests: './tests/*Test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://bluescapeqainterview.wordpress.com/',
      show: true
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
    homePage: './pages/HomePage.js',
    headerFragment: './fragments/Header.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'bluescape-contact-tests'
}