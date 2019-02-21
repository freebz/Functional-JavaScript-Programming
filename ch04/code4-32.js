// 코드 4-32 파이프라인 상황에서 비교하기

var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
];

/* 일반적 사용 */
_.go(users,
  function(users) {
    return _.filter(users, function(u) { return u.age < 30; });
  },
  function(users) {
    return _.pluck(users, 'name');
  },
  console.log);
// [ 'HA', 'PJ', 'JE', 'HI' ]

/* 부분 적용 */
_.go(users,
  _.partial(_.filter, _, function(u) { return u.age < 30; }),
  _.partial(_.pluck, _, 'name'),
  console.log);
// [ 'HA', 'PJ', 'JE', 'HI' ]

/* 부분 커링이 된다면 */
_.go(users,
  _.filter(function(u) { return u.age < 30; }),
  _.pluck('name'),
  console.log);
// [ 'HA', 'PJ', 'JE', 'HI' ]

/* Underscore.js 체인 */
und.chain(users)
  .filter(function(u) { return u.age < 30; })
  .pluck('name')
  .tap(console.log);
// [ 'HA', 'PJ', 'JE', 'HI' ]
