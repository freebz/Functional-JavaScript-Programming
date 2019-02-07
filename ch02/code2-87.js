// 코드 2-87

var gte = (a, b) => a <= b;
var lte = (a, b) => a >= b;

gte(1, 1);
// true
gte(1, 2);
// true

lte(1, 1);
// true
lte(2, 1);
// true
