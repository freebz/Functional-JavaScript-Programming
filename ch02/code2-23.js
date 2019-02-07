// 코드 2-23 괄호 없이 정의했는데 에러가 나지 않는 경우

function f1() {
  return function() {
  }
}
f1();
