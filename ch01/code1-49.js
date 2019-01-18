// 코드 1-49 함수를 리턴하는 함수

function constant(val) {
  return function() {
    return val;
  }
}

var always10 = constant(10);

always10();
// 10
always10();
// 10
always10();
// 10
