// 코드 7-17 _.find_where 1

_.find_where = function(list, attrs) {
  return _.find(list, function(obj) {
    var keys = _.keys(attrs);
    for (var i = 0, l = keys.length, key; i < l; i++) {
      key = keys[i];
      if (obj[key] !== attrs[key]) return false;
    }
    return true;
  });
};

console.log(
  _.find_where([{ id: 1, name: "ID" }, { id: 2, name: "CJ" }], { id: 1 })
);
// { id: 1, name: 'ID' }
