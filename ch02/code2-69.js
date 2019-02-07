// 코드 2-69 if else 대체하기

function addFriend(u1, u2) {
  if (u1.friends.indexOf(u2) == -1) {
    if (confirm("친구로 추가할까요?")) {
      u1.friends.push(u2);
      alert('추가되었습니다.');
    }
  } else {
    alert('이미 친구입니다.')
  }
}
var pj = { name: "PJ", friends: [] };
var ha = { name: "HA", friends: [] };

console.log(addFriend(pj, ha));
// 친구로 추가할까요? -> 확인 -> 추가되었습니다.
console.log(addFriend(pj, ha));
// 이미 친구입니다.

function addFriend2(u1, u2) {
  (u1.friends.indexOf(u2) == -1 || alert('이미 친구입니다.')) &&

  confirm("친구로 추가할까요?") && u1.friends.push(u2) && alert('추가되었습니다.');
}
var pj = { name: "PJ", friends: [] };
var ha = { name: "HA", friends: [] };

console.log(addFriend2(pj, ha));
// 친구로 추가할까요? -> 확인 -> 추가되었습니다.
console.log(addFriend2(pj, ha));
// 이미 친구입니다.
