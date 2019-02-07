// 코드 2-79 함수를 감싸서 없던 공간 만들기

function wrap(func) { // [1] 함수 받기
  return function() { // [2] 함수 리턴하기, 이것이 실행됨
    /* 여기에 새로운 공간이 생김, 나중에 함수를 실행했을 때 이 부분을 거쳐감 */
    return func.apply(null, arguments); // [3]
  }
}

var add = wrap(function(a, b, callback) {
  setTimeout(function() {
    callback(a + b);
  }, 1000);
});

add(5, 10, function(r) {
  console.log(r);
  // 15
});
