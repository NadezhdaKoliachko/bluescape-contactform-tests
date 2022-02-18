module.exports = function() {
  return actor({

    async fillTheFormCompletely(mapForm){
      let keys = Array.from(mapForm.keys());
      for (let k of keys) {
        this.fillField(k, mapForm.get(k));
      }
    },

    async fillTheFormExcludingFields(mapForm, setOfExcludedInputLocators){
      let keys = Array.from(mapForm.keys());
      for (let k of keys) {
        if(!setOfExcludedInputLocators.has(k)){
          this.fillField(k, mapForm.get(k));
        }
      }
    },

    async fillTheFormExcludingField(mapForm, excludedInputlocator){
      let keys = Array.from(mapForm.keys());
      for (let k of keys) {
        if(excludedInputlocator !== k){
          this.fillField(k, mapForm.get(k));
        }
      }
    }
  });
}
