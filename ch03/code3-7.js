// 코드 3-7 _.negate 내부

// _.negate = function(v) return !v }; 이게 아니다.

_.negate = function(func) {
  return function() {
    return !func.apply(this, arguments); // 받아둔 함수를 실행한 후 !를 한다.
  }
}
