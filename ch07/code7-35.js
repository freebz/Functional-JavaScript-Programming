// 코드 7-35 _.if _.some, _.every 조합하기

var list = [0, 0, 10, 0, 0, 0];

/* 동기 */
_.go(list,
  _.some(function(val) { return val; }), // 즉시 결과를 리턴한 경우
  _.if(function() {
    console.log('true면 여기');
  }).else(function() {
    console.log('false면 여기');
  }));
// 바로 true면 여기 출력

/* 비동기 */
_.go(list,
  _.some(function(val) { return delay(val); }), // delay 사용
  _.if(function() {
    console.log('true면 여기');
  }).else(function() {
    console.log('false면 여기');
  }));
// 3초 후 true면 여기 출력

_.go(list,
  _.every(function(val) { return delay(val); }), // _.every로 변경
  _.if(function() {
    console.log('true면 여기');
  }).else(function() {
    console.log('false면 여기');
  }));
// 1초 후 false면 여기 출력

var list2 = [2, 3, 10, 4, 5, 2];
_.go(list2, // list2 사용
  _.every(function(val) { return delay(val); }),
  _.if(function() {
    console.log('true면 여기');
  }).else(function() {
    console.log('false면 여기');
  }));
// 6초 후 true면 여기 출력

/* _.if의 첫 번째 인자로 _.some()이나 _.every()를 사용해도 좋다. */
_.go(list,
  // 첫 번째부터 false여서 1초 걸린 후 로그를 출력하지 않고 .else_if로 넘어감
  _.if(_.every(function(val) { return delay(val); }),
    function() {
      console.log('list의 경우 _.every는 false여서 여기 안 들어옴')
    })
    // 3초 더 걸린 후 "list의 경우 _.some은 true여서 여기 들어옴" 출력
  .else_if(_.some(function(val) { return delay(val); }),
    function() {
      console.log('list의 경우 _.some은 true여서 여기 들어옴')
    }),
  function() { return list2; },
  // 6초 더 걸린 후 "list2의 경우 _.every가 true여서 여기 들어옴" 출력
  _.if(_.every(function(val) { return delay(val); }),
    function() {
      console.log('list2의 경우 _.every가 true여서 여기 들어옴');
    }));
