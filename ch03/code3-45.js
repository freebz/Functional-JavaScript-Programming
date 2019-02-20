// 코드 3-45

_.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};
_.keys = function(obj) {
  return _.isObject(obj) ? Object.keys(obj) : [];
};

console.log(_.keys({ name: "PJ" }));
// [ 'name' ]
console.log(_.keys([1, 2, 3]));
// [ '0', '1', '2' ]
console.log(_.keys(10));
// []
console.log(_.keys(null))
// []
