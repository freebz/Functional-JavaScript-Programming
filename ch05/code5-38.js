// 코드 5-38

_.go(20,
  _.branch( // branch 내부에서는 비동기 제어가 됨
    function(a) {
      return new Promise(function(resolve) {
	resolve(a+10);
      });
    },
    function(a) { // a+10을 기다림
      console.log(a);
      return a * a;
    },
    console.log),
  console.log); // 20은 즉시 내려옴
// 결과
// 20
// 30
// 900
