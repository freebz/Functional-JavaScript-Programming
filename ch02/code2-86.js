// 코드 2-86 identity와 constant

var identity = function(v) {
  return v;
};

var identity = v => v;

var constant = function(v) {
  return function() {
    return v;
  }
};

var constant = v => () => v;
