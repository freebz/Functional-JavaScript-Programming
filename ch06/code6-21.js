// 코드 6-21 중첩 구조 3

var nested4 = nested3.updateIn(['a', 'b', 'c'], function(list) {
  return list.push(6);
});
// Map { "a": Map { "b": Map { "c": List [ 3, 4, 5, 6 ], "d": 7 } } }

console.log(nested3 == nested4); // false
