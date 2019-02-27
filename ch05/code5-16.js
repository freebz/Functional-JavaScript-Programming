// 코드 5-16 파이프라인 나가기

_.go(null,
  function() { console.log(1); },
  function() { console.log(2); },
  function() { return _.stop(); },
  function() { console.log(3); },
  function() { console.log(4); });
/*
* 결과:
* 1
* 2
* */
