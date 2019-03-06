// 코드 6-8 차이는 3명입니다. 함수 조합 버전

var diff2 = _.pipe(
  function(users, predi) {
    return sub(users.length, _.reject(users, predi).length);
  },
  _.s$('차이는 {{$}}명입니다.'),
  console.log);

diff2(users2, function(user) { return user.age < 30; });
// 차이는 3명입니다.
diff2(users2, function(user) { return user.age > 30; });
// 차이는 2명입니다.
diff2(users2, function(user) { return user.age == 25; });
// 차이는 1명입니다.

_.go(users2,
  _(diff2, _, function(user) { return user.age == 32; })); // _ == _.partial
// 차이는 2명입니다.

_.go(users2,
  _.reject(function(user) { return user.name == 'ID'; }),
  _(diff2, _, function(user) { return user.age == 32; }));
// 차이는 1명입니다.
