// 코드 9-9

// users를 새로 재할당
users = _.im.set(users, '(#3)->count', {
  review: 10,
  cart: 1
});

_.go(users,
  best_reviewers,
  _.pluck('name'),
  console.log);
// 함수 본체에 들어와서 loop 실행
// [ 'HA', 'BJ', 'JI' ]

_.go(users,
  best_reviewers,
  _.pluck('name'),
  console.log);
// [ 'HA', 'BJ', 'JI' ]

_.go(users,
  cart_is_empty,
  _.pluck('name'),
  console.log);
// 함수 본체에 들어와서 loop 실행
// []

_.go(users,
  cart_is_empty,
  _.pluck('name'),
  console.log);
// [] (캐시 사용)
