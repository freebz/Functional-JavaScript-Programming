// 코드 5-12 _.callback에 여러 개의 비동기 함수 넘기기

(function() {

  function add(a, b, next) {
    setTimeout(function() {
      next(a + b);
    }, 1000);
  }

  function sub(a, b, next) {
    setTimeout(function() {
      next(a - b);
    }, 1000);
  }

  function mul(a, b, next) {
    setTimeout(function() {
      next(a * b);
    }, 1000);
  }

  function log(msg, next) {
    setTimeout(function() {
      console.log(msg);
      next(msg);
    }, 1000);
  }

  _.go(_.mr(5, 10), _.callback(
    function(a, b, next) {
      add(a, b, next);
    },
    function(result, next) {
      sub(result, 10, next);
    },
    function(result, next) {
      mul(result, 10, next);
    },
    function(result, next) {
      log(result, next);
    }));
  // 50
  
})();
