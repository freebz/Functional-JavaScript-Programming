// 코드 5-5 _.pipe

var f1 = _.pipe(add, square);
f1(2, 3);
// 25

var f2 = _.pipe((a, b) => a + b, a => a * a);
f2(2, 3);
// 25
