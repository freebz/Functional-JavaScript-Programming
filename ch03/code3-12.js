// 코드 3-12 200개로 재시도

var list = _.range(200);
// [0, 1, 2, 3, 4, 5 ... 199]

// Underscore.js
var _i = 0;
var result1 =
  _.chain(list)
  .filter(function(num) {
    _i++;
    return num % 2 == 0;
  })
  .take(5)
  .value();

console.log(result1, _i);
// [0, 2, 4, 6, 8] 200 (200번 반복)

// Lodash
var lodash_i = 0;
var result2 =
  lodash.chain(list)
  .filter(function(num) {
    lodash_i++;
    return num % 2 == 0;
  })
  .take(5)  // <---- 이 값에 따라 위에서 5개가 모이면 루프를 멈추도록 한다.
  .value();

console.log(result2, lodash_i);
// [0, 2, 4, 6, 8] 9 (9번 반복)
