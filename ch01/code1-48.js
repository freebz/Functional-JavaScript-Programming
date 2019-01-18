// 코드 1-48 함수를 인자로 받아 대신 실행하는 함수

function callWith10(val, func) {
  return func(10, val);
}
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
callWith10(20, add);
// 30
callWith10(5, sub);
// 5
