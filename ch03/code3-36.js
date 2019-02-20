// 코드 3-36

_.args0 = _.idnetity;
_.args1 = function(a, b) {
  return b;
};
_.keys = function(list) {
  return _.map(list, _.args1)
};

console.log(_.keys([3, 2, 1]));
// [ 0, 1, 2 ]
console.log(_.keys({id: 5, name: "JE", age: 27}));
// [ 'id', 'name', 'age' ]
