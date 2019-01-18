// 코드 1-26 bmatch1로 ㅎ마수를 만들어 고차 함수와 협업하기

console.log( filter(users, bmatch1('age', 32)) );
// [ { id: 1, name: 'ID', age: 32 },
//   { id: 3, name: 'BJ', age: 32 },
//   { id: 6, name: 'JM', age: 32 } ]

console.log( map(users, bmatch1('age', 32)) );
// [ true, false, true, false, false, true, false ]
