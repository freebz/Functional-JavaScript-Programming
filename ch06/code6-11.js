// 코드 6-11 _.clone

var product1 = {
  name: "AB 반팔티",
  price: 10000,
  sizes: ["M", "L", "XL"],
  colors: ["Black", "White", "Blue"]
};
var product2 = _.clone(product1);
console.log(product2);
// { name: 'AB 반팔티',
//   price: 10000,
//   sizes: [ 'M', 'L', 'XL' ],
//   colors: [ 'Black', 'White', 'Blue' ]
// }

console.log(product1 == product2);
// 결과: false

product2.name = "ABCD 긴팔티";
console.log(product1.name, product2.name);
// AB 반팔티 ABCD 긴팔티
