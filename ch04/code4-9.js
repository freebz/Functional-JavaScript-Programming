// 코드 4-9 add_all

var add_all = _.partial(_.reduce, _, function(a, b) { return a + b });

add_all([1, 2, 3, 4]);
// 10

add_all([5, 2]);
