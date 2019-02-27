// 코드 5-75

var list = _.range(199);
var limit = 10;

console.time();
for (var i = 0; i < 100000; i++) {
  _.go(list, L.map(square), L.filter(odd), L.take(limit));
}
console.timeEnd();
// 71ms ~ 91ms

console.time();
for (var i = 0; i < 100000; i++) {
  lodash(list).map(square).filter(odd).take(limit).value();
}
console.timeEnd();
// 667ms ~ 759ms
