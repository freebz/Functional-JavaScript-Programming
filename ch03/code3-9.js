// 코드 3-9 Underscore.js를 체인 방식으로 사용하기

// Functional
_.filter(
  _.map([1, 2, 3], function(n) { return n * 2; }),
  function(n) { return n <= 4; });
// [ 2, 4 ]

// Chaining
_.chain([1, 2, 3])
  .map(function(n) { return n * 2; }) // { _wrapped: [2, 4, 6] }
  .filter(function(n) { return n <= 4; })
  .value();
// [ 2, 4 ]
