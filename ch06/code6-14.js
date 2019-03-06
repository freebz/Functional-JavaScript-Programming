// 코드 6-14 깊은 값 원본에 영향 주지 않고 변경하기

var product1 = {
  name: "AB 반팔티",
  price: 10000,
  sizes: ["M", "L", "XL"],
  colors: ["Black", "White", "Blue"]
};

var product2 = _.clone(product1);
product2.sizes = _.clone(product2.sizes); // 내부도 clone 후 push를 하거나
product2.sizes.push("2XL");
console.log(product2.sizes);
// [ 'M', 'L', 'XL', '2XL' ]
console.log(product1.sizes);
// [ 'M', 'L', 'XL' ]
console.log(product1.sizes == product2.sizes);
// false

product2.colors = product2.colors.concat("Yello"); // 아니면 concat으로 한번에
console.log(product2.colors);
// [ 'Black', 'White', 'Blue', 'Yello' ]
console.log(product1.colors);
// [ 'Black', 'White', 'Blue' ]
console.log(product1.colors == product2.colors);
// false
