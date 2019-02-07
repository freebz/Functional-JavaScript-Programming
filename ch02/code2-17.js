// 코드 2-17 실행하지 않고 참조만 해보기

console.log(add1);
// function add1(a, b) { return a + b; }

console.log(add2); // 에러가 나지 않는다.
// undefined

function add1(a, b) {
  return a + b;
}
var add2 = function(a, b) {
  return a + b;
};
