// 코드 9-2

var mult5 = memoize(function(a) {
  return a * 5;
});

console.log( mult5(1) );
// 본체 실행 1
// 5

console.log( mult5(2) );
// 본체 실행 2
// 10

console.log( mult5(1) );
// 캐시로 결과 바로 리턴 1
// 5

console.log( mult5(2) );
// 캐시로 결과 바로 리턴 2
// 10
