// 코드 3-19

var users = [
  { id: 1, name: "ID", age: 32, team_id: 2 },
  { id: 2, name: "HA", age: 25, team_id: 2 },
  { id: 3, name: "BJ", age: 32, team_id: 1 },
  { id: 4, name: "PJ", age: 28, team_id: 1 },
  { id: 5, name: "JE", age: 27, team_id: 2 },
  { id: 6, name: "JM", age: 32, team_id: 1 },
  { id: 7, name: "HI", age: 24, team_id: 2 }
];

var me = { id: 3, name: "BJ", age: 32 };

// Underscore.js
var query = _.chain(users)
  .filter(function(user) {
    return user.age == me.age;
  })
  .reject(function(user) {
    return user.id == me.id;
  });
// 아래로 가기 전 filter와 reject까지 이미 실행이 되어 있음

$.get('/my_team_id', function(team_id) {
  query
    .filter(function(user) {
      return user.team_id == team_id;
    })
    .value();
  // [{ id: 6, name: "JM", age: 32, team_id: 1 }]
});

// Lodash
var query = lodash.chain(users)
  .filter(function(user) {
    return user.age == me.age;
  })
  .reject(function(user) {
    return user.id == me.id;
  });
// value()를 실행하기 전까지는 아무것도 미리 실행이 되어있지 않고 체인 내부에 예약 해둠

$.get('/my_team_id', function(team_id) {
  query
    .filter(function(user) {
      return user.team_id == team_id;
    })
    .value();
  // [{ id: 6, name: "JM", age: 32, team_id: 1 }]
});
