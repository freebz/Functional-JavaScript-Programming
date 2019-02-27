// 코드 5-8 _.go를 통한 조합

var products = [
  { id: 1, name: "후드 집업", discounted_price: 6000, price: 10000  },
  { id: 2, name: "코잼 후드티", discounted_price: 8000, price: 8000  },
  { id: 3, name: "A1 반팔티", discounted_price: 6000, price: 6000  },
  { id: 4, name: "코잼 반팔티", discounted_price: 5000, price: 6000  }
];

// 할인 상품 중 가격이 가장 낮은 상품의 이름
_.go(products,
  _.filter(p => p.discounted_price < p.price),
  _.sortBy('discounted_price'),
  _.first,
  _.val('name'),
  console.log);
// 코잼 반팔티

// 할인이 없는 상품 중 가격이 가장 낮은 상품의 id
_.go(products,
  _.reject(p => p.discounted_price < p.price),
  _.sortBy('discounted_price'),
  _.first,
  _.val('id'),
  console.log);
// 3

// 할인 상품 중 가격이 가장 높은 상품의 이름
_.go(products,
  _.filter(p => p.discounted_price < p.price),
  _.sortBy('discounted_price'),
  _.first,
  _.val('name'),
  console.log);
// 코잼 반팔티

// 할인이 없는 상품 중 가격이 가장 낮은 상품의 id
_.go(products,
  _.reject(p => p.discounted_price < p.price),
  _.sortBy('discounted_price'),
  _.first,
  _.val('id'),
  console.log);
// 3

// 할인 상품 중 가격이 가장 높은 상품의 이름
_.go(products,
  _.filter(p => p.discounted_price < p.price),
  _.sortBy('discounted_price'),
  _.last,
  _.val('name'),
  console.log);
// 후드 집업

// 할인 상품 중 할인액이 가장 높은 상품의 이름
_.go(products,
  _.filter(p => p.discounted_price < p.price),
  _.sortBy(p => p.discounted_price - p.price),
  _.first,
  _.val('name'),
  console.log);
// 후드 집업

// 할인 상품 중 할인액이 가장 높은 상품의 이름 (위와 동일)
_.go(products,
  _.filter(p => p.discounted_price < p.price),
  _.min(p => p.discounted_price - p.price),
  _.val('name'),
  console.log);
// 후드 집업

// 할인 상품 중 할인액이 가장 낮은 상품의 이름
_.go(
  products,
  _.filter(p => p.discounted_price < p.price),
  _.max(p => p.discounted_price - p.price),
  _.val('name'),
  console.log);
// 코잼 반팔티
