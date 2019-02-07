// 코드 2-35 코드 구조는 그대로이지만 성능은 다시 좋아졌다

console.time('6');
var arr = Array(10000);
_.map(arr, function(v, i) {
  return L2('v, i => i * 2')(v, i);
});
console.timeEnd('6');
// 6: 0.5ms ~ 1.2ms
