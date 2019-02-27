// 코드 5-29 일반 사용

_.all(10, 5, [
  function(a, b) { return a + b },
  function(a, b) { return a - b },
  function(a, b) { return a * b }]);
// 결과:
// arguments { 0: 15, 1: 5, 2: 50, _mr: true }

_.spread(10, 5, [
  function(a) { return a * a },
  function(b) { return b * b }]);
// 결과:
// arguments { 0: 100, 1: 25, __mr: true }
