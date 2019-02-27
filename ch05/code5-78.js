// 코드 5-78 L.strict로 지연 평가의 동작 조건을 동적으로 하기

var strict_or_lazy3 = __(
  _.range,
  L.strict(100),
  L.map(square),
  L.filter(odd),
  L.take(10),
  console.log);

strict_or_lazy3(50);
// [ 1, 9, 25, 49, 81, 121, 169, 225, 289, 361 ]
// 50번 반복 (엄격)

strict_or_lazy3(100);
// [ 1, 9, 25, 49, 81, 121, 169, 225, 289, 361 ]
// 20번 반복 (지연)

strict_or_lazy3(15);
// [ 1, 9, 25, 49, 81, 121, 169 ]
// 15번 반복 (엄격)
