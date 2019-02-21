// 코드 4-19 _.partial과 함께 사용

var users = [];
var companies = [];

function joined_at(attrs) {
  return _.extend(attrs, { joined_at: new Date() });
}

function join(table, member) {
  table.push(member);
  member.id = table.length;
  return member;
}

function greeting(member) {
  return member.name + " 회원님은 " + member.id + "번째 회원이십니다. 환영합니다.";
}

var join_user = _.pipeline(
  joined_at,
  _.partial(join, users),
  greeting);

var join_company = _.pipeline(
  joined_at,
  _.partial(join, users),
  greeting);

console.log( join_user({ name: "ID" }) );
// ID 회원님은 1번째 회원이십니다. 환영합니다.
console.log( join_company({ name: "MARPPLE" }) );
// MARPPLE 회원님은 2번째 회원이십니다. 환영합니다.
