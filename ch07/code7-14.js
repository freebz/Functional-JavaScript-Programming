// 코드 7-14 상품 데이터

var products = [
  {
    id: 1,
    name: "반팔티",
    price: 10000, // <--- 상품의 기본 가격
    sizes: [
      { name: "M", price: 0 },
      { name: "L", price: 0 },
      { name: "XL", price: 0 },
      { name: "2XL", price: 1000 } // <--- 해당 상품의 사이즈별 추가 금액
    ]
  },
  {
    id: 2,
    name: "후드티",
    price: 21000,
    sizes: [
      { name: "L", price: -1000 },
      { name: "XL", price: 0 },
      { name: "2XL", price: 3000 }
    ]
  },
  {
    id: 3,
    name: "맨투맨",
    price: 16000,
    sizes: [
      { name: "L", price: 0 },
      { name: "XL", price: 0 },
      { name: "2XL", price: 2000 }
    ]
  }
];
