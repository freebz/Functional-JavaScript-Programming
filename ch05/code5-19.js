// 코드 5-19 파이프라인으로 동기와 비동기 코드 동일한 구조 만들기

// [1]
_.go([1, 2, 3],
  _.map(function() {
    return new Date();
  }),
  JSON.stringify,
  console.log);
// 결과: ["2017-02-05T03:33:36.964Z", "2017-02-05T03:33:36.964Z",
//       "2017-02-05T03:33:36.964Z"]

// [2]
_.go([1, 2, 3],
  _.map(function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
	resolve(new Date());
      }, 1000);
    });
  }),
  JSON.stringify,
  console.log);
// 결과: ["2017-02-05T03:33:37.971Z","2017-02-05T03:33:38.977Z",
//       "2017-02-05T03:33:39.979Z"]
