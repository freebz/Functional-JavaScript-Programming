// 코드 5-24 비동기 함수와 조건문2

function test3(a) {
  return is_1_async(a).then(function(bool) {
    if (bool) return '1입니다.';
    else return is_2_async(a).then(function(bool) {
      if (bool) return '2입니다.';
      else return '1도 아니고 2도 아닙니다.';
    });
  });
}
test3(2).then(console.log);
// 결과: 2입니다. (정상 동작)
