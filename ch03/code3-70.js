// 코드 3-70 bloop 수정

function bloop(new_data, body, stopper) {
  return function(data, iter_predi) {
    iter_predi = iter_predi || _.idtt; // 넘어오지 않으면 _.idtt로 대체
    var result = new_data(data);
    var memo;
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
	memo = iter_predi(data[i], i, data);
	if (!stopper) body(memo, result, data[i], i);
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

_.some = bloop(_.constant(false), _.constant(true), _.idtt);
_.every = bloop(_.constant(true), _.constant(false), _.not);

_.some([false, null, 10, undefined]);
// true (루프 count 3)
_.every([false, null, true, undefined]);
// false (루프 count 1)
_.every([function() {}, {}, [], {}]);
// true (루프 count 4)
