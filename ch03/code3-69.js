// 코드 3-69 _.some, _.every

_.some = bloop(_.constant(false), _.constant(true), _.idtt);
_.every = bloop(_.constant(true), _constant(false), _.not);

_.some([false, null, 10, undefined], Number.isInteger);
// true (루프 count 3)

_.every([false, null, true, undefined], _.not);
// false (루프 count 3)

_.every([function() {}, {}, [], {}], _.isObject);
// true (루프 count 4)
