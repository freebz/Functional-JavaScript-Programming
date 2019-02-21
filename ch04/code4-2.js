// 코드 4-2 _.once 내부

_.once = function(func) {
  var flag, result;
  return function() {
    if (flag) return result;
    flag = true;
    return result = func.apply(this, arguments);
  }
};

var a = _.once(function() {
  console.log("A");
  return "B";
});

console.log(a());
// A
// B

console.log(a());
// B
