// 코드 2-54

test.call(undefined, 1, 2, 3);
test.call(null, 1, 2, 3);
test.call(void 0, 1, 2, 3);
// a b c: 1 2 3
// this: Window {...}
// arguments: [1, 2, 3]
