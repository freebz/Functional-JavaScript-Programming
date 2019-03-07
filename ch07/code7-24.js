// 코드 7-24 선택된 상품 전체 수량 합산하기 3

var selected_total_quantity = __(
  _.filter(function(product) { return product.is_selected; }),
  total_quantity);

console.log( total_quantity(products) );
// 15
console.log( selected_total_quantity(products) );
// 11

/*
 * _.filter 함수에 보조 함수에 문자열을 넣으면
 * 해당 key를 조회하는 predicate를 자동으로 만들어준다.
 * */
var selected_total_quantity = __(_.filter('is_selected'), total_quantity);
console.log( selected_total_quantity(products) );
// 11

/* total_quantity도 부분 커링으로 코드를 줄일 수 있다. */
var total_quantity = _.reduce(function(quantity, product) {
  return _.reduce(product.sizes, function(quantity, size) {
    return quantity + size.quantity;
  }, quantity);
}, 0);
