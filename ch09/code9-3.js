// 코드 9-3 memoize의 한계

var add = memoize(function(a, b) {
  return a + b;
});

console.log( add(3, 5) );
// 본체 실행 3
// 8

console.log( add(3, 10) );
// 캐시로 결과 바로 리턴 3
// 8
// 캐시가 동작했지만 3에만 의존하기 때문에 오류

var keys = memoize(function(obj) {
  return _.keys(obj);
});

console.log( keys({a: 1, b: 2}) );
// 본체 실행 { a: 1, b: 2 }
// [ 'a', 'b' ]

console.log( keys({a: 1, b: 2}) );
// 캐시로 결과 바로 리턴 { a: 1, b: 2 }
// [ 'a', 'b' ]

console.log( keys({a: 10, b: 20}) );
// 캐시로 결과 바로 리턴 { a: 1, b: 2 }
// [ 'a', 'b' ]
// 잘 동작하는 듯 했지만 cache가 { [object Objet]: ... } 이런 식으로 되기 때문에 오류
