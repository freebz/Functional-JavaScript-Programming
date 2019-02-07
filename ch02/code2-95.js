// 코드 2-95

var each = (arr, iter, i=0) => start(f => iter(arr[i]) || ++i < arr.length && f(f));

each([5, 2, 4, 1], function(v) {
  console.log(v);
});
// 5 2 4 1

each(['a', 'b', 'c'], function(v) {
  console.log(v);
});
// a b c
