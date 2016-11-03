import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('items');
  }
  addNewProduct(params){
    var newProduct = this.store.createRecord('items', params);
    newProduct.save();
    this.transitionTo(index);
  },
  destroyProduct(params){
    return params.destroyRecord();
  }
});
