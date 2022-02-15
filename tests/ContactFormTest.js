const {I, contactPage, headerFragment} = inject();

Feature('Contact Page');

let assert = require('assert')

Before(async ({ I }) => {
    await I.amOnPage('/' + contactPage.contactPageUrl);
    await I.seeElement(headerFragment.siteTitleLink);
    await I.seeElement(contactPage.contactForm);
});

Scenario('Test Contact Page tab is active', async ({I}) => {
    let ariaCurrent = await I.grabAttributeFrom(contactPage.contactPageMenuHeaderLink, 'aria-current');
    assert.equal(ariaCurrent, 'page');
});

Scenario('Test Name input field is required', async ({I}) => {
    await I.seeElement(contactPage.contactFormFields.nameFieldLabel.find('span').withText('(required)'));
    await I.seeElement(contactPage.contactFormFields.nameInput.withAttr({required:''}));
    let ariaRequired = await I.grabAttributeFrom(contactPage.contactFormFields.nameInput, 'aria-required');
    assert.equal(ariaRequired, 'true');
})
