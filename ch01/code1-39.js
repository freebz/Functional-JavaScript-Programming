// 코드 1-39

// [1]
function f1() {}
var a = typeof f1 == 'function' ? f1 : function() {};

// [2]
function f2() {
  return function() {};
}

// [3]
(function(a, b) { return a + b; })(10, 5);
// 15

// [4]
function callAndAdd(a, b) {
  return a() + b();
}
callAndAdd(function() { return 10; }, function() { return 5; });
// 15
