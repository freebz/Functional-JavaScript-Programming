// 코드 5-61 _.difference, _.compace

_.difference = function(data, target) {
  return _.filter(data, function(val) {
    return !_.contains(target, val);
  });
};
console.log( _.difference([1, 2, 1, 0, 3, 1, 4], [0, 1]));
// [ 2, 3, 4 ]

// 혹은
_.difference = function(data, target) {
  return _.reject(data, function(val) {
    return _.contains(target, val);
  });
};
console.log( _.difference([1, 2, 1, 0, 3, 1, 4], [0, 1]));
// [ 2, 3, 4 ]

_.compact = _.filter(_.identity); // 부분 커링
console.log( _.compact([0, 1, false, 2, '', 3]) );
// [ 1, 2, 3 ]
