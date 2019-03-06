// 코드 6-13 _.clone 구현해 보기

_clone = function(obj) {
  var cloned = _.isArray(obj) ? [] : {}; // Array 일때는 []로
  var keys = _.keys(obj);
  _.each(keys, function(key) {
    cloned[key] = obj[key]; // Array일 때는 key가 숫자
  });
  return cloned;
};

var obj1 = { a: 1, b: 2, c: { d: 3 } };
var obj2 = _clone(obj1);
obj2.b = 22;
console.log(obj2);
// { a: 1, b: 22, c: { d: 3 } } obj2.b만 변경
console.log(obj1);
// { a: 1, b: 2, c: { d: 3 } } obj1.b는 그대로
console.log(obj1 == obj2);	// 둘은 서로 다르지만
// false
console.log(obj1.c == obj2.c);	// 내부 객체는 공유
// true
obj2.c.d = 33;         // 때문에 obj2.c.d를 변경하면
console.log(obj1.c.d); // obj1.c.d도 변경
// 33

var arr1 = [1, 2, { a: 3 }];
var arr2 = _clone(arr1); // 복사 후
arr2.push(4);		 // arr2에 push해도
console.log(arr1.length, arr2.length);
// 3 4  arr1은 변하지 않고
arr1[2].b = 33; // arr1의 3번째 값을 변경하면
arr1.pop();	// arr1에서 지우든 말든 arr2와 공유되고 있던 값이기에
console.log(arr1);
// [ 1, 2 ]
console.log(arr2[2]); // 값은 변경되어 있다.
// { a: 3, b: 33 }
