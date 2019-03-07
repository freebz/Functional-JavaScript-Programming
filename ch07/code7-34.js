// 코드 7-34 _.find에 함수들을 담아 중간에 멈추기

var a = 5;
_.find([
  function() {
    console.log(false);
    return delay(false);
  },
  function() {
    console.log("a == 10");
    return delay(a == 10);
  },
  function() {
    console.log("1 < 2");
    return delay(1 < 2);
  },
  function() {
    console.log(true);
    return delay(true);
  },
], function(fn) { return fn(); });
// false
// a == 10 (1초 후)
// i < 2   (다시 1초 후)
// 끝
