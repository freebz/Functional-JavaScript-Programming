// 코드 5-71 엄격한 평가 4: map->filter->take

var count = 0; // 루프 카운트
var list = [1, 2, 3, 4, 5, 6];
_.go(list,
  _.map(function(v) {
    count++;
    return v * v;
  }),
  _.filter(v => v < 20),
  _.take(2),
  console.log);
// [ 1, 4 ]

console.log(count);
// 6 (6번만 반복)
