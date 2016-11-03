import Ember from 'ember';

export default Ember.Component.extend({
  showFormItem: false;
  actions: {
    showItemform(){
      this.set('showFormItem', true);
    },
    saveNewItem(){
      var params = {
        title: this.get('title'),
        cost: this.get('cost'),
        description: this.get('despcription'),
        image: this.get('image'),
      },
      this.sendAction('addNewProduct', params);
      this.set(showFormItem, false)
    }
  }
});
