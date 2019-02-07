// 코드 2-57

test.apply(o1, [3, 2, 1]);
// a b c: 3 2 1
// this: Object {name: "obj1"}
// arguments: [3, 2, 1]

test.apply(1000, [3, 2, 1]);
// a b c: 3 2 1
// this: Number 1000
// arguments: [3, 2, 1]

o1.test.apply(undefined, [3, 2, 1]);
// a b c: 3 2 1
// this: Window {...}
// arguments: [3, 2, 1]

o1.test.apply([50], [3, 2, 1]);
// a b c: 3 2 1
// this: Array [50]
// arguments: [3, 2, 1]
