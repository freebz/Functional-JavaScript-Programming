// 코드 2-18 호이스팅을 이용하여 return문 아래에 함수 선언하기

function add(a, b) {
  return valid() ? a + b : new Error();

  function valid() {
    return Number.isInteger(a) && Number.isInteger(b);
  }
}

console.log(add(10, 5));
// 15

console.log(add(10, "a"));
// Error(...)
