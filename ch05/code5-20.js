// 코드 5-20 일반 콜백 함수를 _.map의 iteratee로 사용

_.go([1, 2, 3],
  _.map(_.callback(function(val, i, list, next) {
    setTimeout(function() {
      next(new Date());
    }, 1000);
  })),
  JSON.stringify,
  console.log);
// 결과: ["2017-02-05T03:33:37.971Z","2017-02-05T03:33:38.977Z",
//       "2017-02-05T03:33:39.979Z"]
