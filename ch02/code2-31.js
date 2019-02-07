// 코드 2-31 익명 함수와 문자열 화살표 함수

console.time('1');
var arr = Array(10000);
_.map(arr, function(v, i) {
  return i * 2;
});
console.timeEnd('1');
// 1: 0.5ms~0.7ms

console.time('2');
var arr = Array(10000);
_.map(arr, L('v, i => i * 2')); // new Function
console.timeEnd('2');
// 2: 0.5ms~0.8ms
