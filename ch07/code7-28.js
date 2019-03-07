// 코드 7-28

var total_quantity = __(
  _.deep_pluck('sizes.quantity'),
  _.reduce(function(a, b) { return a + b; }));

console.log( total_quantity(products) );
// 15
