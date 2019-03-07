// 코드 7-25 선택된 상품 전체 금액 합산시키기

var total_price = _.reduce(function(price, product) {
  return _.reduce(product.sizes, function(price, size) {
    return price + (product.price + size.price) * size.quantity;
  }, price);
}, 0);

console.log( total_price(products) );
// 221000

var selected_total_price = __(_.filter('is_selected'), total_price);

console.log( selected_total_price(products) );
// 157000
