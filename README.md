# bluescape-contactform-tests
This repository contains tests for Contact page, located at https://bluescapeqainterview.wordpress.com/contact/.

Page Object pattern inplemented in Contact Page abstraction (./pages/ContactPage.js).

One helper is created (./helpers/cssHelper.js) for extraction of attribute from element and validation of "required" element css attributes.

Added 3 steps to steps_file.js: filling form completely / filling form without attribute(s) specified in step's parameters.

Allure plugin is added for reporting.

### Tests:
- Test Contact Page tab is active
- Test Contact Form required field (Name and Email)
- Test Website input field is required to be URL
- Test Submit Contact Form: valid path

### Installation and running:
1. Install Node js.

For Mac Osx use Homebrew:
 ```
 brew update
 brew install node
 ```
2. Clone repository.
3. Install dependencies using terminal:
 ```
 npm install
 ```
4. Run tests using command of a kind:
 ```
 npm run simplerun   //running all tests without reporting
 npm run allureSimpleRun  //running all tests and creates .xml report in ./output folder
 npx codeceptjs run-multiple basic //running tests in chrome, firefox, safari
 ```
5. See Allure report (if created): 
 ```
 allure serve output
 ```
