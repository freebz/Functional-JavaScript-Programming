// 코드 5-31 비동기

_.go(10,
  _.all(
    function(a) {
      return new Promise(function(resolve) { // 'Promise' 객체 리턴
	setTimeout(function() {
	  resolve(a + 5);	    // 15
	}, 2000);
      });
    },
    function(a) { return a - 5 },   // 5
    function(a) { return a * 5 }),  // 50
  _.spread(
    function(a) { return a + 1 },   // 16
    _.callback(function(b, next) {  // 콜백 패턴
      setTimeout(function() {
	next(b + 2);		    // 7
      }, 2000);
    }),
    function(c) { return c + 3 }),  // 53
  console.log);
// 결과:
// 약 4초 뒤 16 7 53
