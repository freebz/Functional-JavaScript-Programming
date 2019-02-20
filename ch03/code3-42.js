// 코드 3-42 _.keys와 Object.keys

console.log(_.keys({ name: "PJ" }));
// [ 'name' ]
console.log(Object.keys({ name: "PJ" }));
// [ 'name' ]

console.log(_.keys(10));
// []
console.log(Object.keys(10));
// []

console.log(_.keys(null));
// []
console.log(Object.keys(null));
// Uncaught TypeError: Cannot convert undefined or null to object
