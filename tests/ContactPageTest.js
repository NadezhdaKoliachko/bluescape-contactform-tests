const { contactPage } = inject();
const assert = require("assert");

let requiredFields = new DataTable(["fieldLabel", "inputLocator"]);
requiredFields.add([
  contactPage.contactFormFields.name.label,
  contactPage.contactFormFields.name.input,
]);
requiredFields.add([
  contactPage.contactFormFields.email.label,
  contactPage.contactFormFields.email.input,
]);

Feature("Contact Page");

Before(async ({ I }) => {
  await contactPage.openContactPage();
  await I.seeElement(contactPage.contactForm);
});

Scenario("Test Contact Page tab is active", async () => {
  assert.equal(await contactPage.checkContactPageMenuIsActive(), true);
});

Data(requiredFields).Scenario(
  "Test Contact Form required field",
  async ({ current }) => {
    assert.equal(
      await contactPage.checkContactFormFieldIsRequired(
        current.fieldLabel,
        current.inputLocator
      ),
      true
    );
  }
);

Scenario("Test Website input field is required to be URL", async ({ I }) => {
  await I.seeAttributesOnElements(contactPage.contactFormFields.website.input, {
    type: "url",
  });
});

Scenario("Test Submit Contact Form: valid path", async ({ I }) => {
  await contactPage.fillCompletedContactForm();
  await I.waitForText("Message Sent (", 7);
  await I.seeInCurrentUrl("contact-form-sent");
});
