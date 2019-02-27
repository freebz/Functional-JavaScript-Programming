// 코드 5-28

// Underscore.js
var mapper1 = function(a, b, list) {
  return _.map(list, function(val) {
    return a * b * val;
  });
};

console.log( mapper1(10, 100, [1, 2, 3]) );
// [ 1000, 2000, 3000 ]

// Partial.js
var mapper2 = _.map(function(a, b, val) {
  return a * b * val;
});

console.log( mapper2(10, 100, [1, 2, 3]) );
// [ 1000, 2000, 3000 ]

function mult(a, b) {
  return a * b;
}
var mult_all = _.map(function() {
  return _.reduce(_.initial(arguments, 2), mult);
});
console.log( mult_all(10, 10, 2, [1, 2, 3]) );
// [ 200, 400, 600 ]
console.log( mult_all(10, 10, [1, 2, 3]) );
// [ 100, 200, 300 ]

var mult_all2 = _.map(__(
  _.args,
  _.initial(2),
  _.reduce(mult)));

console.log( mult_all2(10, 10, 2, [1, 2, 3]) );
// [ 200, 400, 600 ]
console.log( mult_all2(10, 10, [1, 2, 3]) );
// [ 100, 200, 300 ]
