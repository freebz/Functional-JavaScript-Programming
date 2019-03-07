// 코드 7-7 sql.insert에서 사용할 함수들

_.wrap_arr = function(v) { return _.is_array(v) ? v : [v]; };
// 배열이 아니면 배열로 감싸서 리턴하는 함수

_.flatten([[1, 2, 3], [4, [5], 6]]);
// [ 1, 2, 3, 4, 5, 6 ]

_.uniq([1, 2, 1, 4, 1, 3]);
// [ 1, 2, 4, 3 ]

_.keys({one: 1, two: 2, three: 3});
// [ 'one', 'two', 'three' ]

_.values({one: 1, two: 2, three: 3});
// [ 1, 2, 3 ]

_.map_object({x: 1, y: 2}, function(v) { return v + 1; });
// { x: 2, y: 3 }

_.object([['a', 1], ['b', 2]]);
// { a: 1, b: 2 }
