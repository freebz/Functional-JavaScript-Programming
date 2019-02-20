// 코드 3-8 _.noop

_.noop();
// undefined
_.noop(10);
// undefined
_.noop({});
// undefined

_.noop = function() {};
