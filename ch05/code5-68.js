// 코드 5-68 엄격한 평가 3: map->filter

var list = [1, 2, 3, 4, 5, 6];
_.go(list,
  _.map(v => v * v),
  _.filter(v => v < 20),
  console.log);
// [ 1, 4, 9, 16 ]
