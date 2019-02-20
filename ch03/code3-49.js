// 코드 3-49 1장에서 만든 _.old_filter

_.old_filter = function(data, predicate) {
  var result = [];
  for (var idx = 0, len = data.length; idx < len; idx++) {
    if (predicate(data[idx], idx, data)) result.push(data[idx]);
  }
  return result;
};
