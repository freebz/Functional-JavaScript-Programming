// 코드 2-25 괄호 없이 정의가 가능한(즉시 실행도 가능한) 다양한 상황

!function(a) {
  console.log(a);
  // 1
}(1);

true && function(a) {
  console.log(a);
  // 1
}(1);

1 ? function(a) {
  console.log(a);
  // 1
}(1) : 5;

0, function(a) {
  console.log(a);
  // 1
}(1);

var b = function(a) {
  console.log(a);
  // 1
}(1);

function f2() {}
f2(function(a) {
  console.log(a);
  // 1
}(1));

var f3 = function c(a) {
  console.log(a);
  // 1
}(1);

new function() {
  console.log(1);
  // 1
};
// 개인적으로는 이 방법이 제일 재밌게 느껴진다. 괄호 없이도 익명 함수를 즉시 실행했다.
