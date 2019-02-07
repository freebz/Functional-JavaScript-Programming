// 코드 2-62

if (function f1() {}) console.log('hi');
// hi
f1();
// Uncaught ReferenceError: f1 is not defined
