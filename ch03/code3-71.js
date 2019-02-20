// 코드 3-71 _.reduce 사용 예제

_.reduce([1, 2, 3], function(memo, val, idx, list) {
  return memo + val;
}, 0);
