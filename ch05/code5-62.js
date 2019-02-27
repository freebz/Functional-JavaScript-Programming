// 코드 5-62 _.group_by와 _.reduce

var users = [
  { id: 1, name: 'ID', age: 33 },
  { id: 2, name: 'BJ', age: 33 },
  { id: 3, name: 'PJ', age: 29 },
  { id: 4, name: "JE", age: 27 }
];

_.group_by = function(data, iter) {
  return _.reduce(data, function(grouped, val, i, list) {
    var key = iter(val, i, list)
    _.has(grouped, key) ? grouped[key].push(val) : grouped[key] = [val];
    return grouped;
  }, {});
};

console.log(
  _.group_by(users, u => u.age)
);
// {
//   '27': [ { id: 4, name: 'JE', age: 27 } ],
//   '29': [ { id: 3, name: 'PJ', age: 29 } ],
//   '33': [ { id: 1, name: 'ID', age: 33 }, { id: 2, name: 'BJ', age: 33 } ]
// }

console.log(
  _.group_by(users, u => u.age - u.age % 10)
);
// {
//   '20': [ { id: 3, name: 'PJ', age: 29 }, { id: 4, name: 'JE', age: 27 } ],
//   '30': [ { id: 1, name: 'ID', age: 33 }, { id: 2, name: 'BJ', age: 33 } ]
// }
