// 코드 2-71

var a = false;

var c = a ? 10 : function f(arr, v) {
  if (!arr.length) return v;
  v += arr.shift();
  return f(arr, v);
} ([1, 2, 3], 0); // <--- 즉시 실행
console.log(c);
// 6
