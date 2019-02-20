// 코드 3-15 연속으로 map 사용

function mul10(num) { return num * 10 }
function sub10(num) { return num - 10 }
function square(num) { return num * num }

// Underscore.js
var list = [1, 2, 3, 4, 5];
var result2 =
  _.chain(list)
  .map(mul10)
  .map(sub10)
  .map(square)
  .value();

console.log(result2);

// Lodash
var list = [1, 2, 3, 4, 5];
var result1 =
  lodash.chain(list)
  .map(mul10)
  .map(sub10)
  .map(square)
  .value();

console.log(result1);
