// 코드 7-39 Partial.js - test1

var test1 = _.async(
  function() {
    return delay(2000);
  },
  function(a) {
    return a + 2000;
  });

test1().then(function(result) {
  console.log(result);
  // 4000
});

// 혹은 _.go(delay(2000), function(a) { return a + 2000; });
