// 코드 5-2 _.mr로 여러 개의 인자 넘기기

_.go(10, // 첫 번째 함수에서 사용할 인자
  function(a) { return _.mr(a * 10, 50) }, // 두 개의 값을 리턴
  function(a, b) { return a - b },	   // 두 개의 인자를 받음
  function(a) { return a + 10 });
  // 60
