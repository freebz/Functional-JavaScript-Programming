// 코드 9-10

var predicate = _.memoize2(function(user) {
  console.log('predicate 실행');
  return user.count.review > 5;
});

var best_reviewer2 = _.memoize2(function(list) {
  console.log('함수 본체에 들어와서 loop 실행');
  return _.filter(list, predicate);
});

_.go(users,
  best_reviewer2,
  _.pluck('name'),
  console.log);
// 함수 본체에 들어와서 loop 실행
// predicate 실행 * 7번 실행
// [ 'HA', 'BJ', 'JI' ]

_.go(users,
  best_reviewer2,
  _.pluck('name'),
  console.log);
// [ 'HA', 'BJ', 'JI' ] (캐시 사용)

users = _.im.set(users, '(#3)->count->review', 2);
// BJ의 count.review를 다시 줄임

_.go(users,
  best_reviewer2,
  _.pluck('name'),
  console.log);
// 함수 본체에 들어와서 loop 실행
// predicate 실행 * 1번 실행
// [ 'HA', 'JI' ]
