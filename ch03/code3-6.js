// 코드 3-6 _.negate

var eq5 = function(a) { return a == 5; };
eq5(5);
// true

var neq5 = _.negate(eq5);
neq5(5);
// false
