// 코드 4-11

// _.compose 사용법
_.compose(console.log, function(a) { return a - 2; }, function(a) { return a + 5; })(0);
// console.log <- 5 - 2 <- 0 + 5 <- 0
// 3

var falsy_values = _.compose(
  _.partial(_.isEqual, -1), // [1]
  _.partial(_.findIndex, _, _.identity)); // [2]

console.log( falsy_values([1, true, {}]) );
// false
console.log( falsy_values([0, 1, false]) );
// false
console.log( falsy_values([0, "", false]) );
// true

var some = _.negate(falsy_values); // [3]

console.log( some([1, true, {}]) );
// true
console.log( some([0, 1, false]) );
// true
console.log( some([0, "", false]) );
// false

var every = _.compose(
  _.partial(_.isEqual, -1),
  _.partial(_.findIndex, _, _.negate(_.identity))); // [4]

console.log( every([1, true, {}]) );
// true
console.log( every([0, 1, false]) )
// false
console.log( every([0, "", false]) );
// false
