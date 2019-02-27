// 코드 5-57 지연 평가의 기준

// [1] 엄격한 평가
_.go(
  [2, 4, 11, 2, 7, 12], // <--- 이 데이터가 많아도 유리해지고,
  _.map(slow_or_heavy), // <--- slow_or_heavy가 오래 걸릴수록 뒤로 미루는 게 좋으며,
  _.every(fast),   // <--- 최종적으로 꺼내고자 하는 값의 개수가 적을수록 미루는 것이 좋다.
  console.log);

// [2] 지연 평가
_.go([2, 4, 11, 2, 7, 12],
  L.map(slow_or_heavy),
  L.every(fast),
  console.log);
