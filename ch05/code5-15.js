// 코드 5-15 _.partial 간략 표기

_.go(_.mr(5, 10),
  add,
  _(sub, _, 10),
  _(mul, 10000),
  console.log);
// 50000
