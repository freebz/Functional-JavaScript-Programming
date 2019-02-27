// 코드 5-11 _.go의 비동기 함수 제어

_.go(10,
  _.callback(function(a, next) {
    setTimeout(function() {
      next(a + 10);
    }, 100)
  }),
  function(a) { // next를 통해 받은 결과 a
    console.log(a);
    // 20
  });
