// 코드 3-48 _.keys로 bloop 개선하기

function bloop(new_data, body) {
  return function(data, iteratee) {
    var result = new_data(data);
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
	body(iteratee(data[i], i, data), result);
      }
    } else {
      for (var i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
	body(iteratee(data[keys[i]], keys[i], data), result);
      }
    }
    return result;
  }
}

_.map = bloop(_.array, _.push_to);
_.each = bloop(_.identity, _.noop);

_.map(lodashObj, function(val, key) {
  return key;
});
// ["__wrapped__", "__actions__", "__chain__", "__index__", "__values__"]

_.map({a: 3, b: 2, c: 1}, function(v) {
  return v * 2
});
// [ 6, 4, 2 ]

_.each({id: 5, name: "JE", age: 27}, console.log);
// 5 'id' { id: 5, name: 'JE', age: 27 }
// 'JE' 'name' { id: 5, name: 'JE', age: 27 }
// 27 'age' { id: 5, name: 'JE', age: 27 }
