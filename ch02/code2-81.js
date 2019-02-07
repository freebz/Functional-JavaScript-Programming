// 코드 2-81 인자를 넘기면서 실행하는 부분과 결과를 받는 부분 분리

var add = _async(function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
});

var sub = _async(function(a, b, callback) {
  setTimeout(function() {
    callback(a - b);
  }, 1000);
});

var div = _async(function(a, b, callback) {
  setTimeout(function() {
    callback(a / b);
  }, 1000);
});

add(10, 15)(function(a) {
  sub(a, 5)(function(a) {
    div(a, 10)(function(r) {
      console.log(r);
      // 약 3초 후에 2가 찍힘
    });
  });
});
