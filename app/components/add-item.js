import Ember from 'ember';

export default Ember.Component.extend({
  showFormItem: false,
  actions: {
    showItemform(){
      this.set('showFormItem', true);
    },
    saveNewItem(){
      var params = {
        title: this.get('title'),
        cost: parseInt(this.get('cost')),
        description: this.get('description'),
        image: this.get('image')
      };
      this.set('showFormItem', false);
      this.sendAction('addNewProduct', params);
      console.log(params);
    }
  }
});
