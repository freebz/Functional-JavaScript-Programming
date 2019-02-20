// 코드 3-75 _.each로 _.reduce 만들기

_.reduce = function(data, iteratee, memo) {
  _.each(data, function(val, idx, data) {
    memo = iteratee(memo, val, idx, data);});
  return memo;
};
