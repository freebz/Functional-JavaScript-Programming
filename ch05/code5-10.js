// 코드 5-10

_.go(products,
  _.filter(function(p) {
    return p.discounted_price < p.price;
  }),
  _.map(__(_.idtt, _.pick(['id', 'name']), _.values)),
  console.log);
  // [ [ 1, '후드 집업' ], [ 4, '코잼 반팔티' ] ]

_.go(products,
  _.filter(function(p) {
    return p.discounted_price < p.price;
  }),
  _.map(p=>_.go(p, _.pick(['id', 'name']), _.values)),
  console.log);
  // [ [ 1, '후드 집업' ], [ 4, '코잼 반팔티' ] ]
