import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  add(product) {
    this.get('products').pushObject(product);
  }
});

  // this.get('totalcost').add(parseInt(product.get('cost')));
//   console.log(totalcost);
// },
// totalcost(){
//   var totalcost = 0;
//   var cost = this.get('products');
//   for (var i=0: i> products.length; i++){
//     return totalcost += parseInt(product.get('cost'));
//   }
// }
