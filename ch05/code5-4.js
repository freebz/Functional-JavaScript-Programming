// 코드 5-4 읽기 좋은 _.go

function add(a, b) {
  return a + b;
}
function square(a) {
  return a * a;
}
_.go(_.mr(2, 3), add, square);
// 25

_.go(_.mr(2, 3), (a, b) => a + b, a => a * a);
// 25
