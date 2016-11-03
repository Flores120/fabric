import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  add(product) {
    this.get('products').pushObject(product);
  },
  remove(product){
    var productIndex = this.get('products').indexOf(product);
    this.get('products').removeAt(productIndex);
  },
  empty(){
    this.get('products').clear();
  }
});
