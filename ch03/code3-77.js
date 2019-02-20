// 코드 3-77 절차지향적 리팩터링

function bloop(new_data, body, stopper, is_reduce) {
  return function(data, iter_predi, opt1) {
    iter_predi = iter_predi || _.idtt;
    var result = new_data(data);
    var memo = is_reduce ? opt1 : undefined;
    var keys = isArrayLike(data) ? null : _.keys(data); // [1]
    for (var i = 0, len = (keys || data).length; i < len; i++) { // [2]
      var key = keys ? keys[i] : i; // [3]
      memo = is_reduce ?
	iter_predi(memo, data[key], key, data) :
	iter_predi(data[key], key, data);
      if (!stopper) body(memo, result, data[key], key);
      else if (stopper(memo)) return body(memo, result, data[key], key);
    }
    return is_reduce ? memo : result;
  }
}
_.reduce = bloop(_.noop, _.noop, undefined, true);
_.each = bloop(_.identity, _.noop);


_.reduce([1, 2, 3], function(memo, val) {
  return memo + val;
}, 0);
// 6

_.each({ a: 1, b: 2 }, console.log);
// 1 'a' { a: 1, b: 2 }
// 2 'b' { a: 1, b: 2 }
// { a: 1, b: 2 }

_.each(null, console.log);
//
