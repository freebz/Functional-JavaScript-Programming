// 코드 1-43

function f4() {
  var a = 10;
  var b = 20;
  function f5() {
    return a + b;
  }
  return f5();
}
f4();
// 30
