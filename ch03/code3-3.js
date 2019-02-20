// 코드 3-3 _.reject, _.contains, _.isArray

var list = [1, 2, 3, 4, 5, 6];
_.reject(list, function(num) { return num % 2 == 0; });
// [ 1, 3, 5 ]
console.log(list);
// [ 1, 2, 3, 4, 5, 6 ]

_.contains([1, 2, 3], 3);
// true

_.isArray([1, 2, 3]);
// true
