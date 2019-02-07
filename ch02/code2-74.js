// 코드 2-74 함수를 실행하는 괄호

var add5 = function(a) { // 새로운 공간
  return a + 5;
};
var call = function(f) { // 새로운 공간
  return f();
};

/* 함수를 실행하는 괄호 */
add5(5);
// 10
call(function() { return 10; });
// 10
