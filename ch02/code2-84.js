// 코드 2-84 익명 함수와 화살표 함수 비교

// 한 줄 짜리 함수
var add = function(a, b) { return a + b; };

var add = (a, b) => a + b;

// 두 줄 이상의 함수
var add2 = function(a, b) {
  var result = a + b;
  return result;
};

var add2 = (a, b) => {
  var result = a + b;
  return result;
}
