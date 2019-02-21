// 코드 4-31 부분 커링이 지원되는 Partial.js의 고차 함수

var values = _.map(function(v) { return v; });
console.log(values({ a: 1, b: 2, c: 4 }));
// [ 1, 2, 4 ]

// 아래처럼도 가능하다.
var values = _.map(_.identity);
console.log(values({ a: 1, b: 2, c: 4 }));
// [ 1, 2, 4 ]

var values = _.map(v=>v) // (ES6)
console.log(values({ a: 1, b: 2, c: 4 }));
// [ 1, 2, 4 ]
