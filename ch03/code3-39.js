// 코드 3-39 bloop으로 _.map과 _.each 만들기

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

_.map = bloop(function() { // bloop의 두 부분을 _.map에 필요한 로직으로 설정
  return [];
}, function(val, obj) {
  return obj.push(val);
});

_.each = bloop(function(v) { // bloop의 두 부분을 _.each에 필요한 로직으로 설정
  return v;
}, function() {});
