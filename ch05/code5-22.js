// 코드 5-22

var is_1 = function(a) {
  return a == 1;
};
var is_2 = function(a) {
  return a == 2;
};

function test1(a) {
  if (is_1(a)) return '1입니다.';
  else if (is_2(a)) return '2입니다.'
  else return '1도 아니고 2도 아닙니다.';
}
console.log(test1(2));
// 결과: 2입니다. (정상 동작)
