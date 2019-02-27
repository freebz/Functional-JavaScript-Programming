// 코드 5-36 _.indent 두 번 이상 하기

var f3 = _.indent(
  function(a) {
    this.b = a + 10;
  },
  _.indent(
    function() {
      this.b = 20;
      console.log(this.b);
      // 20
      console.log(this.parent.b);
      // 15
    },
    function() {
      console.log(this.parent.arguments);
      // [5]
    }),
  function() {
    console.log(this.b);
  });

f3(5);
