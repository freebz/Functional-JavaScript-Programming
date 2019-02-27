// 코드 5-21 이미 있던 함수 사용하기

function syncDate() {
  return new Date();
}
function promiseDate() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(new Date());
    }, 1000);
  });
}

_.go([1, 2, 3],
  _.map(syncDate),
  JSON.stringify,
  console.log);
// 결과: ["2017-02-05T03:33:36.964Z", "2017-02-05T03:33:36.964Z",
//       "2017-02-05T03:33:36.964Z"]

_.go([1, 2, 3],
  _.map(promiseDate),
  JSON.stringify,
  console.log);
// 결과: ["2017-02-05T03:33:37.971Z","2017-02-05T03:33:38.977Z",
//       "2017-02-05T03:33:39.979Z"]
