// 코드 2-47 객체의 값과 변수의 값

var obj1 = {
  0: 1,
  1: 2
};
console.log(obj1);
// { 0: 1, 1: 2 }

var a = obj1[0];
var b = obj1[1];
b = 10;
console.log(obj1);
// { 0: 1, 1: 2 } <------- 바뀌지 않음
console.log(obj1[1]);
// 2
console.log(b);
// 10             <------- b만 바뀜
