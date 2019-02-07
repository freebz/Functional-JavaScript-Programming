// 코드 2-30 10,000번 선언해 보기

console.time('익명 함수');
for (var i = 0; i < 10000; i++) {
  (function(v) { return v; })(i);
}
console.timeEnd('익명 함수');
// 익명 함수: 0.9ms~1.7ms

console.time('new Function');
for (var i = 0; i < 10000; i++) {
  L('v => v')(i); // new Function
}
console.timeEnd('new Function');
// new Function: 337ms~420ms
