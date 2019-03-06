// 코드 6-2 자신의 상태를 변경하는 메서드 sort

var users1 = [
  { name: "ID", age: 32 },
  { name: "HA", age: 25 },
  { name: "BJ", age: 32 },
  { name: "PJ", age: 28 },
  { name: "JE", age: 27 }
];

var comparator = function(a, b) {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
};

var sortedUsers1 = users1.sort(comparator); // [1]

console.log(users1 == sortedUsers1); // [2]
// true

console.log(_.pluck(sortedUsers1, 'age')); // [3]
// [ 25, 27, 28, 32, 32 ]

console.log(_.pluck(users1, 'age')); // [4]
// [ 25, 27, 28, 32, 32 ]
