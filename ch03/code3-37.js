// 코드 3-37 _.each 만들기

_.map = function(data, iteratee) {
  var new_list = [];
  if (isArrayLike(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      new_list.push(iteratee(data[i], i, data));
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key)) new_list.push(iteratee(data[key], key, data));
    }
  }
  return new_list;
};
_.each = function(data, iteratee) {
  if (isArrayLike(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      iteratee(data[i], i, data);
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key)) iteratee(data[key], key, data);
    }
  }
  return data;
};
