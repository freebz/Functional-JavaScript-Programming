// 코드 2-38 익명 함수에서 함수가 자신을 참조하는 법1

var f1 = function() {
  console.log(f1);
};

f1();
// function() {
//   console.log(f1);
// }

// 위험 상황
var f2 = f1;
f1 = 'hi~~';
f2();
// hi~~
