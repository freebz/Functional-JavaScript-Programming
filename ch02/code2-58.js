// 코드 2-58

test.apply(o1, { 0: 3, 1: 2, 2: 1, length: 3 }); // Array가 아님
// a b c: 3 2 1
// this: Object { name: 'obj1'}
// arguments: [3, 2, 1]

(function() {
  test.apply(1000, arguments);	// arguments 객체 역시 Array가 아님
})(3, 2, 1);
// a b c: 3 2 1
// this: [Number: 1000]
// arguments: [3, 2, 1]
