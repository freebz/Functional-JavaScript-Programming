// 코드 3-62

// _.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));

_.filter = bloop(function() { return []; },
  function(bool, result, val) {
    return (function(bool, result, val) {
      return (function(v) {
	return v;
      })(bool, result, val) ?
	(function() {
	  return (function(result, val) {
	    return (function(val, obj) {
	      return obj.push(val);
	    })(val, result);
	  })(result, val);
	})(bool, result, val) : undefined;
    })(bool, result, val)
  });

_.filter([1, 2, 3, 4], function(val) {
  return val > 2;
});
// [ 3, 4 ]

// 화살표 함수 버전
_.filter = bloop(() => [],
  (bool, result, val) =>
    ((bool, result, val) =>
      ((v) => v)(bool, result, val) ?
        (() => ((result, val) =>
	  ((val, obj) => obj.push(val))(val, result))(result, val))(bool, result, val) :
        undefined
    )(bool, result, val));
