// 코드 2-90

function log(arg) {
  console.log(arg);
}

((a, b) => (f => f(f)) (f => log(a) || a++ == b || f(f)))(1, 5);
// 1 2 3 4 5
