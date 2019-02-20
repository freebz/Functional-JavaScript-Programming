// 코드 3-14 중간에 나갈 수 있는 _.filter2

_.filter2 = function(data, predicate, limit) {
  var list2 = [];
  _.find(data, function(val, key, data) {
    return predicate(val, key, data) && list2.push(val) == limit;
  });
  return list2;
};

console.log(
  _.filter2(list, function(num) { return num % 2 == 0; }, 5)
);
// [ 0, 2, 4, 6, 8 ], (9번 반복)
