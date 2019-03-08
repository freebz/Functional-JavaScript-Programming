// 코드 9-11

_.memoize2 = function(mid) {
  return function(func) {
    var memoize_id = ++mid;
    var f = arguments.length == 1 ? func : __.apply(null, arguments);
    return function(obj) {	                // 함수로 달아 놓음
      return _.has(obj._memoize || (obj._memoize = function(){}), memoize_id) ?
	obj._memoize[memoize_id] : (obj._memoize[memoize_id] = f(obj));
    }
  }
}(0);
