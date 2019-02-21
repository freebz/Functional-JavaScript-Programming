// 코드 4-16 마이클 포거스의 _.pipeline

_.pipeline = function() {
  var funs = arguments; // [1] 함수들

  return function(seed) { // [2] 첫 인자
    return _.reduce(funs,
      function(l, r) { return r(l); }, // [4] 모든 함수를 연속적으로 실행
      seed); // [3] 첫 인자 전달
  };
};

var div_square = _.pipeline(
  function(a) {
    return a / 2;
  },
  function(a) {
    return a * a;
  });

console.log(div_square(6));
// 9
