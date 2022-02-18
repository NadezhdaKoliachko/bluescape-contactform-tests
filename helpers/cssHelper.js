const {I} = inject();

module.exports = {
    async getTypeOfElement(locator){
        return await I.grabAttributeFrom(locator, 'type');
    },

    async getAriaCurrentOfElement(locator){
        return await I.grabAttributeFrom(locator, 'aria-current');
    },

    async checkFieldIsRequired(fieldLabel, inputLocator){
        var spanText = await I.grabTextFrom(locate('span').inside(fieldLabel));
        var requiredAttr = await I.grabAttributeFrom(inputLocator, 'required');
        var ariaRequiredAttr = await I.grabAttributeFrom(inputLocator, 'aria-required');
        return !(spanText !== "(required)" || requiredAttr !== true || ariaRequiredAttr !== 'true');
    },
}