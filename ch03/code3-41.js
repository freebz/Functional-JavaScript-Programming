// 코드 3-41

_.array = function() { return [] };
_.push_to = function(val, obj) {
  obj.push(val);
  return val;
};
_.noop = function() {};

_.map = bloop(_.array, _.push_to);
_.each = bloop(_.identity, _.noop);
