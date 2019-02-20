// 코드 3-30

_.each({ length:4 }, function() {
  console.log(arguments);
});
// [undefined, 0, Object]
// [undefined, 1, Object]
// [undefined, 2, Object]
// [undefined, 3, Object]

_.each(0, function() {
  console.log(arguments);
});
// 아무 일 없음

_.each(undefined, function() {
  console.log(arguments);
});
// 아무 일 없음

_.each(NaN, function() {
  console.log(arguments);
});
// 아무 일 없음
