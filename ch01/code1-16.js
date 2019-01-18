// 코드 1-16 filter로 한 명 찾기

var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
];

console.log(
  filter(users, function(user) { return user.id == 3 })[0]
);
// { id: 3, name: 'BJ', age: 32 }
