// 코드 2-75 실행 타이밍

console.log(1);
setTimeout(function() {
  console.log(3)
}, 1000);
console.log(2);
// 1
// 2
// 3 (1초 뒤)
