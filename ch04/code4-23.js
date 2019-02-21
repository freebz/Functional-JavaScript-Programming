// 코드 4-23

var add = _.pipeline(function(a, b) {
  return a + b;
});

var sub = _.pipeline(function(a, b) {
  return a - b;
});

function f1(a, b) {
  return _.mr(a - 5, b / 2);
}

add(10, 20); // 일반 함수와 동일하게 사용됨
// 30

sub(10, 20); // 일반 함수와 동일하게 사용됨
// -10

add(f1(20, 10)); // add에게 넘겨지는 인자는 하나지만 2개처럼 동작
// 20

sub(f1(20, 10)); // sub에게 넘겨지는 인자는 하나지만 2개처럼 동작
// 10
