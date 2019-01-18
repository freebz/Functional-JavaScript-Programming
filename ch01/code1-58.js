// 코드 1-58 Underscore.js의 _.partial

var ac = _.partial(abc, _, 'b'); // a가 올 자리를 비워 두었고 c 자리는 생략
ac('a', 'c')
// a b c

var b = _.partial(abc, 'a', _, 'c'); // b가 올 자리를 비워 둠
b('b');
// a b c

var ab = _.partial(abc, _, _, 'c'); // a, b가 올 자리를 비워 둠
ab('a', 'b');
// a b c

var add2 = _.partial(add, _, 2); // 1이 올자리를 비워 둠
add2(1, 3, 4, 5); // 이후에 인자를 더 많이 넘겨도 모두 add에게 전달됨
// 15
add2(3, 5);
// 10

function equal(a, b) {
  return a === b;
}
var isUndefined = _.partial(equal, undefined); // a 자리에 undefined를 적용해 둠
isUndefined(undefined); // b 자리에 undefined가 들어와 true를 리턴함
// true

var bj = {
  name: "BJ",
  greet: _.partial(function(a, b) { // Undersocre.js, Lodash의 _.partial은
    return a + this.name + b;	    // 함수가 실행될 때 결정되는 this를 잘 연결해 줌
  }, "저는 ", "입니다.")
};
bj.greet();
// 저는 BJ입니다.

bj.greet.call({ name: "HA" }); // 이후에도 this를 바꿀 수 있음
// 저는 HA입니다.

var greetPj = bj.greet.bind({ name: "PJ" }); // bind는 새로운 함수를 리턴함
greetPj();
// 저는 PJ입니다.

bj.greet(); // 여전히 잘 보존함
// 저는 BJ입니다.
