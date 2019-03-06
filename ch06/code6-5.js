// 코드 6-5 _.reject

var rejectedUser2 = _.reject(users2, function(user) { return user.age < 30; });
console.log(rejectedUser2);
// [ { name: 'ID', age: 32 }, { name: 'BJ', age: 32 } ]

console.log(rejectedUser2 == users2);
// false
console.log(rejectedUser2.length, users2.length);
// 2 5
console.log(rejectedUser2[0] == users2[0]);
// true
