// 코드 4=29 부분 커링을 지원하지 않는 경우, 함수로 감싸기

var values = function(data) {
  return _.map(data, function(v) { return v; });
};

console.log(values({ a: 1, b: 2, c: 4 }));
// [ 1, 2, 4 ]
