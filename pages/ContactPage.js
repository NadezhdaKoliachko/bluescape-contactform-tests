const { I, headerFragment } = inject();

module.exports = {

    contactPageUrl: 'contact/',
    contactPageMenuHeaderLink: headerFragment.locateNavigationLinkById('#menu-item-22'),
    contactForm: locate('#contact-form-7').find('form'),
    contactFormFields: {
        nameFieldLabel: locate('label[class="grunion-field-label name"]').withText('Name'),
        nameInput: locate('input#g7-name'),
        emailInput: locate('input#g7-email'),
        webSiteInput: locate('input#g7-website'),
        dateInput: locate('input#g7-date')
    }



  // insert your locators and methods here
}
