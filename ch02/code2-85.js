// 코드 2-85

// 인자가 없는 함수
var hi = function() {
  console.log('hi');
};

var hi = () => console.log('hi');
hi();

// 인자가 하나인 함수
var square = function(a) {
  return a * a;
};

var square = a => a * a;
