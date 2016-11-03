import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCost: Ember.computed('shoppingCart.products.length', function(){
    var totalcost = 0;
    this.get('shoppingCart.products').forEach(function(product) {
      totalcost += parseInt(product.get('cost'));
    })
    return totalcost;
  })

});


// actions: {
//   addCost(){
//
//   }
// }
