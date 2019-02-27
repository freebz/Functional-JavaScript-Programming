// 코드 5-26 _.if를 _.constant, 화살표 함수, _.go와 함께 쓰기

// _.constant
var test5 =
  _.if(is_1_async, _.constant('1입니다.'))
  .else_if(is_2_async, _.constant('2 입니다.'))
  .else(_.constant('1도 아니고 2도 아닙니다.'));
test5(1).then(console.log);
// 결과: 1입니다.(정상 동작)

// 화살표 함수
var test6 =
  _.if(is_1_async, () => '1입니다.')
  .else_if(is_2_async, () => '2입니다.')
  .else(() => '1도 아니고 2도 아닙니다.');
test6(2).then(console.log);
// 결과: 2입니다. (정상 동작)

// _.go로 즉시 실행, _.constant == _.c
_.go(3,
  _.if(is_1_async, _.c('1입니다.'))
  .else_if(is_2_async, _.c('2입니다.'))
  .else(_.c('1도 아니고 2도 아닙니다.')),
  console.log);
// 결과: 1도 아니고 2도 아닙니다. (정상 동작)
