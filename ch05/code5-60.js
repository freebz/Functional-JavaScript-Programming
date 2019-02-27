// 코드 5-60 _.filter와 _.reject

_.reject = function(data, predi) {
  return _.filter(data, _.negate(predi));
};

// 위 코드는 아래와 같다
_.reject = function(data, predi) {
  return _.filter(data, function(v, i, l) {
    return !predi(v, i, l);
  });
};
