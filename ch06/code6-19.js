// 코드 6-19 중첩 구조(Nested Structures)

var nested1 = Immutable.fromJS({ a: { b: { c: [3, 4, 5] } } });
// Map { "a": Map { "b": Map { "c": List [ 3, 4, 5 ] } } }

var nested2 = nested1.mergeDeep({ a: { b: { d: 6 } } });
// Map { "a": Map { "b": Map { "c": List [ 3, 4, 5 ], "d": 6 } } }

console.log(nested1 == nested2); // false 역시 두 값은 다르다.
