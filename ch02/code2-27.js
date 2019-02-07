// 코드 2-27 즉시 실행하며 this 할당하기

var a = function(a) {
  console.log(this, a);
  // [1], 1
}.call([1], 1);
