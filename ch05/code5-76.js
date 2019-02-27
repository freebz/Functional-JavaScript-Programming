// 코드 5-76 지연 평가의 동작 조건을 동적으로 하기

var strict_or_lazy1 = __(
  _.range, // <-- 지연 평가 이전 상황이나 이후 상황에서 아무 일이나 할 수 있다.
  _.if(list => list.length < 100, __( // 조건에 따라 엄격한 평가로 동작하게 할 수도 있다.
    _.map(square),
    _.filter(odd),
    _.take(10)
  )).else(__( // 지연 평가 - list.length가 100 이상이면
    L.map(square),
    L.filter(odd),
    L.take(10)
  )),
  console.log);

strict_or_lazy1(50);
// [ 1, 9, 25, 49, 81, 121, 169, 225, 289, 361 ]
// 50번 반복 (엄격)

strict_or_lazy1(100);
// [ 1, 9, 25, 49, 81, 121, 169, 225, 289, 361 ]
// 20번 반복 (지연)

strict_or_lazy1(15);
// [ 1, 9, 25, 49, 81, 121, 169 ]
// 15번 반복(엄격)
