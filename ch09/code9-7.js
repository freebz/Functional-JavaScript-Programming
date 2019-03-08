// 코드 9-7 immutable

var list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( evens(list2) );
// 함수 본체에 들어와서 loop 실행
// [ 2, 4, 6, 8, 10 ]
console.log( evens(list2) );
// [ 2, 4, 6, 8, 10 ] (캐시를 사용하여 loop를 돌지 않음)

list2 = list2.concat(11, 12);
console.log( list2 );
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

console.log( evens(list2) );
// 함수 본체에 들어와서 loop 실행
// [ 2, 4, 6, 8, 10, 12 ]

console.log( evens(list2) );
// [ 2, 4, 6, 8, 10, 12 ] (캐시를 사용하여 loop를 돌지 않음)
