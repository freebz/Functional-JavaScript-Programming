// 코드 2-12 기본 객체의 메서드 지우기

var obj = { a: 1, b: 2, c: 3 };
delete obj.a;
delete obj['b'];
delete obj['C'.toLowerCase()];
console.log(obj);
// {}

delete Array.prototype.push;
var arr1 = [1, 2, 3];
arr1.push(4);
// Uncaught TypeError: arr1.push is not a function
