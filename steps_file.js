// in this file you can append custom step methods to 'I' object
const assert = require("assert");
module.exports = function() {
  return actor({

    //Accepts infinite number of 2 value arrays in format [fieldLabelLocator, inputLocator]
    async checkFieldsAreRequired(){
     var args = arguments;
     var areFieldsRequired = false;
      for(var i = 0; i < args.length; i++){
        var fieldLabel = args[i][0], inputLocator = args[i][1];
        var spanText = await this.grabTextFrom(locate('span').inside(fieldLabel));
        if(spanText == "(required)" &&
                await this.grabAttributeFrom(inputLocator, 'required') == '' &&
                await this.grabAttributeFrom(inputLocator, 'aria-required') == 'true'){
            areFieldsRequired = true;
        }
        else {
            return false;
        }
      }
      return areFieldsRequired;
    },

    async getNavigationItemActivityStatus(navigationLink){
        return await this.grabAttributeFrom(navigationLink, 'aria-current');
    },

    async getTypeOfElement(locator){
      return await this.grabAttributeFrom(locator, 'type');
    }

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
