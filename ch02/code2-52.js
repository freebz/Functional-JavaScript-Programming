// 코드 2-52

(a1.test)(8, 9, 10);
// a b c: 8 9 10
// this: Array [1, 2, 3]
// arguments: [8, 9, 10]

a1['test'](8, 9, 10);
// a b c: 8 9 10
// this: Array [1, 2, 3]
// arguments: [8, 9, 10]
