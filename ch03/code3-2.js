// 코드 3-2 forEach와 _.each의 차이

[1, 2, 3].forEach(function(val, idx, list) { console.log(val, idx, list); });
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]
// undefined

_.each({ a: 1, b: 2 }, function(val, key, obj) { console.log(val, key, obj); });
// 1 'a' { a: 1, b: 2 }
// 2 'b' { a: 1, b: 2 }
// { a: 1, b: 2 }
