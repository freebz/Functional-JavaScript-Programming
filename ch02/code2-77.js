// 코드 2-77

var add = function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
};

var sub = function(a, b, callback) {
  setTimeout(function() {
    callback(a - b);
  }, 1000);
};

var div = function(a, b, callback) {
  setTimeout(function() {
    callback(a / b);
  }, 1000);
};

add(10, 15, function(a) {
  sub(a, 5, function(a) {
    div(a, 10, function(r) {
      console.log(r);
      // 약 3초 후에 2가 찍힘
    });
  });
});
