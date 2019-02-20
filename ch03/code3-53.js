// 코드 3-53 bloop를 고쳐서 _.filter 만들기

function bloop(new_data, body) {
  return function(data, iter_predi) { // 보조 함수 이름을 iter_predi로 변경
    var result = new_data(data);
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
	body(iter_predi(data[i], i, data), result, data[i]);
	                     // 인자에 원본 추가 ---> data[i]
      }
    } else {
      for (var i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
	body(iter_predi(data[keys[i]], keys[i], data), result, data[keys[i]]);
	                                 // 인자에 원본 추가 ---> data[keys[i]]
      }
    }
    return result;
  }
}

_.array = function() { return []; }

_.filter = bloop(_.array,
  function(bool, result, val) {
    if (bool) result.push(val);
  });

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

_.filter(obj, function(val) {
  return val > 2;
});
// [ 3, 4 ]


_.filter([1, 2, 3, 4], function(val) {
  return val < 3;
});
// [ 1, 2 ]
