// 코드 5-18 _.map

// [1]
console.log(JSON.stringify(_.map([1, 2, 3], function(v) {
  return new Date();
})));
// 결과: ["2017-02-05T03:33:36.964Z", "2017-02-05T03:33:36.964Z",
//       "2017-02-05T03:33:36.964Z"]

// [2]
_.map([1, 2, 3], function() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(new Date());
    }, 1000);
  });
}).then(function(result) {
  console.log(JSON.stringify(result));
  // 결과: ["2017-02-05T03:33:37.971Z","2017-2-5T03:33:38.977Z",
  //       "2017-02-05T03:33:39.979Z"]
});
