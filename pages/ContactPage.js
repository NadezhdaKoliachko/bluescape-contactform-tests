const { I, headerFragment } = inject();

module.exports = {

    contactPageUrl: 'contact/',
    contactPageMenuHeaderLink: headerFragment.locateNavigationLinkById('#menu-item-22'),
    contactForm: locate('#contact-form-7').find('form'),
    contactFormFields: {
        nameFieldLabel: locate('label[class="grunion-field-label name"]'),
        nameInput: locate('input#g7-name'),
        emailFieldLabel: locate('label[class="grunion-field-label email"]'),
        emailInput: locate('input#g7-email'),
        webSiteInput: locate('input#g7-website'),
        dateInput: locate('input#g7-date')
    },

    async checkContactFormRequiredFields() {
        return await I.checkFieldsAreRequired([this.contactFormFields.nameFieldLabel, this.contactFormFields.nameInput],
            [this.contactFormFields.emailFieldLabel, this.contactFormFields.emailInput]);
    }



  // insert your locators and methods here
}
