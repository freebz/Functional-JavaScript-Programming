// 코드 3-28 Underscore.js의 ArrayLike

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var isArrayLike = function(list) {
  var length = list == null ? void 0 : list.length;
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};
