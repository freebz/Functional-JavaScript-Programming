// 코드 2-55

test.call(o1, 3, 2, 1);
// a b c: 3 2 1
// this: Object {name: "obj1"}
// arguments: [3, 2, 1]

test.call(1000, 3, 2, 1);
// a b c: 3 2 1
// this: Number 1000
// arguments: [3, 2, 1]
