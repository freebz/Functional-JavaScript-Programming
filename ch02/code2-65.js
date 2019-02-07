// 코드 2-65

function add(a, b) {
  return a + b;
}

if (add(1, 2)) console.log('hi1');

var a;
if (a = add(1, 2)) console.log(a);
// 3

if (function() { return true; }()) console.log('hi');
// hi
