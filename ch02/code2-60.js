// 코드 2-60 네이티브 코드 활용하기

var slice = Array.prototype.slice;
function toArray(data) {
  return slice.call(data);
}
function rest(data, n) {
  return slice.call(data, n || 1);
}

var arr1 = toArray({ 0: 1, 1: 2, length: 2 });
// [ 1, 2 ]
arr1.push(3);
console.log(arr1);
// [ 1, 2, 3 ]

rest([1, 2, 3]);
// [ 2, 3 ]

rest([1, 2, 3], 2);
// [ 3 ]
