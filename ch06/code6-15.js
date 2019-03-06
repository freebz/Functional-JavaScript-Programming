// 코드 6-15 _.extend, _.defaults

var product1 = {
  name: "AB 반팔티",
  price: 10000,
  sizes: ["M", "L", "XL"],
  colors: ["Black", "White", "Blue"]
};

// [1]
var product2 = _.extend({}, product1, {
  name: "AB 긴팔티",
  price: 15000
});

// [2]
var product3 = _.defaults({
  name: "AB 후드티",
  price: 12000
}, product1);

console.log(product2);
// { name: 'AB 긴팔티', price: 15000, sizes: [ 'M', 'L', 'XL' ], colors: [ 'Black', 'White', 'Blue' ] }
console.log(product3);
// { name: 'AB 후드티', price: 12000, sizes: [ 'M', 'L', 'XL' ], colors: [ 'Black', 'White', 'Blue' ] }

// [3]
var product4 = _.extend({}, product3, {
  colors: product3.colors.concat("Purple")
});
var product5 = _.defaults({
  colors: product4.colors.concat("Red")
}, product4);

console.log(product3.colors);
// [ 'Black', 'White', 'Blue' ]
console.log(product4.colors);
// [ 'Black', 'White', 'Blue', 'Purple' ]
console.log(product5.colors);
// [ 'Black', 'White', 'Blue', 'Purple', 'Red' ]
