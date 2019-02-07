// 코드 2-49

test(10); // [1]
// a b c: 10 undefined undefined
// this: Window {...}
// arguments: [10]

test(10, undefined); // [2]
// a b c: 10 undefined undefined
// this: Window {...}
// arguments: [10, undefined]

test(10, 20, 30); // [3]
// a b c: 10 20 30
// this: Window {...}
// arguments: [10, 20, 30]
