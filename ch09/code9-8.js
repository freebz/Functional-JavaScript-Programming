// 코드 9-8

var users = [
  { id: 1, name: "ID", age: 32, count: { review: 3, cart: 5 } },
  { id: 2, name: "HA", age: 25, count: { review: 8, cart: 4 } },
  { id: 3, name: "BJ", age: 32, count: { review: 0, cart: 0 } },
  { id: 4, name: "PJ", age: 28, count: { review: 4, cart: 5 } },
  { id: 5, name: "JE", age: 27, count: { review: 5, cart: 2 } },
  { id: 6, name: "JM", age: 32, count: { review: 4, cart: 6 } },
  { id: 7, name: "JI", age: 31, count: { review: 7, cart: 2 } }
];

var best_reviewers = _.memoize2(function(list) {
  console.log('함수 본체에 들어와서 loop 실행');
  return _.filter(list, function(user) {
    return user.count.review > 5;
  })
});

var cart_is_empty = _.memoize2(function(list) {
  console.log('함수 본체에 들어와서 loop 실행');
  return _.filter(list, function(user) {
    return user.count.cart == 0;
  })
});

_.go(users,
  best_reviewers,
  _.pluck('name'),
  console.log);
// 함수 본체에 들어와서 loop 실행
// [ 'HA', 'JI' ]

_.go(users,
  best_reviewers,
  _.pluck('name'),
  console.log);
// [ 'HA', 'JI' ] (캐시 사용)

_.go(users,
  cart_is_empty,
  _.pluck('name'),
  console.log);
// 함수 본체에 들어와서 loop 실행
// [ 'BJ' ]

_.go(users,
  cart_is_empty,
  _.pluck('name'),
  console.log);
// [ 'BJ' ] (캐시 사용)
