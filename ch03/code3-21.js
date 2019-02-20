// 코드 3-21

function printBool(val) {
  var result = Boolean(val);
  console.log(result);
  return result;
}

/* Underscore */
_.each([1, 2, 0, 20, 50], printBool);
// true
// true
// false
// true
// true

/* Lodash */
lodash.each([1, 2, 0, 20, 50], printBool);
// true
// true
// false <---- 여기서 멈춰버림

lodash.map([1, 2, 0, 20, 50], printBool);
// true
// true
// false
// true
// true

lodash.each([1, 2, 0, 20, 50], function(v) {
  printBool(v);
});
// true
// true
// false
// true
// true

lodash.each([1, 2, 0, 20, 50], v => printBool(v));
// true
// true
// false <---- 여기서 멈춰버림
