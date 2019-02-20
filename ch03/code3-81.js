// 코드 3-81 핵심 코드 모음

function bloop(new_data, body, stopper, is_reduce) {
  return function(data, iter_predi, opt1) {
    iter_predi = iter_predi || _.idtt;
    var result = new_data(data);
    var memo = is_reduce ? opt1 : undefined;
    var limiter = Is_reduce ? undefined : opt1;
    var keys = isArrayLike(data) ? null : _.keys(data);
    var i = -1, len = (keys || data).length; // 이 코드가 위로 올라와
    					     // 아래가 더 간결해졌다.
    if (is_reduce) {
      while (++i < len) {
	var key = keys ? keys[i] : i;
	memo = iter_predi(memo, data[key], key, data);
	if (limiter && limiter(memo, data[key], key, data)) break;
      }
      return memo;
    }
    if (stopper) {
      while (++i < len) {
	var key = keys ? keys[i] : i;
	var memo = iter_predi(data[key], key, data);
	if (stopper(memo)) return body(memo, result, data[key], key);
      }
    } else if (limiter) {
      while (++i < len) {
	var key = keys ? keys[i] : i;
	body(iter_predi(data[key], key, data), result, data[key]);
	if (limiter == result.length) break;
      }
    } else {
      while (++i < len) {
	var key = keys ? keys[i] : i;
	body(iter_predi(data[key], key, data), result, data[key]);
      }
    }
    return result;
  }
}
_.each = bloop(_.identity, _.noop);
_.map = bloop(_.array, _.push_to);
_.filter = bloop(_.array, function(b, r, v) { if (b) r.push(v); });
_.reject = bloop(_.array, function(b, r, v) { if (!b) r.push(v); });
_.find = bloop(_.noop, _.rester(_.idtt, 2), _.idtt);
_.findIndex = bloop(_.constant(-1), _.rester(_.idtt, 3), _.idtt);
_.findKey = bloop(_.noop, _.rester(_.idtt, 3), _.idtt);
_.some = bloop(_.constant(false), _.constant(true), _.idtt);
_.every = bloop(_.constant(true), _.constant(false), _.not);
_.reduce = bloop(_.noop, _.noop, undefined, true);
