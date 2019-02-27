// 코드 5-35 값 이어주기

var f2 = _.indent(
  function(a) { this.b = a + 10; },
  function() {},
  function() {},
  function() { console.log(this.b); });
f2(5);
// 15
f2(7);
// 17
