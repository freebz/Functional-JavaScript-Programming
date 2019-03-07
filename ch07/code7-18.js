// 코드 7-18 _.find_where 2

_.find_where = function(list, attrs) {
  return _.find(list, function(obj) {
    return _.every(attrs, function(val, key) {
      return obj[key] === val;
    });
  });
};

console.log(
  _.find_where([{ id: 1, name: "ID" }, { id: 2, name: "CJ" }], { id: 1 })
);
// { id: 1, name: 'ID' }
