// 코드 3-50 _.each로 _.filter 만들기

_.filter = function(data, predicate) {
  var result = [];
  _.each(data, function(val, idx, data) {
    if (predicate(val, idx, data)) result.push(val);
  });
  return result;
};

_.filter([1, 2, 3, 4], function(val) {
  return val > 2;
});
// [ 3, 4 ]
