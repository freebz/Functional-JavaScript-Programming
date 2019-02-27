// 코드 5-7 일반적인 함수 사용과 함수 중첩

// [1] 변수로 리턴 받으면서 작성하는 방식
var filtered_products = _.filter(products, function(p) {
  return p.discounted_price < p.price;
});
var sorted_products = _.sortBy(filtered_products, 'discounted_price');
var first_product = _.first(sorted_products);
_.val(first_product, 'name');
// 코잼 반팔티

// [2] 모든 함수를 중첩하는 방식
_.val(_.first(_.sortBy(_.filter(products, function(p) {
  return p.discounted_price < p.price;
}), 'discounted_price')), 'name');
// 코잼 반팔티
