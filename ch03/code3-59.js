// 코드 3-59

_.push = function(obj, val) {
  obj.push(val);
  return obj;
};
_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));

_.filter([1, 2, 3, 4], function(val) {
  return val > 2;
});
// [ 3, 4 ]

_.filter([1, 2, 3, 4], function(val) {
  return val < 3;
});
// [ 1, 2 ]
