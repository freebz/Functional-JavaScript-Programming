// 코드 3-47

var lodashObj = lodash([1]);
/*
  lodash.prototype.each = function() {};
  lodash.prototype.map = function() {};
  lodash.prototype.filter = function() {};
  lodash.prototype.reject = function() {};
  ...
*/

var keys1 = [];
for (var key in lodashObj) {
  keys1.push(key);
}
console.log(keys1.length);
// 323

var keys2 = [];
for (var key in lodashObj) {
  if (lodashObj.hasOwnProperty(key)) keys2.push(key);
}
console.log(keys2.length);
// 5
