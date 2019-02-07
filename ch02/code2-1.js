// 코드 2-1 다양한 key/value 정의 방법

var obj = { a: 1, "b": 2 }; // [1]
obj.c = 3;
obj['d'] = 4; // [2]
var e = 'e';
obj[e] = 5;
function f() { return 'f'; }
obj[f()] = 6;
console.log(obj);
// { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
