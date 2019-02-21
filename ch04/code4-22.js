// 코드 4-22 Multiple Results 사용법

function add(a, b) {
  return a + b;
}
function square(a) {
  return a * a;
}
function sub(a, b) {
  return a - b;
}

var f1 = _.pipeline(
  add,
  square,
  function(a) {
    return _.mr(a, a / 5); // Multiple Results
  },
  sub);

console.log(f1(3, 2));
// 20
