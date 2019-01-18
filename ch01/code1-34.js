// 코드 1-34 아주 작은 함수 not, beq

function not(v) { return !v; }
function beq(a) {
  return function(b) {
    return a === b;
  }
}
