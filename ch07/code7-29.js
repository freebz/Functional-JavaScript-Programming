// 코드 7-29 넘겨준 결과를 그대로 1초 후에 돌려주는 함수

var delay = function(result) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(result);
    }, 1000);
  });
};
