// 코드 5-54 _.map 하고 _.every 하기

function square(v) {
  return v * v;
}

_.go([2, 4, 11, 2, 7, 12],
  _.map(square),	 // 6번 반복
  _.every(v => v < 100), // 3번 반복
  console.log);
// false
