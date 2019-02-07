// 코드 2-40 유명 함수의 자기 참조

var f1= function f() {
  console.log(f);
};
f1();
// function f() {
//   console.log(f);
// }

var f2 = f1;
f1 = null;

f2();
// function f() {
//   console.log(f);
// }
