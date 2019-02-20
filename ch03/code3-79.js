// 코드 3-79 앞에서 3개만 매핑하기

_.map = bloop(_.array, _.push_to);

_.map([1, 2, 3, 4, 5, 6], function(v) {
  return v + v;
}, 3);
// [ 2, 4, 6 ]
