// 코드 6-7 차이는 n명입니다. 절차 지향 버전

function sub(a, b) { return a - b; }

function diff(users, age, gt) {
  var rejectedUsers = [];
  for (var i = 0; i < users.length; i++) {
    if ((gt && users[i].age < age) || (!gt && users[i].age >= age)) {
      rejectedUsers.push(users[i])
    }
  }
  console.log('차이는 ' + sub(users2.length, rejectedUsers.length) + '명입니다.');
}

diff(users2, 30, true);
// 차이는 2명입니다.

diff(users2, 30, false);
// 차이는 3명입니다.
