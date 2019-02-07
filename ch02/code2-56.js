// 코드 2-56

o1.test.call(undefined, 3, 2, 1);
// a b c: 3 2 1
// this: Window {...}
// arguments: [3, 2, 1]

o1.test.call([50], 3, 2, 1);
// a b c: 3 2 1
// this: Array [50]
// arguments: [3, 2, 1]
