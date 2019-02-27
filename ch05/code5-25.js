// 코드 5-25 _.if().else_if().else();

var test4 =
  _.if(is_1_async, function() { return '1입니다.'; })
  .else_if(is_2_async, function() { return '2입니다.'; })
  .else(function() { return '1도 아니고 2도 아닙니다.'; });
test4(2).then(console.log);
// 결과: 2입니다. (정상 동작)

// test1과 비교
function test1(a) {
  if (is_1(a)) return '1입니다.';
  else if (is_2(a)) return '2입니다.';
  else return '1도 아니고 2도 아닙니다.';
}
