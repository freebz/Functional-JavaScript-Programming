// 코드 4-20 로직 더하기

var join_company2 = _.pipeline(
  joined_at,
  _.partial(join, companies),
  function() { /*...*/ }, // ex) 기업 회원은 이용료가 있어 결제 관련 코드를 추가
  greeting);
