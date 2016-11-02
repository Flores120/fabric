import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  totalcost: 0,
  add(product) {
    this.get('products').pushObjects([product]);
    console.log(parseInt(product.get('cost')));
    this.get('totalcost').add(parseInt(product.get('cost')));
    console.log(totalcost);
  },

});
