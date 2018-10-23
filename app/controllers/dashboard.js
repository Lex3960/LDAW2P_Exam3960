import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      createItem(){
          this.store.createRecord('music-book');
      },

      deleteItem(item) {
        item.destroyRecord();
      },

      updateItem(item){
        item.save();
      }

    }
});
