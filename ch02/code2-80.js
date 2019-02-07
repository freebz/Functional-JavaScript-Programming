// 코드 2-80 실행 이전의 공간에서 비동기 제어와 관련된 일 추가하기

function _async(func) {
  return function() {
    arguments[arguments.length++] = function(result) { // [1]
      _callback(result); // [6]
    };
    func.apply(null, arguments);  // [2]

    var _callback; // [3]
    function _async_cb_receiver(callback) { // [4]
      _callback = callback; // [5]
    }
    return _async_cb_receiver;
  };
}

var add = _async(function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
});

add(20, 30)(function(r) { // [7]
  console.log(r);
  // 50
});
