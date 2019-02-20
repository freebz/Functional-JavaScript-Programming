// 코드 3-63 _.reject

_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));

// 1번
_.reject = bloop(_.array, _.if(_.idtt, _.noop, _.rester(_.push)));
// _.noop = function() {};

_.reject([1, 2, 3, 4], function(val) {
  return val > 2;
});
// [ 1, 2 ]

_.negate = function(func) {
  return function() {
    return !func.apply(null, arguments);
  }
};

// 2번
_.reject = bloop(_.array, _.if(_.negate(_.idtt), _.rester(_.push)));

_.reject([1, 2, 3, 4], function(val) {
  return val > 2;
});
// [ 1, 2 ]

// 3번
_.not = function(v) { return !v };
_.reject = bloop(_.array, _.if(_.not, _.rester(_.push)));

_.reject([1, 2, 3, 4], function(val) {
  return val < 3;
});
// [ 3, 4 ]
