// 코드 3-20 두 each의 차이

// Underscore.js
var _i = 0;
_.each([1,2,3,4,5], function(v) {
  _i++;
  if (v < 3) console.log(v);
});
// 1
// 2
console.log(_i, '번 반복');
// 5번 반복

// Lodash
var lodash_i = 0;
lodash.each([1,2,3,4,5], function(v) {
  lodash_i++;
  console.log(v);
  return v < 2;
});
// 1
// 2
console.log(lodash_i, '번 반복');
// 2번 반복
