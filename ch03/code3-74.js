// 코드 3-74

_.reduce(users, function(info, user) {
  var group = user.age - user.age % 10;
  info.count[group] = (info.count[group] || 0) + 1;
  info.total[group] = (info.total[group] || 0) + user.age;
  return info;
}, { count: {}, total: {} });

/*
{
  count: { '20': 4, '30': 3 },
  total: { '20': 104, '30': 96 }
}
*/
