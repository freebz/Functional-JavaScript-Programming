// 코드 5-14 _.partial로 인자를 부분 적용하기

_.go(_.mr(5, 10),
  add,
  _.partial(sub, _, 10),
  _.partial(mul, 1000),
  console.log);
// 5000
