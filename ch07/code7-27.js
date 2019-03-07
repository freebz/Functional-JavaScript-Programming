// 코드 7-27

var total_quantity = function(products) {
  var quantity_list = _.deep_pluck(products, 'sizes.quantity');
  // [2, 3, 2, 3, 1, 4]
  return _.reduce(quantity_list, function(a, b) {
    return a + b;
  });
};

console.log( total_quantity(products) );
// 15
