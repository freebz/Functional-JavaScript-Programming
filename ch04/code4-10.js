// 코드 4-10

var method = function(obj, method) {
  return obj[method].apply(obj, _.rest(arguments, 2));
};

var push = _.partial(method, _, 'push');
var shift = _.partial(method, _, 'shift');

var a = [1, 2];
push(a, 3);
console.log(a);
// [ 1, 2, 3 ]

shift(a);
console.log(a);
// [ 2, 3 ]

var b = method([1, 2, 3], 'concat', 4, 5);
console.log(b);
// [ 1, 2, 3, 4, 5 ]
