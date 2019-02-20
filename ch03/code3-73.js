// 코드 3-73 _.reduce의 실용성

var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "JB", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
];

// [1] _.filter와 _.map을 이용해 구현함
var users2 = _.filter(users, function(user) {
  return user.age >= 30;
});
_.map(users2, function(user) {
  return user.name;
});
// [ 'ID', 'JB', 'JM' ] (루프: 7 + 3, new Array: 1 + 1)

// [2] _.reduce만으로 구현함
_.reduce(users, function(names, user) {
  if (user.age >= 30) names.push(user.name);
  return names;
}, []);
// [ 'ID', 'JB', 'JM' ] (루프: 7, new Array: 1)
