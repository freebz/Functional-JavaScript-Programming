// 코드 5-6 부분 커링 지원

var products = [
  { id: 1, name: "후드 집업", discounted_price: 6000, price: 10000  },
  { id: 2, name: "코잼 후드티", discounted_price: 8000, price: 8000  },
  { id: 3, name: "A1 반팔티", discounted_price: 6000, price: 6000  },
  { id: 4, name: "코잼 반팔티", discounted_price: 5000, price: 6000  }
];

_.go(products,
  _.filter(function(p) { // [1]
    return p.discounted_price < p.price;
  }),
  _.sortBy('discounted_price'),  // [2]
  _.first,  // [3]
  _.val('name'));  // [4]
  // 코잼 반팔티
