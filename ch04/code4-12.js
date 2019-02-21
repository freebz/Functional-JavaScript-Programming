// 코드 4-12

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function m() {
  var iter = arguments[arguments.length-1];
  arguments.length--;
  return _.reduce(arguments, iter);
}

m(100, 50, add);
// 150
m(100, 50, 10, add);
// 160
m(100, 50, 10, 5, add);
// 165

m(100, 50, sub);
// 50
m(100, 50, 10, sub);
// 40
m(100, 50, 10, 5, sub);
// 35

var f1 = _.partial(m, _, _, _, add);
// f1은 3개의 인자만 더할 수 있다.

f1(1, 1, 1);
// 3
f1(1, 1);
// NaN
f1(1, 1, 1, 1);
// Uncaught TypeError: iteratee is not a function
// _.reduce에 1이 넘어가면서 에러
