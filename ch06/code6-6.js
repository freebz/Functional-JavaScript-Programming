// 코드 6-6 _.reject, _.pluck

// [1]
console.log(
  _.pluck(_.reject(users2, function(user) { return user.age >= 30; }), 'name')
);
// [ 'HA', 'PJ', 'JE' ]

// [2]
console.log(
  _.pluck(users2, 'name')
);
// [ 'ID', 'HA', 'BJ', 'PJ', 'JE' ]

// [3]
console.log(users2);
// users2 원본 그대로
