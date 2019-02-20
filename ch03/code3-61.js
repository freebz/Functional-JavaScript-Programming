// 코드 3-61

// 1
_.filter = function(data, predicate) {
  var result = [];
  if (isArrayLike(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      if (predicate(data[i], i, data)) result.push(data[i]);
    }
  } else {
    for (var i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
      if (predicate(data[keys[i]], keys[i], data)) result.push(keys[i]);
    }
  }
  return result;
};

// 2
_.filter = function(data, predicate) {
  var result = [];
  _.each(data, function(val, idx, data) {
    if (predicate(val, idx, data)) result.push(val);
  });
  return result;
};

// 3
_.filter = bloop(_.array, function(bool, result, val) {
  if (bool) result.push(val);
});

// 4
_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));
