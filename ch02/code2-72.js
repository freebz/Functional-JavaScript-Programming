// 코드 2-72

var c = a ? 10 : function f(arr, v) {
  return arr.length ? f(arr, v + arr.shift()) : v;
} ([1, 2, 3], 0);
console.log(c);
// 6
