// 코드 3-4 _.pluck, _.first, _.last, _.rest, _.lastIndexOf

var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
];
_.pluck(users, 'name');
// [ 'ID', 'HA', 'BJ', 'PJ', 'JE', 'JM', 'HI' ]

_.first([5, 4, 3, 2, 1]);
// 5
_.first([5, 4, 3, 2, 1], 1);
// [5]
_.first([5, 4, 3, 2, 1], 2);
// [5, 4]

_.last([5, 4, 3, 2, 1]);
// 1
_.last([5, 4, 3, 2, 1], 1);
// [1]
_.last([5, 4, 3, 2, 1], 2);
// [2, 1]

_.rest([5, 4, 3, 2, 1]);
// [4, 3, 2, 1]
_.rest([5, 4, 3, 2, 1], 2);
// [3, 2, 1]

_.initial([5, 4, 3, 2, 1]);
// [5, 4, 3, 2]
_.initial([5, 4, 3, 2, 1], 2);
// [5, 4, 3]

_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// 4
_.lastIndexOf([1, 2, 3, 1, 2, 3], 3);
// 5
_.lastIndexOf([1, 2, 3, 1, 3], 2);
// 1

_.flatten([[1, 2, 3], [4, 5], 6]);
// [1, 2, 3, 4, 5, 6]
