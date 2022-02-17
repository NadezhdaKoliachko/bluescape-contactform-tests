const {I} = inject();

module.exports = {

        contactPageUrl: 'contact/',
        contactPageMenuHeaderLink: locate('#menu-item-22').find('a'),
        contactForm: locate('form[class="contact-form commentsblock"]'),
        contactFormFields: {
            name: {
                label: locate('label[class="grunion-field-label name"]'),
                input: locate('input#g7-name'),
            },
            email: {
                label: locate('label[class="grunion-field-label email"]'),
                input: locate('input#g7-email'),
            },
            website: {
                input: locate('input#g7-website')
            },
            date: {
                input: locate('input#g7-date'),
                datePicker: locate('#ui-datepicker-div')
            }
        },
        submitButton: locate('button[type="submit"]')
}
