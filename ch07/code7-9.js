// 코드 7-9 단체 채팅 초대
var invite = function(chat_id, users) {
  return sql.insert('chats_users', _.map(users, user => ({
    user_id: user.id, chat_id: chat_id
  })));
};

console.log(
  invite(8, [{ id: 1, name: "id" }, { id: 5, name: "pj" }, {id: 6, name: "bj" }])
);
// insert into "chats_users" ("user_id", "chat_id") values (1, 8), (5, 8), (6, 8)

// Partial.js라면 _.map의 부분 커링과 인자 추가 기능이 있어 아래처럼 작성 가능
var invite = _.pipe(
  _.map((chat_id, user) => ({ user_id: user.id, chat_id: chat_id })),
  _(sql.insert, 'chats_users'));

console.log(
  invite(12, [{ id: 1, name: "id" }, { id: 6, name: "bj" }])
);
// insert into "chats_users" ("user_id", "chat_id") values (1, 12), (6, 12)
