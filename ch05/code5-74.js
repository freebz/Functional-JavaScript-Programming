// 코드 5-74

var list = _.range(200);
var limit = 10;

console.time();
for (var i = 0; i < 100000; i++) {
  _.go(list, L.map(square), L.filter(odd), L.take(limit));
}
console.timeEnd();
// 71ms ~ 88ms

console.time();
for (var i = 0; i < 100000; i++) {
  lodash(list).map(square).filter(odd).take(limit).value();
}
console.timeEnd();
// 290ms ~ 364ms
