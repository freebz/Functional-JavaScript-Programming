// 코드 2-32 eval로 한 번 더 감싼 경우

console.time('3');
var arr = Array(10000);
_.map(arr, eval("L('v, i => i * 2')")); // eval + new Function
console.timeEnd('3');
// 3: 0.6ms~0.9ms
