// 코드 1-9 map 사용

var users_under_30 = filter(users, function(user) { return user.age < 30 });
console.log(users_under_30.length);
// 4
                               // iteratee
var ages = map(users_under_30, function(user) { return user.age; });
console.log(ages);
// [ 25, 28, 27, 24 ]

var users_over_30 = filter(users, function(user) { return user.age >= 30 });
console.log(users_over_30.length);
// 3
                               // iteratee
var names = map(users_over_30, function(user) { return user.name; });
console.log(names);
// [ 'ID', 'BJ', 'JM' ]
