// 코드 7-26 동시에 합산하기

var total = _.reduce(function(total, product) {
  return _.reduce(product.sizes, function(total, size) {
    total.quantity += size.quantity;
    total.price += (product.price + size.price) * size.quantity;
    return total;
  }, total);
}, { quantity: 0, price: 0 });

console.log( total(products) );
// { quantity: 15, price: 221000 }

var selected_total = __(_.filter('is_selected'), total);

console.log( selected_total(products) );
// { quantity: 11, price: 157000 }
