// 코드 1-50 함수를 대신 실행하는 함수를 리턴하는 함수

function callWith(val1) {
  return function(val2, func) {
    return func(val1, val2);
  }
}

var callWith10 = callWith(10);
callWith10(20, add);
// 30

var callWith5 = callWith(5);
callWith5(5, sub);
// 0
