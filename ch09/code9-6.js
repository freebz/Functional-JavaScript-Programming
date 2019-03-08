// 코드 9-6 mutable

var evens = _.memoize2(function(list) {
  console.log('함수 본체에 들어와서 loop 실행');
  return _.filter(list, function(num) {
    return num % 2 == 0;
  })
});

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( evens(list) );
// 함수 본체에 들어와서 loop 실행
// [ 2, 4, 6, 8, 10 ]

list.push(11);
list.push(12);
console.log( list );
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log( evens(list) );
// [ 2, 4, 6, 8, 10 ] (캐시가 사용되어 12가 나오지 않음)
