// 코드 6-25 X-ray 2

_.go(users,
  _.find(_.l('$.id==1')), // function($) { return $.id == 1 }
  function(user) { return user.name; },
  console.log); // BJ

_.go(users,
  _.find(_.l('$.id==1')), // function($) { return $.id == 1 }
  function(user) { return user.posts; },
  _.find(_.l('$.id==4')), // function($) { return $.id == 4 }
  function(user) { return user.body; },
  console.log); // 하이4
