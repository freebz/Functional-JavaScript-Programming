// 코드 6-24 X-ray 1

_.go(users,
  _.find(_.l('u=>u.id==1')),
  function(user) { return user.name; },
  console.log); // BJ

_.go(users,
  _.find(function(u) { return u.id == 1; }), // _.find(_.l('u=>u.id==1'))
  function(user) { return user.posts; },
  _.find(function(p) { return p.id == 4; }),
  function(user) { return user.body; },
  console.log); // 하이4
