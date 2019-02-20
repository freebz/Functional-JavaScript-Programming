// 코드 3-46

function bloop(new_data, body) {
  return function(data, iteratee) {
    var result = new_data(data);
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
	body(iteratee(data[i], i, data), result);
      }
    } else {
      for (var key in data) {
	if (data.hasOwnProperty(key))
	  body(iteratee(data[key], key, data), result);
      }
    }
    return result;
  }
}
