// 코드 3-17

_.map(list, function(num) {
  return square(sub10(mul10(num)));
});
// [ 0, 100, 400, 900, 1600 ]
