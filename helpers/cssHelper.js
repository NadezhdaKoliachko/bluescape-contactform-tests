const { I } = inject();

module.exports = {
  async getAriaCurrentOfElement(locator) {
    return await I.grabAttributeFrom(locator, "aria-current");
  },

  async checkFieldIsRequired(fieldLabel, inputLocator) {
    const spanText = await I.grabTextFrom(locate("span").inside(fieldLabel));
    const requiredAttr = await I.grabAttributeFrom(inputLocator, "required");
    const ariaRequiredAttr = await I.grabAttributeFrom(
      inputLocator,
      "aria-required"
    );
    return !(
      spanText !== "(required)" ||
      requiredAttr !== true ||
      ariaRequiredAttr !== "true"
    );
  },
};
