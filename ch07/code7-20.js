// 코드 7-20 _.find_where 4

_.is_match = _.every(function(a, b_val, b_key) { return a[b_key] === b_val; });
// 부분 커링 + predicate에게 인자 더 넘기기

_.find_where = function(list, attrs) {
  return _.find(list, _(_.is_match, _, attrs));
};
