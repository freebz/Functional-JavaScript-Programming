// 코드 5-13 _.callback으로 미리 지정해 두기

var add = _.callback(function(a, b, next) {
  setTimeout(function() {
    next(a + b);
  }, 1000);
});

var sub = _.callback(function(a, b, next) {
  setTimeout(function() {
    next(a - b);
  }, 1000);
});

var mul = _.callback(function(a, b, next) {
  setTimeout(function() {
    next(a * b);
  }, 1000);
});

var log = _.callback(function(msg, next) {
  setTimeout(function() {
    console.log(msg);
    next(msg);
  }, 1000);
});

_.go(_.mr(5, 10),
  add,
  function(result) {
    return sub(result, 10);
  },
  function(result) {
    return mul(result, 100);
  },
  function(result) {
    return log(result);
  });
  // 500
