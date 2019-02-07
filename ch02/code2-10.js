// 코드 2-10 한 번에 length 올리기

var obj12 = [];
obj12.length = 5;
console.log(obj12);
// Array[5]

var obj13 = [1, 2];
obj13[5] = 5;
console.log(obj13);
// [1, 2, 5: 5]
console.log(obj13.length);
// 6
obj13.push(6);
console.log(obj13);
// [1, 2, 5: 5, 6: 6]
console.log(obj13.length);
// 7
