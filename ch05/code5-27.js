// 코드 5-27 인자 더 많이 넘기기

// [1] a, b를 기억하는 익명 함수를 _.map의 iteratee로
function underscorejs1() {
  var a = 10;
  var b = 5;
  return _.map([1, 2, 3], function(val) {
    return val * a - b;
  });
}
console.log(underscorejs1());
// [ 5, 15, 25 ]

// [2] _.partial로 a, b를 부분 적용 해둠
function underscorejs2() {
  return _.map([1, 2, 3], _.partial(function(a, b, val) {
    return val * a - b;
  }, 10, 5));
}
console.log(underscorejs2());
// [ 5, 15, 25 ]

// [3] _.map의 인자를 여러 개 넘기면 iteratee에게도 인자로 넘겨줌
function partialjs() {
  return _.map(10, 5, [1, 2, 3], function(a, b, val) {
    return val * a - b;
  });
}
console.log(partialjs());
// [ 5, 15, 25 ]
