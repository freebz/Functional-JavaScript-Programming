// 코드 3-13

// list2.push의 결과는 list2.length 이다.
var list2 = [];
var limit = 5;
_.find(list, function(num) {
  return num % 2 == 0 && list2.push(num) == limit;
});

console.log(list2);
// [ 0, 2, 4, 6, 8 ], (9번 반복)
