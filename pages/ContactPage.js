const { I, data, cssHelper } = inject();

module.exports = {
  contactPageUrl: "contact/",
  contactPageMenuHeaderLink: locate("#menu-item-22").find("a"),
  contactForm: locate('form[class="contact-form commentsblock"]'),
  contactFormFields: {
    name: {
      label: locate('label[class="grunion-field-label name"]'),
      input: locate("input#g7-name"),
    },
    email: {
      label: locate('label[class="grunion-field-label email"]'),
      input: locate("input#g7-email"),
    },
    website: {
      input: locate("input#g7-website"),
    },
    date: {
      input: locate("input#g7-date"),
    },
  },
  submitButton: locate('button[type="submit"]'),

  async openContactPage() {
    await I.amOnPage("/" + this.contactPageUrl);
  },

  async fillCompletedContactForm() {
    await I.fillTheFormCompletely(this.createCompletedContactFormMap());
    await I.click(this.submitButton);
  },

  async fillContactFormExcludingFields(setOfExcludedInputLocators) {
    await I.fillTheFormExcludingFields(
      this.createCompletedContactFormMap(),
      setOfExcludedInputLocators
    );
    await I.click(this.submitButton);
  },

  async fillContactFormExcludingField(excludedInputLocator) {
    await I.fillTheFormExcludingField(
      this.createCompletedContactFormMap(),
      excludedInputLocator
    );
    await I.click(this.submitButton);
  },

  createCompletedContactFormMap() {
    let map = new Map();
    map.set(this.contactFormFields.name.input, data.name);
    map.set(this.contactFormFields.email.input, data.emailValue);
    map.set(this.contactFormFields.website.input, data.website);
    map.set(this.contactFormFields.date.input, data.dateValue);
    return map;
  },

  async checkContactFormFieldIsRequired(fieldLabel, inputLocator) {
    if (await cssHelper.checkFieldIsRequired(fieldLabel, inputLocator)) {
      const currURL = await I.grabCurrentUrl();
      await this.fillContactFormExcludingField(inputLocator);
      return (await I.grabCurrentUrl()) === currURL;
    }
    return false;
  },

  async checkContactPageMenuIsActive() {
    return (
      (await cssHelper.getAriaCurrentOfElement(
        this.contactPageMenuHeaderLink
      )) === "page"
    );
  },
};
