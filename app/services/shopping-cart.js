import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  add(product) {
    console.log(product.title);
    this.get('products').pushObjects([product]);
  }
});
