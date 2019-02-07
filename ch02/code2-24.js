// 코드 2-24 괄호 없이 즉시 실행했는데 에러가 나지 않는 경우

function f1() {
  return function(a) {
    console.log(a);
    // 1
  }(1);
}
f1();
