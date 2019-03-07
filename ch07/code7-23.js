// 코드 7-23 선택된 상품 전체 수량 합산하기 2

function total_quantity(products) {
  return _.reduce(products, function(quantity, product) {
    return _.reduce(product.sizes, function(quantity, size) {
      return quantity + size.quantity;
    }, quantity); // <-- 인자로 사용
  }, 0);
}

function selected_total_quantity(products) {
  return total_quantity(_.filter(products, function(product) {
    return product.is_selected;
  }));
}

console.log( total_quantity(products) );
// 15

console.log( total_quantity([products[2]]) );
// 4

console.log( selected_total_quantity(products) );
// 11
