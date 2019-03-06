// 코드 6-3 정렬된 새로운 값을 만드는 _.sortBy

var users2 = [
  { name: "ID", age: 32 },
  { name: "HA", age: 25 },
  { name: "BJ", age: 32 },
  { name: "PJ", age: 28 },
  { name: "JE", age: 27 }
];

var sortedUsers2 = _.sortBy(users2, 'age'); // [1]

console.log(users2 == sortedUsers2); // [2]
// false

console.log(_.pluck(sortedUsers2, 'age')); // [3]
// [ 25, 27, 28, 32, 32 ]

console.log(_.pluck(users2, 'age')); // [4]
// [ 32, 25, 32, 28, 27 ]
