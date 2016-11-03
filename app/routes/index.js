import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      items: this.store.findAll('items');
    });
  },
  actions: {
    addNewProduct(params){
      console.log(params);
      var newProduct = this.store.createRecord('items', params);
      newProduct.save();
      this.transitionTo('index');
    },
    destroyProduct(product){
       product.destroyRecord();
    }
  }
});
