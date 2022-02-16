const {I, contactPage, headerFragment} = inject();

Feature('Contact Page');

let assert = require('assert')

// BeforeSuite(async ({ I }) => {
//     await I.amOnPage('/' + contactPage.contactPageUrl);
//     await I.seeElement(headerFragment.siteTitleLink);
// });

Before(async ({ I }) => {
    await I.amOnPage('/' + contactPage.contactPageUrl);
    await I.seeElement(contactPage.contactForm);
});

Scenario('Test Contact Page tab is active', async ({I}) => {
    assert.equal(await I.getNavigationItemActivityStatus(contactPage.contactPageMenuHeaderLink), 'page');
});

Scenario('Test Contact Form mandatory fields', async ({I}) => {
    assert.equal(await contactPage.checkContactFormRequiredFields(), true);
});

Scenario('Test Website input field is required to be URL', async ({I}) => {
    assert.equal(await I.getTypeOfElement(contactPage.contactFormFields.webSiteInput),'url');
});







