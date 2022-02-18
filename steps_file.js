module.exports = function () {
  return actor({
    async fillTheFormCompletely(mapForm) {
      const keys = Array.from(mapForm.keys());
      for (let k of keys) {
        this.fillField(k, mapForm.get(k));
      }
    },

    async fillTheFormExcludingFields(mapForm, setOfExcludedInputLocators) {
      const keys = Array.from(mapForm.keys());
      for (let k of keys) {
        if (!setOfExcludedInputLocators.has(k)) {
          this.fillField(k, mapForm.get(k));
        }
      }
    },

    async fillTheFormExcludingField(mapForm, excludedInputlocator) {
      const keys = Array.from(mapForm.keys());
      for (let k of keys) {
        if (excludedInputlocator !== k) {
          this.fillField(k, mapForm.get(k));
        }
      }
    },
  });
};
