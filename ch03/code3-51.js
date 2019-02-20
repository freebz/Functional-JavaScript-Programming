// 코드 3-51 차이 확인

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

_.old_filter(obj, function(val) {
  return val > 2;
});
// []

_.filter(obj, function(val) {
  return val > 2;
});
// [ 3, 4 ]
