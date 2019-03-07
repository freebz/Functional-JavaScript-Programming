// 코드 7-33 _.find

_.find([10, 20, 50, 100], function(v, i) {
  console.log(v, i);
  return delay(v > 30);
});
// 10 0
// 20 1 (1초 후)
// 50 2 (다시 1초 후)
// 끝

// 100 3은 찍히지 않는다.
