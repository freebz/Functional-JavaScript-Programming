// 코드 2-93

var start = f => f(f);
var logger = (a, b) => start(f => log(a) || a++ == b || f(f));
logger(6, 10);
// 6 7 8 9 10

// 위와 동일한 코드를 function 키워드를 사용하여 확인
var start = function(f) {
  f(f);
};
var logger = function(a, b) {
  start(function(f) {
    log(a) || a++ == b || f(f);
  })
};
logger(1, 5);
// 1 2 3 4 5
