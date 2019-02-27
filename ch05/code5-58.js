// 코드 5-58 _.map과 _.pluck

_.pluck = function(data, key) {
  return _.map(data, function(val) { return val[key]; });
};

var users = [{ id: 1, name: 'ID' }, { id: 3, name: 'BJ' }, { id: 6, name: 'PJ' }];

console.log(_.pluck(users, 'id'));
// [ 1, 3, 6 ]

console.log(_.pluck(users, 'name'));
// [ 'ID', 'BJ', 'PJ' ]

console.log(_.map(users, u=>u.id));
// [ 1, 3, 6 ]

console.log(_.map(users, u=>u.name));
// [ 'ID', 'BJ', 'PJ' ]
