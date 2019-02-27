// 코드 5-65 _.loop로 10대 2명만 찾아내기

var users = [
  { id: 1, name: "ID", age: 12 },
  { id: 2, name: "BJ", age: 28 },
  { id: 3, name: "HA", age: 13 },
  { id: 4, name: "PF", age: 23 },
  { id: 5, name: "JE", age: 29 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "JE", age: 31 },
  { id: 8, name: "HI", age: 15 },
  { id: 9, name: "HO", age: 28 },
  { id: 10, name: "KO", age: 34 }
];

var count = 0;
_.go(users,
  _.loop(function(list, user) { // 10대 2명만 뽑기
    count++; // 루프 카운트
    if (user.age < 20) list.push(user);
    if (list.length == 2) return _.break(list);
    return list;
  }, []),
  console.log);
// [ { id: 1, name: 'ID', age: 12 }, { id: 3, name: 'HA', age: 13 } ]

console.log(count); // 3 (루프를 3번만)
// 3
