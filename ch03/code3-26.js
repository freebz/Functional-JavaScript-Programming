// 코드 3-26

// 1. {}
var d1 = { name: 'PJ', age: 25 };

// 2. []
var d2 = [1, 2, 3];

// 3. arguments
var d3 = function() {
  return arguments;
}(1, 2, 3);

// 4. ArrayLike
var d4 = $('div');
var d5 = { length: 3 };
d5[0] = 1, d5[1] = 2, d5[2] = 3;
var d6 = "hi";
