// 코드 3-29

_.each(function(a, b) {}, function() {
  console.log(arguments);
});
// [undefined, 0, Object]
// [undefined, 1, Object]

_.keys(10);
// []

_.keys(null);
// []
