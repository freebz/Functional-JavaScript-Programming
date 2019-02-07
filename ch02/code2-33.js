// 코드 2-33 300배의 성능 차이

// [1]
console.time('4');
var arr = Array(10000);
_.map(arr, function(v, i) {
  return function(v, i) { // 안에서 익명 함수를 한 번 더 만들어 즉시 실행
    return i * 2;
  }(v, i);
});
console.timeEnd('4');
// 4: 0.8ms ~ 1.8ms

console.time('5')
var arr = Array(10000);
_.map(arr, function(v, i) {
  return L('v, i => i * 2')(v, i); // 안에서 문자열 화살표 함수를 만들어 즉시 실행
});
console.timeEnd('5');
// 5: 362ms~480ms
