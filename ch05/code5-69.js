// 코드 5-69 지연 평가 3: L.map->L.filter

var list = [1, 2, 3, 4, 5, 6];
_.go(list,
  L.map(v => v * v),
  L.filter(v => v < 20),
  console.log);
// [ 1, 4, 9, 16 ]
