// 코드 3-18

_.map(list, _.compose(square, sub10, mul10));
// [ 0, 100, 400, 900, 1600 ]

_.map(list, _.compose(
  function(num) { return num * num },
  function(num) { return num - 10 },
  function(num) { return num * 10 }));
// [ 0, 100, 400, 900, 1600 ]

// 화살표 함수
_.map(list, num => square(sub10(mul10(num))));
