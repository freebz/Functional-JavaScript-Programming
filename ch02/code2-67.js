// 코드 2-67

var a = "hi";
var b = "";

var v1 = a || b; // [1] a가 긍정적인 값이면 || 이후를 확인하지 않아 a 값이 v1에 담긴다.
console.log(v1);
// "hi"

var v2 = b || a; // [2] b가 부정적이어서 a를 확인했고 a의 값이 담겼다.
console.log(v2);
// "hi"

var v3 = a && b; // [3] a가 긍정적인 값이어서 && 이후를 확인하게 되고 b 값이 담긴다.
console.log(v3);
// ""

var v4 = b && a; // [4] b가 부정적인 값이어서 && 이후를 확인할 필요 없이 b 값이 담긴다.
console.log(v4);
// ""
