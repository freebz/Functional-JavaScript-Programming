// 코드 5-1 _.go와 익명 함수

_.go(10, // 첫 번째 함수에서 사용할 인자
  function(a) { return a * 10 },  // 연속 실행할 함수 1
  // 100
  function(a) { return a - 50 },  // 연속 실행할 함수 2
  // 50
  function(a) { return a + 10 }); // 연속 실행할 함수 3
  // 60
