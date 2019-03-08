// 코드 9-5

var f1 = _.memoize2(function(obj) {
  console.log('함수 본체에 들어옴');
  return obj.a + 10;
});

var obj1 = { a: 1 };
var obj2 = { a: 2 };

console.log( f1(obj1) );
// 함수 본체에 들어옴
// 11
console.log( f1(obj1) );
// 11 (캐시 사용)
console.log( f1(obj1) );
// 11 (캐시 사용)

console.log( f1(obj2) );
// 함수 본체에 들어옴
// 12
console.log( f1(obj2) );
// 12 (캐시 사용)
