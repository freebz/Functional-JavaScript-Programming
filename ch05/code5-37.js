// 코드 5-37

_.go.async(1, function(a) {
  return a;
}).then(console.log);
console.log(2);
// 결과:
// 2
// 1
