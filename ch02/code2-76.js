// 코드 2-76 콜백 함수로 결과 받기

var add = function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
};

add(10, 5, function(r) {
  console.log(r);
  // 15
});
