// 코드 6-16 Immutable.Map

var map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('b', 50);
console.log(map1.get('b')); // 2
console.log(map2.get('b')); // 50
console.log(map1 == map2);  // false
