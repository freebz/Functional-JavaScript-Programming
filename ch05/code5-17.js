// 코드 5-17 파이프라인 나가면서 값 리턴하기

var result = _.go(null,
  function() { console.log(1); },
  function() { console.log(2); },
  function() { return _.stop("하이"); },
  function() { console.log(3); },
  function() { console.log(4); });
console.log(result);
/*
* 결과:
* 1
* 2
* 하이
* */
