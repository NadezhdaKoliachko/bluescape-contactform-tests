const {I} = inject();

module.exports = {

    async getAriaCurrentOfElement(locator){
        return await I.grabAttributeFrom(locator, 'aria-current');
    },

    async checkFieldIsRequired(fieldLabel, inputLocator){
        let spanText = await I.grabTextFrom(locate('span').inside(fieldLabel));
        let requiredAttr = await I.grabAttributeFrom(inputLocator, 'required');
        let ariaRequiredAttr = await I.grabAttributeFrom(inputLocator, 'aria-required');
        return !(spanText !== "(required)" || requiredAttr !== true || ariaRequiredAttr !== 'true');
    },
}