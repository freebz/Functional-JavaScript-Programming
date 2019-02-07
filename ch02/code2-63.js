// 코드 2-63 이미 선언되어 있는 변수의 값 재할당

var a;
if (a = 5) console.log(a); // [1]
// 5

if (a = 0) console.log(1); // [2]
else console.log(a);
// 0

if (!(a = false)) console.log(a); // [3]
// false

if (a = 5 - 5); // [4]
else console.log(a);
// 0
