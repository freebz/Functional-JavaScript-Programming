// 코드 5-33 _.indent

var f1 = _.indent(
  function() {
    console.log(this, arguments); // [1]
    // { parent: Window, arguments: [1, 2] }  [1, 2]
    return "hi";
  },
  function() {
    console.log(this, arguments); // [2]
    // { parent: Window, arguments: [1, 2] } ["hi"]
  });

f1(1, 2);
