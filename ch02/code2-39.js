// 코드 2-39 익명 함수에서 함수가 자신을 참조하는 법 2

var f1 = function() {
  console.log(arguments.callee);
};

f1();
// function() {
//   console.log(arguments.callee);
// }

var f2 = f1;
f1 = null;

f2();
// function() {
//   console.log(arguments.callee);
// }
