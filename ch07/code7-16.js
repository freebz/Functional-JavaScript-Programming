// 코드 7-16 선택한 상품과 선택한 옵션에 해당하는 금액을 뽑는 함수 2

function order_price(product, size_name) {
  return product.price + _.find_where(product.sizes, { name: size_name }).price;
}

console.log(
  order_price(products[0], "XL"),
  order_price(products[0], "2XL"),
  order_price(products[1], "2XL"),
  order_price(products[2], "L")
);
// 10000 11000 24000 16000
