// 코드 5-30 파이프라인과 함께 사용

_.go(10,
  _.all(
    function(a) { return a + 5 },  // a는 모두 10
    function(a) { return a - 5 },  // a는 모두 10
    function(a) { return a * 5 }), // a는 모두 10
  _.spread(
    function(a) { return a + 1 },  // a는 15
    function(b) { return b + 2 },  // b는 5
    function(c) { return c + 3 }), // c는 50
  console.log);
// 결과:
// 16 7 53
