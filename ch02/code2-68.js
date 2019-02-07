// 코드 2-68

console.log(0 && 1);
// 0

console.log(1 && 0);
// 0

console.log([] || {})
// []

console.log([] && {});
// {}

console.log([] && {} || 0);
// {}

console.log(0 || 0 || 0 || 1 || null);
// 1

console.log(add(10, -10) || add(10, -10));
// 0

console.log(add(10, -10) || add(10, 10));
// 20

var v;
console.log((v = add(10, -10)) || v++ && 20);
// 0

var v;
console.log((v = add(10, -10)) || ++v && 20);
// 20
