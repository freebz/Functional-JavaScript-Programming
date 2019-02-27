// 코드 5-23 비동기 함수와 조건문

var is_1_async = function(a) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(a == 1);
    }, 1000);
  });
};

var is_2_async = function(a) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(a == 2);
    }, 1000);
  });
};

function test2(a) {
  if (is_1_async(a)) return '1입니다.';
  else if (is_2_async(a)) return '2입니다.';
  else return '1도 아니고 2도 아닙니다.';
}
console.log(test2(2));
// 결과: 1입니다. (정상적으로 동작이 되지 않음)
