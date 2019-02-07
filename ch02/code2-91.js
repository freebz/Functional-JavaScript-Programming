// 코드 2-91

(function(a, b) {
  (function(f) {
    f(f);
  }) (function(f) {
    log(a) || a++ == b || f(f);
  });
})(6, 10);
// 6 7 8 9 10
