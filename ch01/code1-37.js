// 코드 1-37 _.compose

// underscore.js 중
_.compose = function() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
};

var greet = function(name) { return "hi: " + name; };
var exclaim = function(statement) { return statement.toUpperCase() + "!"; };
var welcome = _.compose(greet, exclaim);
welcome("moe");
// 'hi: MOE!'
