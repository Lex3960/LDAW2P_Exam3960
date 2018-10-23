import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteItem() {
      this.deleteItem();
    },

    updateItem(){
      this.updateItem();
    }
  }
});
