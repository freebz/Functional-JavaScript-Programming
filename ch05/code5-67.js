// 코드 5-67 10대 2명만 찾는 코드 간결하게 하기

/*
function(list, user) {
  if (user.age < 20) list.push(user);
  if (list.length < 2) return list;
  return _.break(list);
}
*/

_.go(users,
  _.loop(function(list, user) {
    return user.age < 20 && list.push(user) == 2 ? _.break(list) : list;
  }, []),
  console.log);
// [ { id: 1, name: 'ID', age: 12 }, { id: 3, name: 'HA', age: 13 } ]
