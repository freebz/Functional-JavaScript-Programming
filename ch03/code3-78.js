// 코드 3-78 limiter 추가

function bloop(new_data, body, stopper, is_reduce) {
  return function(data, iter_predi, opt1) {
    iter_predi = iter_predi || _.idtt;
    var result = new_data(data);
    var memo = is_reduce ? opt1 : undefined;
    var limiter = is_reduce ? undefined : opt1; // [1] reduce가 아닐 때만 opt1 사용
    var keys = isArrayLike(data) ? null : _.keys(data);
    for (var i = 0, len = (keys || data).length; i < len; i++) {
      var key = keys ? keys[i] : i;
      memo = is_reduce ?
	iter_predi(memo, data[key], key, data) :
	iter_predi(data[key], key, data);
      if (!stopper) body(memo, result, data[key], key);
      else if (stopper(memo)) return body(memo, result, data[key], key);
      if (limiter && limiter == result.length) break;
      // [2] limiter가 있고 result.length와 같다면 break
    }
    return is_reduce ? memo : result;
  }
}
_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));

_.filter([1, 2, 3, 4, 5, 6, 7, 8], function() {
  return true;
});
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

_.filter([1, 2, 3, 4, 5, 6, 7, 8], function() {
  return true;
}, 4);
// [ 1, 2, 3, 4 ]
