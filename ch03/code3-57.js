// 코드 3-57 _.if

_.if = function(validator, func, alter) {
  return function() {
    return validator.apply(null, arguments) ?
      func.apply(null, arguments) :
      alter && alter.apply(null, arguments);
  }
};

function sub(a, b) {
  return a - b;
}

var sub2 = _.if(
  function(a, b) { return a >= b; },
  sub,
  function() { return new Error("a가 b보다 작습니다."); });

sub2(10, 5);
// 5;

sub2(2, 5);
// Error: a가 b보다 작습니다.

var diff = _.if(
  function(a, b) { return a >= b; },
  sub,
  function(a, b) { return sub(b, a) });

diff(2, 5);
// 3

_.safety = _.with_validator = _.if;
