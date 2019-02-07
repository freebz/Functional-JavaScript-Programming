// 코드 2-42 재귀를 이용한 flatten

function flatten(arr) {
  return function f(arr, new_arr) { // [1]
    arr.forEach(function(v) {
      Array.isArray(v) ? f(v, new_arr) : new_arr.push(v); // [2]
    });
    return new_arr;
  }(arr, []); // [3]
}

flatten([1, [2], [3, 4]]);
// [ 1, 2, 3, 4 ]
flatten([1, [2], [[3], 4]]);
// [ 1, 2, 3, 4 ]
flatten([1, [[2], [[3], [[4], 5]]]]);
// [ 1, 2, 3, 4, 5 ]
