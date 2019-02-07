// 코드 2-78

console.log(div(sub(add(10, 15), 5), 10));

// undefined가 찍히고 callback이 없다는 에러가 남
// Uncaught TypeError: callback is not a function
// Uncaught TypeError: callback is not a function
// Uncaught TypeError: callback is not a function

// 위와 동일한 코드여도 에러가 나지 않고 3초 후에 2가 찍히도록 해볼 것이다.
