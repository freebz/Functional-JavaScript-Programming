// 코드 5-70 지연 평가 4: L.map->L.filter->L.take

var count = 0; // 루프 카운트
var list = [1, 2, 3, 4, 5, 6];
_.go(list,
  L.map(function(v) {
    count++;
    return v * v;
  }),
  L.filter(v => v < 20),
  L.take(2),
  console.log);
// [ 1, 4 ]

console.log(count);
// 2 (2번만 반복)
