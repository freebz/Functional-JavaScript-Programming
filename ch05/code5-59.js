// 코드 5-59 _.map과 _.values와 _.pairs

_.go(users,
  _.first,
  _.values,
  console.log);
// [ 1, 'ID' ]

_.go(users,
  _.first,
  _.map(v=>v),
  console.log);
// [ 1, 'ID' ]

_.go(users,
  _.first,
  _.pairs,
  console.log);
// [ [ 'id', 1 ], [ 'name', 'ID' ] ]

_.go(users,
  _.first,
  _.map((v, k) => [k, v]),
  console.log);
// [ [ 'id', 1 ], [ 'name', 'ID' ] ]
