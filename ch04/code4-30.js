// 코드 4-30 _.partial을 이용한 부분 적용

var values = _.partial(_.map, _, function(v) { return v; });

console.log(values({ a: 1, b: 2, c: 4 }));
// [ 1, 2, 4 ]
