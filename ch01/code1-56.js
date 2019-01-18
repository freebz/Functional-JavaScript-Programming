// 코드 1-56

function add() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
add(1, 2, 3, 4, 5);
// 15

var add2 = add.partial(undefined, 2);
add2(1, 3, 4, 5);
// 3

var add3 = add.partial(undefined, undefined, 3, undefined, undefined);
add3(1, 2, 4, 5);
// 15

add3(50, 50, 50, 50);
// 15 <--- 버그

add3(100, 100, 100, 100);
// 15 <--- 버그
