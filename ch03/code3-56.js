// 코드 3-56 _.rester

_.rester = function(func, num) {
  return function() {
    return func.apply(null, _.rest(arguments, num));
  }
};

function sum(a, b, c, d) {
  return (a || 0) + (b || 0) + (c || 0) + (d || 0);
}

_.rester(sum)(1, 2, 3, 4);
;; 9
_.rester(sum, 2)(1, 2, 3, 4);
// 7
_.rester(sum, 3)(1, 2, 3, 4);
// 4
