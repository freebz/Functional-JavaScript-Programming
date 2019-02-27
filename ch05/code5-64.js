// 코드 5-64 _.some

_.some = function(data, iter) {
  iter = iter || function(v) { return v; };
  var res = false;
  _.find(data, function(v) { return res = !!iter(v); });
  return res;
};

console.log(
  _.some([0, 0, 1, 0, 2])
);
// true

console.log(
  _.some([0, 0, 1, 0, 2], function(v) { return v > 2; })
);
// false
