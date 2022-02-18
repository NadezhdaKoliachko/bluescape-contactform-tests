const {I, contactPage, cssHelper, data} = inject();
const log4js = require("log4js");
const assert = require('assert')

Feature('Contact Page');

Before(async ({ I }) => {
    await contactPage.openContactPage();
    await I.seeElement(contactPage.contactForm);

});

Scenario('Test Contact Page tab is active', async ({I}) => {
    assert.equal(await contactPage.checkContactPageMenuIsActive(), true);
});

Scenario('Test Contact Form mandatory fields',  async ({I}) => {
    assert.equal(await contactPage.checkContactFormFieldIsRequired(contactPage.contactFormFields.name.label,
        contactPage.contactFormFields.name.input), true);
    assert.equal(await contactPage.checkContactFormFieldIsRequired(contactPage.contactFormFields.email.label,
        contactPage.contactFormFields.email.input), true);
});

Scenario('Test Website input field is required to be URL', async ({I}) => {
    assert.equal(await cssHelper.getTypeOfElement(contactPage.contactFormFields.website.input),'url');
});


Scenario("Test Submit Contact Form: valid path", async ({I}) => {
    await contactPage.fillCompletedContactForm();
    await I.waitForText("Message Sent (", 7);
    assert.equal((await I.grabCurrentUrl()).includes("contact-form-sent"), true);
});









