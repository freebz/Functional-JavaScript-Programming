// 코드 5-3 시작 인자로 _.mr 사용

_.go(_.mr(2, 3),
  function(a, b) {
    return a + b;
  },
  function(a) {
    return a * a;
  });
  // 25
