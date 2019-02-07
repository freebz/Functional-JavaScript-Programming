// 코드 2-66

var a = true;
var b = false;

var v1 = a || b;
console.log(v1);
// true

var v2 = b || a;
console.log(v2);
// true

var v3 = a && b;
console.log(v3);
// false

var v4 = b && a;
console.log(v4);
// false
