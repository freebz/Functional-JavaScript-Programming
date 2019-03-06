// 코드 6-20 중첩 구조 2

var nested3 = nested2.updateIn(['a', 'b', 'd'], function(value) {
  return value + 1;
});
// Map { "a": Map { "b": Map { "c": List [ 3, 4, 5 ], "d": 7 } } }

console.log(nested2 == nested3); // false
