// 코드 5-9 파이프라인으로 보조 함수 만들기

var products = [
  { id: 1, name: "후드 집업", discounted_price: 6000, price: 10000  },
  { id: 2, name: "코잼 후드티", discounted_price: 8000, price: 8000  },
  { id: 3, name: "A1 반팔티", discounted_price: 6000, price: 6000  },
  { id: 4, name: "코잼 반팔티", discounted_price: 5000, price: 6000  }
];

_.go(products,
  _.filter(function(p) {
    return p.discounted_price < p.price;
  }),
  _.map(_.pipe(_.idtt, _.pick(['id', 'name']), _.values)),
  console.log);
  // [ [ 1, '후드 집업' ], [ 4, '코잼 반팔티' ] ]
