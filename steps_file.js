module.exports = function() {
  return actor({

    async checkFieldIsRequired(fieldLabel, inputLocator){
     var spanText = await this.grabTextFrom(locate('span').inside(fieldLabel));
     var requiredAttr = await this.grabAttributeFrom(inputLocator, 'required');
     var ariaRequiredAttr = await this.grabAttributeFrom(inputLocator, 'aria-required');
     return !(spanText !== "(required)" || requiredAttr !== true || ariaRequiredAttr !== 'true');
    },

    async getTypeOfElement(locator){
      return await this.grabAttributeFrom(locator, 'type');
    },

    async getAriaCurrentOfElement(locator){
       return await this.grabAttributeFrom(locator, 'aria-current');
    },



  });
}
