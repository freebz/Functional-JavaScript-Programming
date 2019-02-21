// 코드 4-18 개인 회원 가입과 기업 회원 가입

var users = [];
var companies = [];

function joined_at(attrs) {
  return _.extend(attrs, { joined_at: new Date() });
}

function greeting(member) {
  return member.name + " 회원님은 " + member.id + "번째 회원이십니다. 환영합니다.";
}

var join_user = _.pipeline(
  joined_at,
  function(member) {
    users.push(member);
    member.id = users.length;
    return member;
  },
  greeting);

var join_company = _.pipeline(
  joined_at,
  function(member) {
    companies.push(member);
    member.id = companies.length;
    return member;
  },
  greeting);

console.log( join_user({ name: "ID" }) );
// ID 회원님은 1번째 회원이십니다. 환영합니다.
console.log( join_user({ name: "JI" }) );
// JI 회원님은 2번째 회원이십니다. 환영합니다.
console.log( join_company({ name: "MAPPLE" }) );
// MAPPLE 회원님은 1번째 회원이십니다. 환영합니다.
