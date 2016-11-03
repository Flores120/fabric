import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(product){
      this.get('shoppingCart').add(product);
    },
      destroyProduct(product){
        if (confirm("Are you sure you want to delete this product?")){
          this.sendAction('destroyProduct', product);
        }
      }
  }
});
