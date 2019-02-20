// 코드 3-34

_.map([1, 2, 3], function(v) {
  return v * this;
}.bind(5));
// [5, 10, 15]
