// 코드 2-50 메서드로 만들기

var o1 = { name: "obj1" };
o1.test = test;			// test 함수를 o1의 메서드로 할당함
o1.test(3, 2, 1);
// a b c: 3 2 1
// this: Object {name: "obj1"}
// arguments: [3, 2, 1]

var a1 = [1, 2, 3];
a1.test = test;			// test 함수를 a1의 메서드로 할당함
a1.test(3, 3, 3);
// a b c: 3 3 3
// this: Array [1, 2, 3]
// arguments: [3, 3,, 3]
