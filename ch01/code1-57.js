// 코드 1-57 실수 고치기

Function.prototype.partial = function() {
  var fn = this, _args = arguments; // [1] 클로저가 기역할 변수에는 원본을 남기기
  return function() {
    var args = Array.prototype.slice.call(_args); // [2] 리턴된 함수가 실행될 때마다
    						  // 복사하여 원본 지키기
    var arg = 0;
    for (var i = 0; i < args.length && arg < arguments.length; i++)
      if (args[i] === undefined) args[i] = arguments[arg++]; // 실행 때마다 새로
    							     // 들어온 인자 채우기
    return fn.apply(this, args);
  };
};

var add3 = add.partial(undefined, undefined, 3, undefined, undefined);
add3(1, 2, 4, 5);
// 15

add3(50, 50, 50, 50);
// 203

add3(10, 20, 30, 40);
// 103
