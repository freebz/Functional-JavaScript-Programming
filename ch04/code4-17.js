// 코드 4-17

// for - 꽤 복잡하다
_.pipeline = function() {
  var funs = arguments;

  return function(seed) {
    var l = seed;
    for (var i = 0; i < funs.length; i++) {
      var r = funs[i];
      l = r(l);
    }
    return l;
  }
};

// 마이클 포거스 - 아름답다.
_.pipeline = function() {
  var funs = arguments;

  return function(seed) {
    return _.reduce(funs, function(l, r) { return r(l); }, seed);
  };
};

// _.partial과 함께
_.pipeline = function() {
  return _.partial(_.reduce, arguments, function(l, r) { return r(l); });
};
