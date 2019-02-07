// 코드 2-41 아주 안전하고 편한 자기 참조

var hi = 1;
var hello = function hi() {
  console.log(hi);
};

hello();
// function hi() {
//   console.log(hi);
// }

console.log(hi);
// 1

console.log(++hi);
// 2

hello();
// function hi() {
//   console.log(hi);
// }

console.log(hello.name == 'hi');
// true

var z1 = function z() {
  console.log(z, 1);
};
var z2 = function z() {
  console.log(z, 2);
};
z1();
// function z() {
//   console.log(z, 1);
// }
z2();
// function z() {
//   console.log(z, 2);
// }
console.log(z1.name == z2.name);
// true

z;
// Uncaught ReferenceError: z is not defined
