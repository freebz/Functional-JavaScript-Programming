// 코드 3-72 _.reduce 사용 예제2

_.reduce([[0, 1], [2, 3], [4, 5]], function(memo, val, idx, list) {
  return memo.concat(val);
}, []);
// [ 0, 1, 2, 3, 4, 5 ]
