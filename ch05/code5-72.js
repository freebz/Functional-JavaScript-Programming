// 코드 5-72 5-65를 연속 실행으로 대체하기

var users = [
  { id: 1, name: "ID", age: 12 },
  { id: 2, name: "BJ", age: 28 },
  { id: 3, name: "HA", age: 13 },
  { id: 4, name: "PJ", age: 23 },
  { id: 5, name: "JE", age: 29 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "JE", age: 31 },
  { id: 8, name: "HI", age: 15 },
  { id: 9, name: "HO", age: 28 },
  { id: 10, name: "KO", age: 34 }
];

// 10대 2명까지만 찾아내기
_.go(users,
  L.filter(user => user.age < 20),
  L.take(2),
  console.log);
// [ { id: 1, name: 'ID', age: 12 }, { id: 3, name: 'HA', age: 13 } ]
// 3번만 반복

// 10대 2명까지만 찾아내서 이름 수집하기
_.go(users,
  L.filter(user => user.age < 20),
  L.map(v => v.name),
  L.take(2),
  console.log);
// [ 'ID', 'HA' ]
// 3번만 반복
