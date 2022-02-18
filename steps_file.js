module.exports = function() {
  return actor({


    async fillTheFormCompletely(mapForm){
      var keys = Array.from(mapForm.keys());
      for (var k of keys) {
        this.fillField(k, mapForm.get(k));
      }
    },

    async fillTheFormExcludingFields(mapForm, arrayOfInputLocators){
      var keys = Array.from(mapForm.keys());
      for (var k of keys) {
        if(!arrayOfInputLocators.includes(k)){
          this.fillField(k, mapForm.get(k));
        }
      }
    }

  });
}
