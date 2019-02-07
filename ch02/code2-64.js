// 코드 2-64

var obj = {};

if (obj.a = 5) console.log(obj.a);
// 5

if (obj.b = false) console.log(obj.b); // [2]
else console.log('hi');
// hi

var c;
if (c = obj.c = true) console.log(c);
// true
