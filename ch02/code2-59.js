// 코드 2-59

(function() {
  arguments.length--;
  test.apply(1000, arguments);
})(3, 2, 1);
// a b c: 3 2 undefined
// this: [Number: 1000]
// arguments: [3, 2]

test.apply(1000, [1].concat([2, 3]));
// a b c: 1 2 3
// this: [Number: 1000]
// arguments: [1, 2, 3]
