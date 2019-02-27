// 코드 5-56

// 성능만 놓고 보면 이게 좀 더 낫고
_.go([2, 4, 11, 2, 7, 12],
  _.every(v => square(v) < 100),
  console.log);

// 이것이 더 낫다.
_.go([2, 4, 11, 2, 7, 12],
  _.every(v => v * v < 100),
  console.log);

// 그리고 이게 더 낫다.
console.log(_.every([2, 4, 11, 2, 7, 12], v => v * v < 100));
