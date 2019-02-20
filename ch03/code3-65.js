// 코드 3-65 bloop에 stopper 추가

function bloop(new_data, body, stopper) {
  return function(data, iter_predi) {
    var result = new_data(data);
    var memo;
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
	memo = iter_predi(data[i], i, data); // 결과를 재료로 사용하기 위해 변수에 담기
	if (!stopper) body(memo, result, data[i], i); // stopper ㅇ벗으면 원래 로직대로
	else if (stopper(memo)) return body(memo, result, data[i], i);
      }
    } else {
      for (var i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
	memo = iter_predi(data[keys[i]], keys[i], data);
	if (!stopper) body(memo, result, data[keys[i]], keys[i]);
	else if (stopper(memo)) return body(memo, result, data[keys[i]], keys[i]);
      }
    }
    return result;
  }
}

_.each = bloop(_.identity, _.noop);
_.map = bloop(_.array, _.push_to);
_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));
_.reject = bloop(_.array, _.if(_.not, _.rester(_.push)));

_.each([1, 2, 3], function(v) { console.log(v); });
// 1
// 2
// 3
// [ 1, 2, 3 ]

_.map([1, 2, 3], function(v) { return v * v; });
// [ 1, 4, 9 ]

_.filter([1, 2, 3, 4], function(val) { return val > 2; });
// [ 3, 4 ]

_.reject([1, 2, 3, 4], function(val) { return val > 2; });
// [ 1, 2 ]
