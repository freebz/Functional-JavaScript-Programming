// 코드 3-35

_.identity = function(v) {
  return v;
};
_.idtt = _.identity;
_.values = function(list) {
  return _.map(list, _.identity);
};


console.log(_.values({id: 5, name: "JE", age: 27}));
// [ 5, 'JE', 27 ]
