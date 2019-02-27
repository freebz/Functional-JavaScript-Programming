// 코드 5=66 _.reduce로 10대 2명으로 접기

var count = 0;
_.go(
  users,
  _.reduce(function(list, user) { // 10대 2명만 뽑기
    count++; // 루프 카운트
    if (list.length == 2) return list; // 2개를 찾았을 때부터는
    				       // 반복이 되어도 아무 일 안 하도록
    if (user.age < 20) list.push(user);
    return list;
  }, []),
  console.log);
console.log(count); // 10 (루프를 10번)
