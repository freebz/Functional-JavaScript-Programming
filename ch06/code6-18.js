// 코드 6-18 Immutable.List

var list1 = Immutable.List([1, 2]);
console.log(list1.toArray()); // [1, 2]

var list2 = list1.push(3);
var list3 = list2.shift();

console.log(list1.size == 2); // true
console.log(list2.size == 3); // true
console.log(list3.size == 2); // true

console.log(list1.toArray()); // [1, 2]
// list1.push(3)을 했지만 list1은 변하지 않았다.
// 3이 추가된 새로운 객체가 만들어지기 때문이고 그 값은 list2에 담겼다.

console.log(list2.toArray()); // [1, 2, 3]
// list.shift()를 했지만 맨 앞에 1이 없어지지 않았다.
// 1이 제거된 새로운 객체가 만들어지기 때문이고 그 값은 list3에 담겼다.

console.log(list3.toArray()); // [2,3]
