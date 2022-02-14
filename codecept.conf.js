exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://bluescapeqainterview.wordpress.com/contact/',
      show: true,
      browser: 'firefox'
    }
  },
  multiple: {
    basic: {
      browsers: ['chromium', 'webkit', 'firefox']
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'bluescape-contact-tests'
}