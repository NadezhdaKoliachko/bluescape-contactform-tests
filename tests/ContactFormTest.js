const {I, contactPage} = inject();
const log4js = require("log4js");

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
    assert.equal(await I.getAriaCurrentOfElement(contactPage.contactPageMenuHeaderLink), 'page');
});

Scenario('Test Contact Form mandatory fields', async ({I}) => {
    assert.equal(await I.checkFieldIsRequired(contactPage.contactFormFields.name.label,
    contactPage.contactFormFields.name.input), true);
    assert.equal(await I.checkFieldIsRequired(contactPage.contactFormFields.email.label,
        contactPage.contactFormFields.email.input), true);
    const currURL = await I.grabCurrentUrl();
    await I.click(contactPage.submitButton);
    await I.seeCurrentUrlEquals(currURL);
    await I.fillField(contactPage.contactFormFields.name.input, "Name");
    await I.click(contactPage.submitButton);
    await I.seeCurrentUrlEquals(currURL);
});

Scenario('Test Website input field is required to be URL', async ({I}) => {
    assert.equal(await I.getTypeOfElement(contactPage.contactFormFields.website.input),'url');
});


Scenario("Test Submit Contact Form: valid path", async ({I, Data}) => {
    await I.fillField(contactPage.contactFormFields.name.input, Data.name);
    await I.fillField(contactPage.contactFormFields.email.input, Data.emailValue);
    await I.fillField(contactPage.contactFormFields.website.input, Data.website);
    await I.click(contactPage.contactFormFields.date.input);
    await I.click(locate('a').withText(Data.dateDay));
    var display = await I.grabCssPropertyFrom(contactPage.contactFormFields.date.datePicker, "display");
    assert.equal(display, "none");
    I.click(contactPage.submitButton)
    await I.see('Message Sent');
}).injectDependencies({ Data: require('./data.js') });









