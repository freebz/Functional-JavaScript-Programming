// 코드 3-80 for 안의 if 꺼내기

function bloop(new_data, body, stopper, is_reduce) {
  return function(data, iter_predi, opt1) {
    iter_predi = iter_predi || _.idtt;
    var result = new_data(data);
    var memo = is_reduce ? opt1 : undefined;
    var limiter = is_reduce ? undefined : opt1;
    var keys = isArrayLike(data) ? null : _.keys(data);

    if (is_reduce) { // reduce
      for (var i = 0, len = (keys || data).length; i < len; i++) {
	var key = keys ? keys[i] : i;
	memo = iter_predi(memo, data[key], key, data);
      }
      return memo;
    }
    if (stopper) { // find, some, every, findIndex, findKey
      for (var i = 0, len = (keys || data).length; i < len; i++) {
	var key = keys ? keys[i] : i;
	var memo = iter_predi(data[key], key, data);
	if (stopper(memo)) return body(memo, result, data[key], key);
      }
    } else if (limitter) { // each, map, filter, reject을 하면서 limit이 있을 때
      for (var i = 0, len = (keys || data).length; i < len; i++) {
	var key = keys ? keys[i] : i;
	body(iter_predi(data[key], key, data), result, data[key]);
	if (limiter == result.length) break;
      }
    } else { // each, map, filter, reject
      for (var i = 0, len = (keys || data).length; i < len; i++) {
	var key = keys ? keys[i] : i;
	body(iter_predi(data[key], key, data), result, data[key]);
      }
    }
    return result;
  }
}
