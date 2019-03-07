// 코드 7-22 선택된 상품 전체 수량 합산하기 1

function selected_total_quantity(products) {
  return _.reduce(products, function(quantity, product) {
    if (!product.is_selected) return quantity;
    return quantity + _.reduce(product.sizes, function(quantity, size) {
      return quantity + size.quantity;
    }, 0);
  }, 0);
}

console.log( selected_total_quantity(products) );
// 11
