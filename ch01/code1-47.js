// 코드 1-47

// 1. 흔한 클로저 실수 - 어떤 버튼을 클릭해도 JE
var buttons = [];
for (var i = 0; i < users.length; i++) {
  var user = users[i];
  buttons.push($('<button>').text(user.name).click(function() {
    console.log(user.name);
  }));
}
$('.user-list').append(buttons);

// 2. 절차지향적 해결 - 어차피 함수의 도움을 받아야 함, 각각 다른 이름이 잘 나옴
var buttons = [];
for (var i = 0; i < users.length; i++) {
  (function(user) {
    buttons.push($('<button>').text(user.name).click(function() {
      console.log(user.name);
    }));
  })(users[i]);
}
$('.user-list').append(buttons);

// 3. 함수적 해결 - 깔끔한 코드는 덤
$('.user-list').append(
  _.map(users, function(user) {
    return $('<button>').text(user.name).click(function() {
      console.log(user.name);
    });
  }));
