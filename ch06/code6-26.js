// 코드 6-26 X-ray 3

_.go(users,
  _.find(_.l('#1')), // function($) { return $.id == 1 }
  function(user) { return user.name; },
  console.log); // BJ

_.go(users,
  _.find(_.l('#1')), // function($) { return $.id == 1 }
  function(user) { return user.posts; },
  _.find(_.l('#4')), // function($) { return $.id == 4 }
  function(user) { return user.body; },
  console.log);
// 하이4
