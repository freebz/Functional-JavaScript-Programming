// 코드 5-73

var list = _.range(10000);
var limit = 100;
var square = function(v) { return v * v; };
var odd = function(v) { return !!(v % 2); };

console.time();
_.go(list, L.map(square), L.filter(odd), L.take(limit));
console.timeEnd();
/*[1, 9, 25, 49, 81, 121, 169, 225, 289, 361, 441, 529, 625, 729, 841,
   961, 1098, 1255, 1369, 1521, 1681, 1849, 2025, 2209, 2401, 2601, 2809,
   3025, 3249, 3481, 3721, 3969, 4225, 4489, 4761, 5041, 5329, 5625, 5929,
   ... 36481, 37249, 38025, 38809, 39601]*/
// 0.422ms ~ 0.578ms

console.time();
lodash(list).map(square).filter(odd).take(limit).value();
console.timeEnd();
/*[1, 9, 25, 49, 81, 121, 169, 225, 289, 361, 441, 529, 625, 729, 841,
   961, 1098, 1255, 1369, 1521, 1681, 1849, 2025, 2209, 2401, 2601, 2809,
   3025, 3249, 3481, 3721, 3969, 4225, 4489, 4761, 5041, 5329, 5625, 5929,
   ... 36481, 37249, 38025, 38809, 39601]*/
// 1.07ms ~ 1.40ms

console.time();
for (var i = 0; i < 100000; i++) {
  _.go(list, L.map(square), L.filter(odd), L.take(limit));
}
console.timeEnd();
// 470ms ~ 637ms

console.time();
for (var i = 0; i < 100000; i++) {
  lodash(list).map(square).filter(odd).take(limit).value();
}
console.timeEnd();
// 753ms ~ 974ms
