// 코드 7-36 _.loop와 _.break

_.loop([1, 2, 3, 4, 5], function(memo, num, i) {
  return _.go(delay(memo + num), function(memo) {
    console.log(i + "번째", memo);
    return memo > 6 ? _.break(memo) : memo;
  });
}, 0).then(console.log);
// 0번째 1 "loop" (1초 후)
// 1번째 3 "loop" (다시 1초 후)
// 2번째 6 "loop" (다시 1초 후)
// 3번째 10 "loop" (다시 1초 후)
// 10 최종 결과
// 5번째는 돌지 않음
