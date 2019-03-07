// 코드 7-19 _.find_where 3

_.is_match = function(a, b) {
  return _.every(b, function(b_val, b_key) {
    return a[b_key] === b_val;
  });
  // b의 key/value 모두가 a에도 포함되어 있다면 true
};

_.find_where = function(list,attrs) {
  return _.find(list, function(obj) {
    return _.is_match(obj, attrs);
  });
};

console.log(
  _.find_where([{ id: 1, name: "ID" }, { id: 2, name: "CJ" }], { id: 1 })
);
// { id: 1, name: 'ID' }

console.log(
  _.is_match({ id: 5, name: "PJ" }, { id: 5 })
);
// true
