// 코드 6-12 객체 내부의 객체는 복사하지 않는 _.clone

product2.sizes.push("2XL");

console.log(product2.sizes);
// [ 'M', 'L', 'XL', '2XL' ]

console.log(product1.sizes);
// [ 'M', 'L', 'XL', '2XL' ]

console.log(product1.sizes == product2.sizes);
// true
